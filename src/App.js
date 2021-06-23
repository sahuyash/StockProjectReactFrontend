import React, { useState } from 'react';
import logo from './logo.svg';

import Managecompany from './Component/Managecompany'
import Main from './Component/Main'
import Usermain from './Component/Usermain'
import Login from './Component/Loginpage'
import Chart from './Component/StockChart'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import Check from './Component/Check';
function App() {

  const [isAdmin, setIsAdmin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>

      {
        !isLoggedIn && <Login setIsAdmin={setIsAdmin} setIsLoggedIn={setIsLoggedIn} />
      }
      {/*}
      {
        isLoggedIn && isAdmin && <Main />
      }
      {
        isLoggedIn && !isAdmin && <Usermain />
      }
    */}
      <Switch>
        <Route exact path='/admin' component={Main}></Route>
        <Route exact path='/user' component={Usermain}></Route>
      </Switch>

    </Router>
  );
}


export default App;
