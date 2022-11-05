import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Excersise3 from "./Components/Ex3/Ex3";
import Excersise2 from "./Components/Ex2/Ex2";
import Excersise0 from "./Components/Ex0/Ex0";
import Excersise1 from "./Components/Ex1/index";
import Excersise4 from "./Components/Ex4/index";
export default function App() {
  return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Ex0">Excersise0</Link>
            </li>
            <li>
              <Link to="/Ex1">Excersise1</Link>
            </li>
            <li>
              <Link to="/Ex2">Excersise2</Link>
            </li>
            <li>
              <Link to="/Ex3">Excersise3</Link>
            </li>
            <li>
              <Link to="/Ex4">Excersise4</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/Ex3">
              <Excersise3></Excersise3>
            </Route>
            <Route path="/Ex0">
              <Excersise0 />
            </Route>
            <Route path="/Ex1">
              <Excersise1 />
            </Route>

            <Route path="/Ex4">
              <Excersise4></Excersise4>
            </Route>
            <Route path="/Topics">
              <Topics />
            </Route>
            <Route path="/Ex2">
              <Excersise2 />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

function Home() {
  return <div></div>;
}

function About() {
  return <h2>About</h2>;
}

function Topics() {
  let match = useRouteMatch();

  return <div></div>;
}