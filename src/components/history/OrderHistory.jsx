import React from 'react'
import PropTypes from 'prop-types'
import './OrderHistory.scss'

export class OrderHistory extends React.Component {
    state = {
        activeTab: 1
    }

    static propTypes = {
        children: PropTypes.any,
        date: PropTypes.string,
        order: PropTypes.string,
        payment: PropTypes.string,
        price: PropTypes.number,
        time: PropTypes.string
    }

    render() {
        const { date, order, payment, price, time } = this.props

        return (
            <div className={`orderHistory`}>
                <div className={'orderHistory-top'}>
                    <div className={'orderHistory-date'}>
                        {date} - {time}
                    </div>
                    <div className={'orderHistory-orderNo'}>Order #{order}</div>
                </div>

                <div className={'orderHistory-bottom'}>
                    <div className={'orderHistory-status'}>{payment}</div>
                    <div className={'orderHistory-price'}>€{price}</div>
                </div>
            </div>
        )
    }
}
