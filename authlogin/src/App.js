import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Registration from './components/Reg';
import Login from './components/Login';
import UserList from './components/UserList';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Switch>
        <Route exact path='/' component={Registration} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/userlist' component={UserList} />
      </Switch>

    </div>
  );
}

export default App;
