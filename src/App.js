import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Route,Switch,Redirect} from 'react-router-dom';
import ShopPage from './shop/shop.component';
import './App.css';
import Header from './header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import CheckoutPage from './pages/checkout/checkout.component';
import {checkUserSession} from './redux/user/user.action';


class App extends React.Component {
  

unsubscribeFromAuth=null  

componentDidMount() {
  const {checkUserSession} = this.props
  checkUserSession()
  /*this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    console.log(userAuth)
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
        this.props.setCurrentUser({
          
            id: snapShot.id,
            ...snapShot.data()
          
        });
      });
    }

    this.props.setCurrentUser( userAuth );
    /*never ever uncomment below code, other wise it will add again components to database*/
    /*addCollectionAndDocuments('collectionsItems',this.props.collectionsArray.map(({title,items})=>({title,items})))*/
  /*});*/
}


componentWillUnmount(){
  //this.unsubscribeFromAuth();
}
render(){
  return (
    <div>
      <Header />
      <Switch>
      <Route exact path='/signin' 
      render={()=>this.props.currentUser?
      (<Redirect to='/' />):
      (<SignInAndSignUpPage/>)}/>  
      <Route exact path='/' component={HomePage}/>
      <Route  path='/shop' component={ShopPage}/>
      <Route exact path='/checkout' component={CheckoutPage}/>
      </Switch>
    </div>
  );
}
}

const mapStateToProps  = createStructuredSelector({
   currentUser:selectCurrentUser,
   //collectionsArray:selectCollectionForPreview
});

const mapDispatchToProps = dispatch =>({
  checkUserSession:()=>dispatch(checkUserSession())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
