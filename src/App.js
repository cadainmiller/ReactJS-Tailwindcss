import "./index.css";
import AdminDashboard from "./components/Dashboards/AdminDashboard";
import SignIn from "./components/Authentication/SignIn";
import TestService from "./services/getTestData";

import "./assets/css/bootstrap.min.css";
function App() {
  let name = "Duomly";
  TestService.firstTestService();

  if (name === "Duomly") {
    return (
      <div className="App">
        <AdminDashboard />
      </div>
    );
  } else
    return (
      <div className="App">
        <SignIn />
      </div>
    );
}

export default App;
