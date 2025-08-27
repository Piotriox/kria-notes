import './index.css'
import React, { forwardRef } from 'react';
import logo from './assets/kria-tech-banner.gif'

const Preferences = forwardRef(function Preferences(props, ref) {
const currentYear = new Date().getFullYear();
  return (
    <div className="preferences" ref={ref}>
      <ul>
        <li className="list-item">Todos</li>
        <li className="list-item">Notes</li>
        <li className="list-item">Themes</li>
        <li className="list-item">About Us</li>
      </ul>
      <p> {currentYear} Kria Technologies &copy;</p>
      <div className="kria-div">
        <img src={logo} alt="Kria-Logo" className="logo-img"></img>
      </div>
    </div>
  );
});

export default Preferences;