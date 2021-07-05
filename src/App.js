import React from 'react';
import './App.css';
import HomePage from './pages/hompage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-on/sign-in-and-sign-on.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsusbscribeFromAuth = null;

  componentDidMount() {
    this.unsusbscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }

      this.setState({ currentUser: userAuth });
      // createUserProfileDocument(user);
    });
  }

  componentWillUnmount() {
    this.unsusbscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
