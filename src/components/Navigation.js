import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Item from './Item';
import HomeItems from "./HomeItems";
import Contacts from './Contacts';
import Works from "./Works";
import Home from './Home';
import Products from './Products'
import "./Navigation.css"



function Navigation() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>

            <li>
              <Link to="/products">Products</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>

            <li>
              <Link to="/howitworks">How It Works</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/home">
            {/* <Items/> */}
            <Home/>
          </Route>

          <Route path="/products">
            {/* <Items/> */}
            <Products />
          </Route>

          <Route path="/contact">
            {/* <Items/> */}
            <Contacts />
          </Route>

          <Route path="/howitworks">
            {/* <Items/> */}
            <Works />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Navigation;


