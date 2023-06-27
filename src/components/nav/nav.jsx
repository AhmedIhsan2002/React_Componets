import React, { Component } from 'react'

import './NAV.css';
 class NAVBAR extends Component {
  render() {
    return (
      <div>
        <nav>
            <ul className="navbar-list">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Servies</a></li>
            </ul>
        </nav>
      </div>
    )
  }
}
export default NAVBAR
