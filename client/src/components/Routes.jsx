import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Images from '../pages/Images'
import Mapping from '../pages/Mapping'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/customers' component={Customers}/>
            <Route path='/image-uploads' component={Images}/>
            <Route path='/mapping' component={Mapping}/>
        </Switch>
    )
}

export default Routes
