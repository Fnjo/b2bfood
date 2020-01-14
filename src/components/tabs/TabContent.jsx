import React from 'react'
import PropTypes from 'prop-types'
import './TabContent.scss'

export class TabContent extends React.Component {
    state = {
        activeTab: 1
    }
    static propTypes = {
        children: PropTypes.any,
        index: PropTypes.number,
        className: PropTypes.string
    }

    render() {
        const { className } = this.props

        return (
            <div
                className={
                    className
                        ? `tabContent tabContent-${className}`
                        : 'tabContent'
                }
                index={this.props.index}
            >
                {this.props.children}
            </div>
        )
    }
}
