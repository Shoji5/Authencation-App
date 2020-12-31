import { HashRouter as Router, Route, Switch } from "react-router-dom";
import EditPage from "./pages/EditPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/edit" component={EditPage} />
        <Route path="/" exact component={HomePage} />
      </Switch>
    </Router>
  );
}
