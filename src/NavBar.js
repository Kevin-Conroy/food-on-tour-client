import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import SearchCity from "./SearchCity";

function NavBar() {
  return (
    <main className="App">
      <div>
        <NavLink style={{color: "lightblue"}}to="/profile">Profile</NavLink>&nbsp;
        <NavLink style={{color: "lightblue"}}to="/searchcity">Find A Spot</NavLink>&nbsp;
        <NavLink style={{color: "lightblue"}}to="/artistsearch">Artist Search</NavLink>&nbsp;
      </div>
    </main>
  );
}

export default NavBar;

//
