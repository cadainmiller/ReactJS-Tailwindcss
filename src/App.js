import "./index.css";
import AdminDashboard from "./components/Dashboards/AdminDashboard";
import SignIn from "./components/Authentication/SignIn";
import TokenService from "./services/tokenServices";

import "./assets/css/bootstrap.min.css";
function App() {
  const token = TokenService.getToken();

  if (!token) {
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
