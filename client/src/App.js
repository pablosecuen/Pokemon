import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import Landing from "../src/Pages/Landing/Landing";
import Home from "../src/Pages/Home/Home";
import Detail from "./Pages/Detail/Detail";
import Create from "../src/Pages/Create/Create";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const { pathname } = useLocation();

  return (
    <div className="App">
      {pathname !== "/" && <NavBar />}
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/detail" component={Detail} />
        <Route exact path="/create" component={Create} />
      </Switch>
    </div>
  );
}

export default App;
