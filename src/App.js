import "./index.css";
import AdminDashboard from "./components/Dashboards/AdminDashboard";
import SignIn from "./components/Authentication/SignIn";

import "./assets/css/bootstrap.min.css";
function App() {
  let name = "Duomly";

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
