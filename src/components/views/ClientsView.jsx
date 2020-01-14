import React from 'react'
import { PageTitle } from '../titles/PageTitle'
import './ClientsView.scss'
import '../buttons/Button.scss'
import { OverviewTable } from '../table/OverviewTable'
import { DetailTitle } from '../titles/DetailTitle'
import { DetailTable } from '../table/DetailTable'
import { Button } from '../buttons/Button'
import addUser from '../../images/add-user.svg'
import { Tabs } from '../tabs/Tabs'
import { Tab } from '../tabs/Tab'
import { TabContent } from '../tabs/TabContent'
import { Modal } from '../modals/Modal'
import { Form } from '../forms/Form'
import { OrderHistory } from '../history/OrderHistory'

export class ClientsView extends React.Component {
    state = {
        isMobile: false,
        activeRow: '',
        activeModal: false,
        showDetails: false,
        formData: {}
    }

    data = JSON.parse(localStorage.getItem('b2bfood'))

    componentDidMount() {
        const active = document.querySelectorAll('[data-id]')
        const mobile = window.matchMedia('(max-width: 600px)').matches
        if (mobile) {
            this.setState({
                isMobile: true
            })
        }
        this.setState({
            activeRow: active[0].dataset.id
        })
    }

    render() {
        const { activeRow, activeModal, isMobile, showDetails } = this.state

        return (
            <div className={'clients'}>
                <div className={'clients-left'}>
                    <div className={'clients-left-header'}>
                        <PageTitle title={'Clients'} />
                        <Button
                            className={'has-icon'}
                            text={'Add client'}
                            icon={addUser}
                            onClick={() => this.toggleModal()}
                        />
                    </div>
                    <OverviewTable
                        mobile={isMobile}
                        page={'clients'}
                        data={this.data && this.data.clients}
                        activeRow={activeRow}
                        uniqueRow={'company'}
                        onClick={e => this.changeActiveRow(e)}
                        tableHeaders={
                            isMobile
                                ? ['Company', 'Menu']
                                : ['Company', 'Booth', 'Menu']
                        }
                    />
                </div>
                {showDetails && <span className={'blackLayer'} />}
                <div
                    className={
                        showDetails
                            ? 'clients-right clients-right-showOnMobile'
                            : 'clients-right'
                    }
                >
                    <DetailTitle
                        title={activeRow ? activeRow : 'Client'}
                        exit={isMobile}
                        onExit={this.ExitDetails}
                    />
                    <Tabs>
                        <Tab title={'Details'} name={'tab'} />
                        <Tab title={'Order history'} name={'tab'} />
                        <TabContent index={0} name={'TabContent'}>
                            <DetailTable
                                data={this.data && this.data.clients}
                                page={'clients'}
                                activeOrder={activeRow}
                            />
                        </TabContent>
                        <TabContent index={1} name={'TabContent'}>
                            {this.data.orders
                                .slice(0)
                                .reverse()
                                .map(order => {
                                    if (
                                        activeRow.toUpperCase() ===
                                        order.company.toUpperCase()
                                    ) {
                                        return (
                                            <OrderHistory
                                                key={order.order}
                                                date={order.date}
                                                order={order.order}
                                                payment={order.payment}
                                                price={order.price}
                                                time={order.time}
                                            />
                                        )
                                    } else {
                                        return null
                                    }
                                })}
                        </TabContent>
                    </Tabs>
                </div>
                <Modal
                    isActive={activeModal}
                    closeModal={this.toggleModal}
                    title={'Add client'}
                >
                    <span className={'subtitle'}>All fields are required</span>
                    <Form
                        submitData={event => this.submitClientData(event)}
                        btnText={'Add client'}
                        id={'addClientForm'}
                    >
                        <label>
                            Company
                            <input
                                id='company'
                                type='text'
                                name='company'
                                value={this.state.company}
                                required
                            />
                        </label>
                        <label>
                            Contact
                            <input type='text' name='contact' required />
                        </label>
                        <label>
                            Booth
                            <input type='text' name='booth' required />
                        </label>
                        <label>
                            Phone
                            <input type='text' name='phone' required />
                        </label>
                        <label>
                            E-mail
                            <input type='text' name='email' required />
                        </label>
                        <label>
                            Menu
                            <select name='menu' class={'addclientselect'}>
                                {this.data.menus.map(menu => (
                                    <option value={menu.menuname}>
                                        {menu.menuname}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </Form>
                </Modal>
            </div>
        )
    }

    submitClientData = event => {
        const stored = JSON.parse(localStorage.getItem('b2bfood'))
        event.preventDefault()
        const form = event.target
        const newdata = new FormData(form)
        this.setState(
            {
                formData: this.objectifyFormData(newdata)
            },
            () => {
                stored.clients.push(this.state.formData)
                localStorage.setItem('b2bfood', JSON.stringify(stored))
                this.data = JSON.parse(localStorage.getItem('b2bfood'))
                form.reset()
                this.toggleModal()
            }
        )
    }

    objectifyFormData = fd => {
        const data = {}
        for (let key of fd.keys()) {
            data[key] = fd.get(key)
        }
        console.log(data)
        return data
        // return JSON.stringify(data, null, 2)
    }

    toggleModal = () => {
        this.setState({
            activeModal: !this.state.activeModal
        })
    }

    changeActiveRow = e => {
        this.setState({
            activeRow: e.currentTarget.dataset.id,
            showDetails: !this.state.showDetails
        })
    }

    ExitDetails = () => {
        this.setState({
            showDetails: false
        })
    }
}
