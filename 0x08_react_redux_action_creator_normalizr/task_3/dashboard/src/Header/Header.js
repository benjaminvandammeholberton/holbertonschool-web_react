import React, { Component } from 'react';
import logo from '../assets/holberton-logo.jpg';
import './Header.css';
import AppContext from '../App/AppContext';

class Header extends Component {
  static contextType = AppContext;
  render() {
    const { user, logOut } = this.context;
    return (
      <>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>School dashboard</h1>
        </header>
        {user?.isLoggedIn && (
          <section id="logoutSection">
            Welcome {user.email} <span onClick={logOut}>(logout)</span>
          </section>
        )}
      </>
    );
  }
}
export default Header;
