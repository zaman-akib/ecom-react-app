import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import EcomApp from '../components/ecom-app/EcomApp'
import NotFound from '../components/NotFound/NotFound'
import Checkout from '../components/cart/Checkout'

function RouteHandler() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={EcomApp}/>
                <Route exact path='/checkout' component={Checkout}/>
                <Route exact path='*' component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}

export default RouteHandler
