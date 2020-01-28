import React from 'react'
import './OrderRow.scss'
import PropTypes from 'prop-types'
import { Button } from '../buttons/Button'

export class OrderRow extends React.Component {
    state = {
        amount: 0
    }

    static propTypes = {
        index: PropTypes.string,
        dish: PropTypes.string,
        price: PropTypes.string,
        description: PropTypes.string,
        onIncrease: PropTypes.func,
        onDecrease: PropTypes.func
    }

    render() {
        const { index, dish, price, description } = this.props
        const { amount } = this.state

        return (
            <div className={'orderRow'}>
                <div className={'orderRow-number'}>{index}.</div>
                <div className={'orderRow-details'}>
                    <div className={'orderRow-dishAndPrice'}>
                        <div className={'orderRow-dishAndPrice-dish'}>
                            {dish}
                        </div>
                        <div className={'orderRow-dishAndPrice-price'}>
                            €{price}
                        </div>
                    </div>
                    <div className={'orderRow-description'}>{description}</div>
                </div>
                <div className={'orderRow-counter'}>
                    <Button
                        className={'minus'}
                        text={'-'}
                        onClick={this.decreaseItem}
                    />
                    <div className={'amount'}>{amount}</div>
                    <Button
                        className={'plus'}
                        text={'+'}
                        onClick={this.increaseItem}
                    />
                </div>
            </div>
        )
    }

    increaseItem = () => {
        this.setState(
            {
                amount: this.state.amount + 1
            },
            () => this.props.onIncrease(this.state.amount)
        )
    }

    decreaseItem = () => {
        this.setState(
            {
                amount: Math.max(this.state.amount - 1, 0)
            },
            () => this.props.onDecrease(this.state.amount)
        )
    }
}
