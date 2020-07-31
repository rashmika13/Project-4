import React, { Component } from "react";
import "./ActivitiesDetail.css";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import axios from "axios";

const Hydration = (props) => (
  <tr>
    <td>{props.hydration.drink}</td>
    <td>{props.hydration.numOfDrinks}</td>
  </tr>
);

class ActivitiesDetail extends Component {
  constructor(props) {
    super(props);
    this.onChangeDrink = this.onChangeDrink.bind(this);
    this.onChangenumOfDrinks = this.onChangenumOfDrinks.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      description: "",
      duration: 0,
      date: "",
      drink: "",
      numOfDrinks: 0,
      hydrations: [],
    };
  }

  componentDidMount() {
    console.log(" Mount Works");
    axios
      .get("/api/activities/" + this.props.match.params.id)
      .then((response) => {
        console.log(response.data);
        this.setState({
          description: response.data.description,
          duration: response.data.duration,
          date: response.data.date,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    axios
      .get("/api/hydrations/")
      .then((response) => {
        console.log(response.data);
        this.setState({ hydrations: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  onChangeDrink(e) {
    this.setState({ drink: e.target.value });
  }

  onChangenumOfDrinks(e) {
    this.setState({ numOfDrinks: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const hydration = {
      drink: this.state.drink,
      numOfDrinks: this.state.numOfDrinks,
    };

    console.log(hydration);
    axios
      .post("/api/hydrations/add", hydration)
      .then((res) => console.log(res.data));
    this.setState({
      drink: "",
      numOfDrinks: 0,
    });
  }

  hydrationsList() {
    return this.state.hydrations.map((currenthydration) => {
      return (
        <Hydration hydration={currenthydration} key={currenthydration._id} />
      );
    });
  }

  render() {
    return (
      <div className="detail">
        <h3> ACTIVITY DETAIL </h3>
        <label>Description: </label>
        <p>{this.state.description}</p>

        <label>Duration (in minutes): </label>
        <p>{this.state.duration}</p>

        <label>Date:</label>
        <p>{moment(this.state.date).format("MMM Do YYYY")}</p>

        <div className="hydration">
          <h3>ADD HYDRATION </h3>
          <form class="form-group" onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Drink: </label>
              <input
                type="text"
                value={this.state.drink}
                onChange={this.onChangeDrink}
              />
            </div>
            <div className="form-group">
              <label>No. of Drinks: </label>
              <input
                type="text"
                value={this.state.numOfDrinks}
                onChange={this.onChangenumOfDrinks}
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Add Hydration"
                className="btn btn-danger"
              />
            </div>
          </form>
          <div className="div">
            <h1 className="header">Hydration</h1>
            <table className="t">
              <thead>
                <tr>
                  <th>Drink</th>
                  <th>Number of Drinks</th>
                </tr>
              </thead>
              <tbody>{this.hydrationsList()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ActivitiesDetail;
