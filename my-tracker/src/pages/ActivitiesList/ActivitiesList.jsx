import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Activity = (props) => (
  <tr>
    {/* <td>{props.activity.username}</td> */}
    <td>{props.activity.description}</td>
    <td>{props.activity.duration}</td>
    <td>{props.activity.date.substring(0, 10)}</td>
    <td>
      <Link to={"/edit/" + props.activity._id}>edit</Link>|{" "}
      <a
        href="#"
        onClick={() => {
          props.deleteActivity(props.activity._id);
        }}
      >
        delete
      </a>
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

  ActivitiesList() {
    return this.state.activities.map((currentactivity) => {
      return (
        <Activity
          activity={currentactivity}
          deleteActivity={this.deleteActivity}
          key={currentactivity._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h1>Activity List</h1>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Descriptions</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.ActivitiesList()}</tbody>
        </table>
      </div>
    );
  }
}

export default ActivitiesList;
