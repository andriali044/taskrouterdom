import React from "react";
import "./styles.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import { Home, Login, Profile } from "./pages";

const isAuth = true;

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (isAuth) {
          return children;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
}

export default function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Link to="/">/Home</Link> <Link to="/profile"> /Profile</Link>{" "}
          <Link to="/login"> /Login</Link>
          <hr />
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          {/* private route */}
          {/* <Route
            path="/profile"
            render={() => {
              // logic
              if (isAuth) {
                return <Profile />;
              } else {
                return <Redirect to="/login" />;
              }
            }}
          /> */}

          <PrivateRoute path="/profile">
            <Profile />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}