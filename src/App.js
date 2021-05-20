import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Route,Switch} from 'react-router-dom';
import ShopPage from './shop/shop.component';
import './App.css';
import Header from './header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';



function App() {
  return (
    <div>
      <Header/>
      <Switch>
      <Route exact path='/signin' component={SignInAndSignUpPage}/>  
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
