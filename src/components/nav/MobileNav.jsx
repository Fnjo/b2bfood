import React from 'react'
import './MobileNav.scss'
import PropTypes from 'prop-types'
import { Button } from '../buttons/Button'
import navicon from '../../images/mobilemenu.svg'
import { PageTitle } from '../titles/PageTitle'

export class MobileNav extends React.Component {
    state = {
        pageTitleOnLoad: ''
    }

    static propTypes = {
        showNav: PropTypes.bool,
        toggleNav: PropTypes.func,
        pageTitle: PropTypes.string
    }

    componentDidMount() {
        this.setState({
            pageTitleOnLoad: document.querySelectorAll('.pageTitle')[0]
                .textContent
        })
    }

    render() {
        const { toggleNav, pageTitle } = this.props

        return (
            <div className={'mobileNav'}>
                <Button icon={navicon} onClick={toggleNav} />
                <PageTitle
                    title={pageTitle ? pageTitle : this.state.pageTitleOnLoad}
                />
            </div>
        )
    }
}
