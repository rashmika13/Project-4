import React, { Component } from "react";
import axios from "axios";
import "./ActivitiesList.css";
import { Link } from "react-router-dom";
import userService from "../../utils/userService";
// import Hydration from "../Hydration/Hydration";

const Activity = (props) => (
  <tr>
    <td>{props.activity.username}</td>
    <td>{props.activity.description}</td>
    <td>{props.activity.duration}</td>
    <td>{props.activity.date.substring(0, 10)}</td>
    <td>
      {props.user && (
        <>
          <Link to={"/edit/" + props.activity._id}>Edit</Link> |
          <button
            className=" btn-primary"
            onClick={() => {
              props.deleteActivity(props.activity._id);
            }}
          >
            Delete
          </button>
        </>
      )}
    </td>
  </tr>
);

class ActivitiesList extends Component {
  constructor(props) {
    super(props);
    this.deleteActivity = this.deleteActivity.bind(this);
    this.state = { activities: [] };
  }

  componentDidMount() {
    axios
      .get("/api/activities/")
      .then((response) => {
        this.setState({ activities: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteActivity(id) {
    axios.delete("/api/activities/" + id).then((res) => console.log(res.data));
    this.setState({
      activities: this.state.activities.filter((el) => el._id !== id),
    });
  }

  activitiesList() {
    return this.state.activities.map((currentactivity) => {
      return (
        <Activity
          user={userService.getUser()}
          activity={currentactivity}
          deleteActivity={this.deleteActivity}
          key={currentactivity._id}
        />
      );
    });
  }

  render() {
    return (
      <div className="div">
        <h1 className="header">Activity List</h1>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Descriptions</th>
              <th>Duration</th>
              <th>Date</th>
              {this.props.user && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>{this.activitiesList()}</tbody>
        </table>
      </div>
    );
  }
}

export default ActivitiesList;
