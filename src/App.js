import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Route,Switch} from 'react-router-dom';

const HatsPage = (props) =>{
console.log(props);
return <div><h1>Hats page</h1></div>
};

function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop/hats' component={HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
