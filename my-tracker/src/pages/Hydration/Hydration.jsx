import React, { Component } from "react";
import axios from "axios";
import userService from "../../utils/userService";

const Hydration = (props) => (
  <tr>
    <td>{props.hydration.drinks}</td>
    <td>{props.hydration.numOfDrinks}</td>
  </tr>
);

class HydrationsList extends Component {
  constructor(props) {
    super(props);
    this.state = { activities: [], hydration: [] };
  }

  componentDidMount() {
    axios
      .get("/api/hydrations")
      .then((response) => {
        this.setState({ hydrations: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  hydrationsList() {
    return this.state.hydrations.map((currenthydration) => {
      return (
        <Hydration
          user={userService.getUser()}
          hydration={currenthydration}
          key={currenthydration._id}
        />
      );
    });
  }

  render() {
    return (
      <div className="div">
        <h1 className="header">Hydration</h1>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Drinks</th>
              <th>Number of Drinks</th>
            </tr>
          </thead>
          <tbody>{this.hydrationsList()}</tbody>
        </table>
      </div>
    );
  }
}

export default HydrationsList;
