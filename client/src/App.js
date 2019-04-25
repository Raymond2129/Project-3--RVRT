import React, { Component } from 'react';
// import Main from './components/pages/Main';
// import Login from './components/auth/LoginModal';
// import Logout from './components/auth/Logout';
// import RegisterModal from './components/auth/RegisterModal';
// import ItemModal from './components/pages/Items';
// import Register from './components/pages/Register';
import AppNavbar from './components/navbar/AppNavbar';
// import ShoppingList from './components/pages/shoppingList';
import TestCards from './components/pages/Data/campgrounds/Campgrounds';

import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <AppNavbar />
          <Container>
            {/* <ItemModal />
            <ShoppingList /> */}
            <TestCards />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
