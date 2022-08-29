import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./template/pages/Login";
import Home from "./template/pages/Home";
import Signup from "./template/pages/Signup";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/signup" exact>
            <Signup />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
