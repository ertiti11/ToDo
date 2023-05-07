import React, { useState, useEffect } from "react";
import { Route, Redirect, Switch } from "wouter";
import Home from "./pages/Home/Home";
import Categories from "./pages/categories/Categories";
import Login from "./pages/Login/Login";
import PocketBase from "pocketbase";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    checkAuthentication();
  }, []);

  const checkAuthentication = async () => {
    const pb = new PocketBase('http://127.0.0.1:8090');
    setAuthenticated(pb.authStore.isValid);
  };

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      component={(props) =>
        authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );

  return (
    <Switch>
      <PrivateRoute component={Home} exact path="/" />
      <PrivateRoute component={Categories} path="/categories/:keyword" />
      <Route component={Login} path="/login" />
      <Route>
        {/* Ruta por defecto */}
        <Redirect to="/login" />
      </Route>
    </Switch>
  );
}

export default App;
