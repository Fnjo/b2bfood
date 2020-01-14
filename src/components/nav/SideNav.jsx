import React from 'react'
import './SideNav.scss'
import { NavLink } from 'react-router-dom'
import { NavTile } from './NavTile'
import homeIcon from '../../images/home.svg'
import clientsIcon from '../../images/clients.svg'
import menuIcon from '../../images/menu.svg'
import logo from '../../images/logo.svg'
import { MobileNav } from './MobileNav'

export class SideNav extends React.Component {
    state = {
        showOnMobile: false,
        pageTitle: ''
    }

    render() {
        const { showOnMobile, pageTitle } = this.state

        return (
            <>
                <MobileNav
                    showNav={this.state.showOnMobile}
                    toggleNav={() => this.toggleNav('')}
                    pageTitle={pageTitle}
                />
                {showOnMobile && (
                    <div
                        className={'blackLayer'}
                        onClick={() => this.toggleNav('')}
                    ></div>
                )}
                <div className={showOnMobile ? 'nav nav--showOnMobile' : 'nav'}>
                    <ul>
                        <li className={'nav-logo'}>
                            <img alt={'logo'} src={logo} />
                        </li>
                        <li>
                            <NavLink
                                exact
                                to={'/'}
                                className={'nav-home'}
                                activeClassName={'nav--active'}
                                onClick={() => this.toggleNav('Home')}
                            >
                                <NavTile image={homeIcon} title={'Home'} />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={'/clients'}
                                className={'nav-clients'}
                                activeClassName={'nav--active'}
                                onClick={() => this.toggleNav('Clients')}
                            >
                                <NavTile
                                    image={clientsIcon}
                                    title={'Clients'}
                                />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={'/menu'}
                                className={'nav-menu'}
                                activeClassName={'nav--active'}
                                onClick={() => this.toggleNav('Menu')}
                            >
                                <NavTile image={menuIcon} title={'Menu'} />
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </>
        )
    }

    toggleNav = pageTitle => {
        if (pageTitle !== '') {
            this.setState({
                pageTitle: pageTitle
            })
        }

        this.setState({
            showOnMobile: !this.state.showOnMobile
        })
    }
}
