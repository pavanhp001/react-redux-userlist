import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import UserList from './containers/UserList';
import UserDetails from './containers/UserDetails';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={UserList}/>
    <Route path="users/:id" component={UserDetails} onEnter={(nextState)=>{return nextState}}/>
  </Route>
)

export default routes;
