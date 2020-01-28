import React from 'react'
import './HomeView.scss'
import { PageTitle } from '../titles/PageTitle'
import { Toggle } from '../buttons/Toggle'
import { OverviewTable } from '../table/OverviewTable'
import { DetailTitle } from '../titles/DetailTitle'
import { DetailTable } from '../table/DetailTable'
import { OrderTable } from '../table/OrderTable'
import { Button } from '../buttons/Button'
import invoice from '../../images/invoice.png'
import downloadicon from '../../images/download.svg'
import exit from '../../images/exit.svg'

export class HomeView extends React.Component {
    state = {
        isMobile: false,
        orders: true,
        activeRow: '',
        showDetails: false,
        showInvoice: false
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

    componentDidUpdate() {
        this.data = JSON.parse(localStorage.getItem('b2bfood'))
    }

    render() {
        const {
            orders,
            activeRow,
            isMobile,
            showDetails,
            showInvoice
        } = this.state

        if (!this.data) {
            this.data = []
        }

        return (
            <div className={'home'}>
                <div className={'home-left'}>
                    <PageTitle title={'Home'} />
                    <div className={'table-top'}>
                        {orders ? (
                            <h3>Recent orders</h3>
                        ) : (
                            <h3>Recent payments</h3>
                        )}
                        <Toggle
                            leftToggle={'Orders'}
                            rightToggle={'Payments'}
                            isOrders={orders}
                            onClick={() => this.toggleHandler()}
                        />
                    </div>

                    <OverviewTable
                        mobile={isMobile}
                        page={'home'}
                        activeRow={activeRow}
                        data={orders ? this.data.orders : this.data.payments}
                        onClick={e => this.changeActiveRow(e)}
                        uniqueRow={'order'}
                        tableHeaders={
                            isMobile
                                ? ['Order no.', 'Company', 'Time']
                                : [
                                      'Order no.',
                                      'Company',
                                      'Booth',
                                      'Menu',
                                      'Dishes',
                                      'Time'
                                  ]
                        }
                    />
                </div>
                {showDetails && <span className={'blackLayer'} />}
                {showInvoice && (
                    <>
                        <span className={'blackLayerInvoice'} />
                        <img
                            src={invoice}
                            alt={'invoice'}
                            className={'invoiceimg'}
                        />
                        <Button
                            icon={downloadicon}
                            text={'Download'}
                            className={'downloadbtn'}
                        />
                        <Button
                            icon={exit}
                            className={'exitbtn'}
                            onClick={this.toggleInvoice}
                        />
                    </>
                )}
                <div
                    className={
                        showDetails
                            ? 'home-right home-right-showOnMobile'
                            : 'home-right'
                    }
                >
                    <DetailTitle
                        title={`Order ${activeRow}`}
                        exit={isMobile}
                        onExit={this.ExitDetails}
                    />
                    <DetailTable
                        page={'home'}
                        data={this.data.orders}
                        activeOrder={activeRow}
                    />
                    <div className={'order-row'}>
                        <DetailTitle title={'Order'} />
                        {!isMobile && (
                            <Button
                                text={'Invoice'}
                                onClick={this.toggleInvoice}
                            />
                        )}
                    </div>
                    <OrderTable
                        page={'home'}
                        tableHeaders={['Amount', 'Dish']}
                        data={this.data.orders}
                        activeOrder={activeRow}
                    />
                </div>
            </div>
        )
    }

    toggleHandler = () => {
        this.setState({ orders: !this.state.orders })
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

    toggleInvoice = () => {
        this.setState({
            showInvoice: !this.state.showInvoice
        })
    }
}
