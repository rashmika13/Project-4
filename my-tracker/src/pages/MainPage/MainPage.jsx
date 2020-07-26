import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./MainPage.css";

const MainPage = (props) => {
  return (
    <div className="GamePage">
      <NavBar user={props.user} />
    </div>
  );
};

export default MainPage;
