import React from 'react'
import {Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import DashBoard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'
import App from './app'
import AuthOrApp from './authOrApp'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={AuthOrApp}>
            <IndexRoute component={DashBoard}/>
            <Route  path="billingCycles" component={BillingCycle}/> 
        </Route>
        <Redirect  from='*' to='/' />
    </Router>
)