import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import {
  Landing,
  Home,
  Detail,
  Create,
  About,
  Extra,
  NavBar,
  NotFound,
} from "./Pages";

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
