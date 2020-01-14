import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { HomeView } from './views/HomeView'
import { ClientsView } from './views/ClientsView'
import { MenuView } from './views/MenuView'
import { OrderView } from './views/OrderView'
import { SideNav } from './nav/SideNav'

const Router = () => (
    <HashRouter>
        <div className={'mainContent'}>
            <Switch>
                <Route exact path='/' component={HomeView} />
                <Route path='/clients' component={ClientsView} />
                <Route path='/menu' component={MenuView} />
                <Route exact path='/order/:id' component={OrderView} />
            </Switch>
            <SideNav />
        </div>
    </HashRouter>
)

export default Router
