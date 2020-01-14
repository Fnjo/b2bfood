import React from 'react'
import PropTypes from 'prop-types'
import './Modal.scss'
import exitImg from './../../images/exit.svg'
import { DetailTitle } from '../titles/DetailTitle'

export class Modal extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.any,
        isActive: PropTypes.bool,
        closeModal: PropTypes.func,
        title: PropTypes.string,
        page: PropTypes.string
    }

    render() {
        const { children, isActive, closeModal, title, className } = this.props

        return (
            <div className={isActive ? 'modal modal-active' : 'modal'}>
                <div
                    // className={
                    //     page === 'menu'
                    //         ? 'modal-content modal-content-menu'
                    //         : 'modal-content'
                    // }
                    className={
                        className
                            ? `modal-content modal-content-${className}`
                            : 'modal-content'
                    }
                >
                    <div className={'modal-content-header'}>
                        <DetailTitle title={title} />
                        <div className={'modal-close'} onClick={closeModal}>
                            <img src={exitImg} alt={'exit'} />
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        )
    }

    openModal() {
        this.setState({
            isActive: true
        })
    }
}
