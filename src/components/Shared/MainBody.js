import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MainDashboard from "../Components/Main-Dashboard/MainDashboard";
import Users from "../Components/Users/Users";

export default function MainBody() {
  return (
    <main>
      <div className="pt-6 px-4">
        <Router>
          <Routes>
            <Route exact path="/" element={<MainDashboard />} />
            <Route exact path="/users" element={<Users />} />
            <Route
              exact
              path="/recovery-password"
              // element={<RecoveryPassword />}
            />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Router>
      </div>
    </main>
  );
}
