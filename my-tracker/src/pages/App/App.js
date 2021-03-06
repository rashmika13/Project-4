import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";
import AddActivities from "../AddActivities/AddActivities";
import EditActivities from "../EditActivities/EditActivities";
import ActivitiesList from "../ActivitiesList/ActivitiesList";
import ActivitiesDetail from "../ActivitiesDetail/ActivitiesDetail";
import NavBar from "../../components/NavBar/NavBar.jsx";

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
      <div className="wrapper">
        <header className="header-footer">STAY ACTIVE</header>
        <NavBar
          bg="light"
          expand="lg"
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={({ history }) => (
              <ActivitiesList
                history={history}
                user={this.state.user}
                handleLogout={this.handleLogout}
              />
            )}
          />
          )} />
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
            path="/edit/:id"
            render={(props) =>
              userService.getUser() ? (
                <EditActivities
                  location={props.location}
                  {...props}
                  user={this.state.user}
                />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            path="/create"
            render={({ props }) => <AddActivities {...props} />}
          />
          <Route
            path="/show/:id"
            render={(props) =>
              userService.getUser() ? (
                <ActivitiesDetail
                  location={props.location}
                  {...props}
                  user={this.state.user}
                />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
