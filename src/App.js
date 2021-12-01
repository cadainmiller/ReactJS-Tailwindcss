import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import AdminDashboard from "./components/Dashboards/AdminDashboard";
import SignIn from "./components/Authentication/SignIn";
import TokenService from "./services/tokenServices";
import ProtectedRoute from "./guard/ProtectedRoute";

import "./assets/css/bootstrap.min.css";
function App() {
  const token = TokenService.getToken();
  console.log(token);

  return (
    <div className="App">
      <Router>
        <Fragment>
          <Routes>
            <Route exact path="/dashboard" element={<ProtectedRoute />}>
              <Route
                exact
                path="/dashboard"
                element={<AdminDashboard page={"Dashboard"} />}
              />
            </Route>

            <Route
              exact
              path="/users"
              element={<AdminDashboard page={"Users"} />}
            />
            <Route exact path="/login" element={<SignIn />} />
            <Route exact path="*" element={<SignIn />} />
          </Routes>
        </Fragment>
      </Router>
      ;
    </div>
  );
}

export default App;
