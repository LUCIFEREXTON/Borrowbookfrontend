import React from 'react';
import Main from './Screens/Main';
import {BrowserRouter ,Route , Switch} from 'react-router-dom'
import Login from './Components/LandingPage/Login';
import SignIn from './Components/LandingPage/Signin';
import LoginRoute from './functions/LoginRoute';

function App() {
    return ( 
      <BrowserRouter>
        <Switch>
          <LoginRoute exact path='/login' component={Login} />
          <LoginRoute exact path='/signin' component={SignIn} />
          <Route path='/' component={Main} />
        </Switch>
      </BrowserRouter>
    );
}

export default App;