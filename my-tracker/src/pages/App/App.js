import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";
import MainPage from "../../pages/MainPage/MainPage";
import AddActivities from "../AddActivities/AddActivities";
// import EditActivities from "../EditActivities/EditActivities";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
    };
  }

  handleSignupOrLogin = async () => {
    this.setState({ user: userService.getUser() });
  };

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  render() {
    return (
      <div className="App">
        <header className="header-footer">MY APP</header>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <MainPage
                user={this.state.user}
                handleLogout={this.handleLogout}
              />
            )}
          />
          <Route
            exact
            path="/signup"
            render={({ history }) => (
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={({ history }) => (
              <LoginPage
                handleSignupOrLogin={this.handleSignupOrLogin}
                history={history}
              />
            )}
          />
          <Route
            exact
            path="/create"
            render={({ history }) => <AddActivities history={history} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
