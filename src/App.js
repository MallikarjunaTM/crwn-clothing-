import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Route,Switch} from 'react-router-dom';
import ShopPage from './shop/shop.component';

const HatsPage = (props) =>{
console.log(props);
return <div><h1>Hats page</h1></div>
};

function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
