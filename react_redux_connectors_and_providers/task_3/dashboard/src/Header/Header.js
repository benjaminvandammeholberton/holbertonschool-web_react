import React, { Component } from 'react';
import logo from '../assets/holberton-logo.jpg';
import './Header.css';
import { connect } from 'react-redux';
import { logout } from '../actions/uiActionCreators';
import PropTypes from 'prop-types';

export class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>School dashboard</h1>
        </header>
        {this.props.user && (
          <section id="logoutSection">
            Welcome {this.props.user.email}
            <span onClick={this.props.logout}>(logout)</span>
          </section>
        )}
      </>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    user: state.get('user'),
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
};

Header.defaultProps = {
  user: null,
  logout: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
