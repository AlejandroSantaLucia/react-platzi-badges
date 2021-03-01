import React from 'react'
import {BrowserRouter, Switch,Route} from 'react-router-dom'

import BadgeNew from '../pages/badgeNew';
import BadgeEdit from '../pages/badgeEdit';
import BadgeDetail from '../pages/BadgeDetailContainer';
import Badges from '../pages/badges';
import Layout from './layout'
import NotFound from '../pages/NotFound'
import Home from '../pages/home'


function App(){
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path ="/badges" component={Badges}/>
                    <Route exact path ="/badges/new" component={BadgeNew}/>
                    <Route exact path ="/badges/:badgeId/edit" component={BadgeEdit}/>
                    <Route exact path ="/badges/:badgeId" component={BadgeDetail}/>
                    <Route exact path ="/home" component={Home}/>
                    <Route  component={NotFound}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )    
}





export default App;