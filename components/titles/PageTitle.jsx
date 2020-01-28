import React from 'react'
import PropTypes from 'prop-types'
import './PageTitle.scss'

export class PageTitle extends React.Component {
    static propTypes = {
        title: PropTypes.string
    }

    render() {
        return (
            <div className={'pageTitle'}>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}
