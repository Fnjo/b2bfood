import React from 'react'
import PropTypes from 'prop-types'
import './NavTile.scss'

export class NavTile extends React.Component {
    static propTypes = {
        image: PropTypes.string,
        title: PropTypes.string,
        class: PropTypes.any
    }

    render() {
        return (
            <div className={'navtile'}>
                <img alt={'home'} src={this.props.image} />
                <p>{this.props.title}</p>
            </div>
        )
    }
}
