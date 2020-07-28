import React, { Component } from "react";
import "./AddActivities.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import userService from "../../utils/userService";

class AddActivities extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      description: "",
      duration: 0,
      date: new Date(),
      user: null,
    };
  }

  componentDidMount() {
    console.log(userService.getUser());
    this.setState({ user: userService.getUser() });
  }

  onChangeUsername(e) {
    this.setState({ username: e.target.value });
  }
  onChangeDescription(e) {
    this.setState({ description: e.target.value });
  }

  onChangeDuration(e) {
    this.setState({ duration: e.target.value });
  }

  onChangeDate(date) {
    this.setState({ date: date });
  }

  onSubmit(e) {
    e.preventDefault();
    const activity = {
      username: this.state.user.name,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };

    console.log(activity);
    axios
      .post("/api/activities/add", activity)
      .then((res) => console.log(res.data));

    window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>ADD ACTIVITY </h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"></div>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              // className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label>Duration (in minutes): </label>
            <input
              type="text"
              // className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
            />
          </div>
          <div className="form-group">
            <label>Date:</label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Add Activities"
              className="btn btn-danger"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default AddActivities;
