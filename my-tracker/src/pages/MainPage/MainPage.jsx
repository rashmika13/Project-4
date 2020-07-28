// import React from "react";
// import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
// import NavBar from "../../components/NavBar/NavBar";
// import "./MainPage.css";
// import ActivitiesList from "../ActivitiesList/ActivitiesList";
// import EditActivities from "../EditActivities/EditActivities";
// import AddActivities from "../AddActivities/AddActivities";
// import userService from "../../utils/userService";
// // import { Switch } from "react-router-dom";

// const MainPage = (props) => {
//   return (
//     <Router>
//       <div className="MainPage">
//         <NavBar user={props.user} handleLogout={props.handleLogout} />
//         <Route
//           exact
//           path="/"
//           render={({ history }) => <ActivitiesList history={history} />}
//         />
//         <Route
//           path="/edit/:id"
//           render={(props) =>
//             userService.getUser() ? (
//               <EditActivities location={props.location} {...props} />
//             ) : (
//               <Redirect to="/login" />
//             )
//           }
//         />
//         <Route
//           exact
//           path="/create"
//           render={({ history }) => <AddActivities history={history} />}
//         />
//       </div>
//     </Router>
//   );
// };

// export default MainPage;
