import React, { Component } from 'react';
import { Provider } from "react-redux";
import store from './store';
import AppNavbar from './components/AppNavbar';
import Activities from './components/Activities';
import { loadUser } from './actions/authActions';

import './App.css';


class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
        <div>
        <Provider store = {store} className= "store">
          <AppNavbar />
        </Provider>
          <Activities />
          </div>
    );
  }
}

export default App;
