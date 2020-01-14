import React from 'react'
import { PageTitle } from '../titles/PageTitle'
import './MenuView.scss'
import { DetailTitle } from '../titles/DetailTitle'
import { OverviewTable } from '../table/OverviewTable'
import { OrderTable } from '../table/OrderTable'
import { Button } from '../buttons/Button'
import addMenu from '../../images/add-menu.svg'
import removeIcon from '../../images/remove.png'
import { Modal } from '../modals/Modal'
import { Form } from '../forms/Form'
import { MultiInput } from '../forms/MultiInput'

export class MenuView extends React.Component {
    state = {
        activeRow: '',
        showDetails: false,
        isMobile: false,
        activeModal: false,
        formData: {}
    }

    // data = [
    //     {
    //         menuname: 'IBC 2019',
    //         dishes: 17
    //     },
    //     {
    //         menuname: 'ISE 2019',
    //         dishes: 18
    //     },
    //     {
    //         menuname: 'IBC 2018',
    //         dishes: 16
    //     },
    //     {
    //         menuname: 'ISE 2018',
    //         dishes: 17
    //     }
    // ]

    // menuData = [
    //     {
    //         number: '1.',
    //         dish: 'rice',
    //         description: 'Cooked white rice',
    //         price: '€14.50'
    //     },
    //     {
    //         number: '2.',
    //         dish: 'rice',
    //         description: 'Cooked white rice',
    //         price: '€14.50'
    //     },
    //     {
    //         number: '3.',
    //         dish: 'rice',
    //         description: 'Cooked white rice',
    //         price: '€14.50'
    //     },
    //     {
    //         number: '4.',
    //         dish: 'rice',
    //         description: 'Cooked white rice',
    //         price: '€14.50'
    //     },
    //     {
    //         number: '5.',
    //         dish: 'rice',
    //         description: 'Cooked white rice',
    //         price: '€14.50'
    //     }
    // ]

    data = JSON.parse(localStorage.getItem('b2bfood'))

    componentDidMount() {
        const active = document.querySelectorAll('[data-id]')
        const mobile = window.matchMedia('(max-width: 600px)').matches
        if (mobile) {
            console.log('setting initial mobile state')
            this.setState({
                isMobile: true
            })
        }
        console.log('setting initial active row')
        this.setState({
            activeRow: active[0].dataset.id
        })
    }

    render() {
        const { activeRow, showDetails, isMobile, activeModal } = this.state
        return (
            <div className={'menu'}>
                <div className={'menu-left'}>
                    <div className={'menu-left-header'}>
                        <PageTitle title={'Menu'} />
                        <Button
                            className={'has-icon'}
                            text={'Add menu'}
                            icon={addMenu}
                            onClick={() => this.toggleModal()}
                        />
                    </div>
                    <OverviewTable
                        page={'menu'}
                        data={this.data && this.data.menus}
                        activeRow={activeRow}
                        uniqueRow={'menuname'}
                        onClick={e => this.changeActiveRow(e)}
                        tableHeaders={['Menu name', 'Dishes']}
                    />
                </div>
                {showDetails && <span className={'blackLayer'} />}
                <div
                    className={
                        showDetails
                            ? 'menu-right menu-right-showOnMobile'
                            : 'menu-right'
                    }
                >
                    <DetailTitle
                        title={`Menu ${activeRow}`}
                        exit={isMobile}
                        onExit={this.ExitDetails}
                    />
                    {/* <OverviewTable
                        data={this.data && this.data.menus}
                        page={'menudetails'}
                        activeRow={activeRow}
                    /> */}
                    <OrderTable
                        mobile={isMobile}
                        page={'menu'}
                        data={this.data && this.data.menus}
                        activeOrder={activeRow}
                    />
                </div>
                <Modal
                    isActive={activeModal}
                    closeModal={this.toggleModal}
                    title={'Add menu'}
                    className={'menu'}
                >
                    <Form
                        btnText={'Add menu'}
                        submitData={event => this.submitMenuData(event)}
                    >
                        <label>
                            <span className={'celldivider'}>|</span>
                            Menu name
                            <input
                                id='menuName'
                                type='text'
                                name='menuname'
                                value={this.state.company}
                                required
                            />
                        </label>
                        <div className={'formHeaders'}>
                            <h3>-</h3>
                            <h3>Name </h3>
                            <h3>Description </h3>
                            <h3>Price</h3>
                            <h3>-</h3>
                        </div>
                        <MultiInput
                            baseAmount={1}
                            className={'form-row'}
                            renderInput={(index, initialIndex, remove) => (
                                <>
                                    <input
                                        type='text'
                                        id='dishNo'
                                        name={`${index + 1}`}
                                        value={`${index + 1}.`}
                                        disabled
                                    />
                                    <span className={'celldivider'}>|</span>
                                    <input
                                        type='text'
                                        id='dishName'
                                        name={`dish-${index + 1}`}
                                    />
                                    <span className={'celldivider'}>|</span>
                                    <input
                                        type='text'
                                        id='dishDesc'
                                        name={`description-${index + 1}`}
                                        // value={this.state.company}
                                        // onChange={this.handleCompanyChange}
                                    />
                                    <span className={'celldivider'}>|</span>
                                    <input
                                        type='text'
                                        id='dishPrice'
                                        name={`price-${index + 1}`}
                                        // value={this.state.company}
                                        // onChange={this.handleCompanyChange}
                                    />
                                    <Button
                                        className={'remove'}
                                        icon={removeIcon}
                                        onClick={remove}
                                    />
                                </>
                            )}
                        />
                    </Form>
                </Modal>
            </div>
        )
    }
    toggleModal = () => {
        console.log('toggling modal')
        this.setState({
            activeModal: !this.state.activeModal
        })
    }

    changeActiveRow = e => {
        console.log('changing active row')
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

    submitMenuData = event => {
        const stored = JSON.parse(localStorage.getItem('b2bfood'))
        event.preventDefault()
        const form = event.target
        const newdata = new FormData(form)
        this.setState(
            {
                formData: this.objectifyFormData(newdata)
            },
            () => {
                stored.menus.push(this.state.formData)
                localStorage.setItem('b2bfood', JSON.stringify(stored))
                this.data = JSON.parse(localStorage.getItem('b2bfood'))
                form.reset()
                this.toggleModal()
            }
        )
    }

    objectifyFormData = fd => {
        const data = {}
        let item = {}
        const items = []
        let dishnumber = 1

        fd.forEach((value, key) => {
            if (key === 'menuname') {
                data[key] = value
            } else if (key === `dish-${dishnumber}`) {
                item['number'] = `${dishnumber}`
                item['dish'] = fd.get(`dish-${dishnumber}`)
                item['description'] = fd.get(`description-${dishnumber}`)
                item['price'] = fd.get(`price-${dishnumber}`)
                items.push(item)
                item = {}
                dishnumber++
            }
        })
        data['dishes'] = dishnumber - 1
        data['items'] = items

        return data
        // return JSON.stringify(data, null, 2)
    }
}
