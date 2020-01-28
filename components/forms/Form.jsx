import React from 'react'
import PropTypes from 'prop-types'
import './Form.scss'

export class Form extends React.Component {
    static propTypes = {
        className: PropTypes.any,
        children: PropTypes.any,
        submitData: PropTypes.any,
        btnText: PropTypes.string
    }

    render() {
        const { children, submitData, btnText } = this.props

        return (
            <form className={'form'} onSubmit={submitData}>
                {children}
                {/* <input type='submit' value='Submit' /> */}
                <button>{btnText}</button>
            </form>
        )
    }
}
