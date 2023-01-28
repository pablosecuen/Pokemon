import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Home from "./Pages/Home/Home";
import Detail from "./Pages/Detail/Detail";
import Create from "./Pages/Create/Create";
import NavBar from "./components/NavBar/NavBar";
import Extra from "./Pages/Extra/Extra";
import NotFound from "./components/NotFound/NotFound";

export default function App() {
  const { pathname } = useLocation();

  return (
    <div className="App">
      {pathname !== "/" && <NavBar />}
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/detail/:id" component={Detail} />
        <Route exact path="/create" component={Create} />
        <Route exact path="/extra" component={Extra} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
