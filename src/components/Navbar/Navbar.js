import React, { Component } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
class Navbar extends Component {
  // constructor(props){
  // super(props);
  // this.state = {};
  // }


  render() {
    return (
      <div className="row bg-light navbar-light">
        <nav className="container navbar navbar-expand-lg ">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <NavLink exact={true} className="nav-link"  activeClassName="active" to="/">Task №1</NavLink>

            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/loader">Task №2</NavLink>

            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/archery">Task №3</NavLink>

            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/tollroad">Task №4</NavLink>

            </li>
           

          </ul>
        </nav>
      </div>

    );
  }
}

export default Navbar;