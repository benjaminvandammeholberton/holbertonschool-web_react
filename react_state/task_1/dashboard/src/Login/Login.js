import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false,
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangePasswordl = this.handleChangePasswordl.bind(this);
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    e.this.setState({
      isLoggedIn: true,
    });
  }

  handleChangeEmail(e) {
    const input = e.target.value;
    this.setState((prev) => {
      return {
        email: input,
        enableSubmit: input !== '' && prev.password !== '',
      };
    });
  }
  handleChangePasswordl(e) {
    const input = e.target.value;
    this.setState((prev) => {
      return {
        password: input,
        enableSubmit: input !== '' && prev.email !== '',
      };
    });
  }
  render() {
    return (
      <>
        <div className="App-body">
          <p>Login to access the full dashboard</p>
          <form onSubmit={() => this.handleLoginSubmit}>
            <label htmlFor="email">email</label>
            <input
              type="text"
              id="email"
              value={this.state.email}
              onChange={this.handleChangeEmail}
            ></input>
            <label htmlFor="password">password</label>
            <input
              type="password"
              id="password"
              value={this.state.password}
              onChange={this.handleChangePasswordl}
            ></input>
            <input
              disabled={!this.state.enableSubmit}
              type="submit"
              value="OK"
            ></input>
          </form>
        </div>
      </>
    );
  }
}

export default Login;
