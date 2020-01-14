import React from 'react'
import PropTypes from 'prop-types'
import './Tabs.scss'
import { Tab } from './Tab'

export class Tabs extends React.Component {
    state = {
        activeTab: 0
    }

    static propTypes = {
        title: PropTypes.string,
        children: PropTypes.any
    }

    tabContentCounter = 0

    render() {
        const { children } = this.props
        const { activeTab } = this.state

        return (
            <div className={'tabs'}>
                <div className={'tabContainer'}>
                    {children.map((child, i) => {
                        if (child.props.name === 'tab') {
                            return (
                                <Tab
                                    key={child.props.title}
                                    isActive={activeTab === i}
                                    index={i}
                                    title={child.props.title}
                                    onClick={() => this.changeActiveTab(i)}
                                />
                            )
                        }

                        return ''
                    })}
                </div>
                {children.map(child => {
                    if (
                        child.props.name === 'TabContent' &&
                        child.props.index === activeTab
                    ) {
                        return child
                    }
                    return ''
                })}
            </div>
        )
    }
    changeActiveTab = tabIndex => {
        this.setState({
            activeTab: tabIndex
        })
    }
}
