import React from 'react'
import PropTypes from 'prop-types'
import './Tab.scss'

export class Tab extends React.Component {
    static propTypes = {
        title: PropTypes.string,
        onClick: PropTypes.any,
        index: PropTypes.number,
        isActive: PropTypes.any
    }

    render() {
        const { index, onClick, title, isActive } = this.props
        return (
            <div
                className={isActive ? `tab tab-is-active` : 'tab'}
                onClick={onClick}
                index={index}
                key={'tab'}
            >
                <p>{title}</p>
            </div>
        )
    }
}
