import React, { useState, useEffect } from "react";
import { Route, Redirect, Switch } from "wouter";
import Home from "./pages/Home/Home";
import Categories from "./pages/categories/Categories";
import Login from "./pages/Login/Login";
import { pb } from "./services/getTasks";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    checkAuthentication();
  }, []);

  const checkAuthentication = async () => {
    setAuthenticated(pb.authStore.isValid);
    console.log(authenticated)
  };



  return (
    
    <Switch>
    
      <Route exact path="/">
        {authenticated ? <Home /> : <Redirect to="/login" />}
      </Route>
      <Route path="/categories/:keyword">
        {authenticated ? <Categories /> : <Redirect to="/login" />}
      </Route>
      <Route path="/login" component={Login} />
    </Switch>
  );
}

export default App;