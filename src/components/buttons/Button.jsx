import React from 'react'
import PropTypes from 'prop-types'
import './Button.scss'

export class Button extends React.Component {
    static propTypes = {
        text: PropTypes.string,
        onClick: PropTypes.any,
        icon: PropTypes.any,
        className: PropTypes.string
    }

    render() {
        const { text, onClick, icon, className } = this.props
        return (
            <div
                className={className ? `button button-${className}` : 'button'}
                onClick={onClick}
            >
                {icon && <img src={icon} alt={'icon'} />}
                {text}
            </div>
        )
    }
}
