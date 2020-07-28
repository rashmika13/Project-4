import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./MainPage.css";
import ActivitiesList from "../ActivitiesList/ActivitiesList";
import EditActivities from "../EditActivities/EditActivities";
import { Route, Switch } from "react-router-dom";

const MainPage = (props) => {
  return (
    <div className="MainPage">
      <NavBar user={props.user} handleLogout={props.handleLogout} />
      <Switch>
        <Route
          exact
          path="/"
          render={({ history }) => <ActivitiesList history={history} />}
        />
        <Route
          exact
          path="/edit"
          render={({ history }) => <EditActivities history={history} />}
        />
      </Switch>
    </div>
  );
};

export default MainPage;
