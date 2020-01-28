import React from 'react'
import PropTypes from 'prop-types'
import './Toggle.scss'

export class Toggle extends React.Component {
    static propTypes = {
        leftToggle: PropTypes.string,
        rightToggle: PropTypes.string,
        isOrders: PropTypes.any,
        onClick: PropTypes.any
    }

    render() {
        const { leftToggle, rightToggle, isOrders, onClick } = this.props
        return (
            <div className={'toggle'} onClick={onClick}>
                <span className={isOrders && 'toggled'}>{leftToggle}</span>
                <span className={!isOrders && 'toggled'}>{rightToggle}</span>
            </div>
        )
    }
}
