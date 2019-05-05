import React, { Component } from 'react'

import { HashRouter, Route, Switch } from 'react-router-dom'
import Login from'./Login/Login'
import Eorr from'./Eorr/Eorr'
import Nav from'./Nav/Nav'
import Reg from'./Reg/Reg'
import Citys from'./Citys/Citys'
import Map from'./Map/Map'
import Useragreements from'./Useragreements/Useragreements'


export default class App extends Component {
  render() {
    return (
      <div>
        < HashRouter>
          <Switch>
             <Route path='/' exact component={Nav}/>
             <Route path='/login' component={Login}/>
             <Route path='/reg'  component={Reg}/>
             <Route path='/citys'  component={Citys}/>
             <Route path='/map'  component={Map}/>
             <Route path='/useragreements'  component={Useragreements}/>
             <Route component={Eorr}/>
          </Switch>
        </HashRouter>
      </div>
    )
  }
}
