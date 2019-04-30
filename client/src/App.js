import React, { Component } from 'react';
// import Main from './components/pages/Main';
import Login from './components/auth/LoginModal';
import Logout from './components/auth/Logout';
import RegisterModal from './components/auth/RegisterModal';
// import ItemModal from './components/pages/Items';
// import Register from './components/pages/Register';
import AppNavbar from './components/navbar/AppNavbar';
import Activities from './components/pages/Data/activities/Activities';
import DIYs from './components/pages/Data/diys/DIYs';
import RepairShops from './components/pages/Data/repairShops/RepairShops';
import Campgrounds from './components/pages/Data/campgrounds/Campgrounds';
// import ShoppingList from './components/pages/shoppingList';

import { Container, Row } from 'reactstrap';
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
            <Row>
            <Campgrounds />
            <RepairShops />
            </Row>
            </Container>
            <Container>
              <Row>
            <Activities />
            <DIYs />
            </Row>
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
