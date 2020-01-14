import React from 'react'
import PropTypes from 'prop-types'
import './DetailTitle.scss'
import exitImg from './../../images/exit.svg'

export class DetailTitle extends React.Component {
    static propTypes = {
        title: PropTypes.string,
        exit: PropTypes.bool,
        onExit: PropTypes.func
    }

    render() {
        const { title, exit, onExit } = this.props

        return (
            <div className={'detailTitle'}>
                <h2>{title}</h2>
                {exit && (
                    <span className={'exit'} onClick={onExit}>
                        <img src={exitImg} alt={'exit'} />
                    </span>
                )}
            </div>
        )
    }
}
