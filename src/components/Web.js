import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import NaviBar from './partials/NaviBar'

import Home from '../pages/Welcome'
import NotFound from '../pages/NotFound' 
import Add from '../pages/Add'
import List from '../pages/List'

const Routes = () => {
    return (
            <Router>
                <NaviBar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    
                        <Route path="/add"  component={Add}/>
                        <Route path="/list"  component={List}/>


                    <Route component={NotFound} />
                </Switch>
            </Router>
    );
}

export default Routes