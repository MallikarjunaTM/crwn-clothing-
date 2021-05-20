import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Route,Switch} from 'react-router-dom';
import ShopPage from './shop/shop.component';
import './App.css';
import Header from './header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth} from './firebase/firebase.utils'



class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }

unsubscribeFromAuth=null  

componentDidMount(){
  this.unsubscribeFromAuth=auth.onAuthStateChanged(user=>{
    this.setState({currentUser:user})
  })
}  

componentWillUnmount(){
  this.unsubscribeFromAuth();
}
render(){
  return (
    <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
      <Route exact path='/signin' component={SignInAndSignUpPage}/>  
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}
}

export default App;
