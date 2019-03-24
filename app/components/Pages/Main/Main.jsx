/* Component  : Main is a Functional Component
 * Created on : 17/3/2019 15:10:09
 * Created by : Vaibhav Shringarpure
 */

/* Import Statement Below */
import React from 'react';
import { Route, Switch } from 'react-router-dom'

/* Import all Pages and Components Below */
import Home from '../../DS/Home/Home';
import Started from '../../DS/Started/Started';
import Styles from '../../DS/Styles/Styles';
import Components from '../../DS/Components/Components';
import NotFound from '../../DS/NotFound/NotFound';



const Main = () => {
  return (
    <main>
      <Switch>          
        <Route exact path='/' component = {Home}></Route>
        <Route path='/started' component = {Started}></Route>
        <Route path='/styles' component = {Styles}></Route>
        <Route path='/components' component = {Components}></Route>
        <Route component = {NotFound}></Route>
      </Switch>
    </main>
  )
}

export default Main;