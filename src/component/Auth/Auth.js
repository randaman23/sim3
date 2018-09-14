import React, { Component } from "react";

export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleUsername(e) {
    this.setState({ username: e.target.value });
  }

  handlePassword(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Auth</h1>
        <input onChange={this.handleUsername} type="text" />
        <button>Login</button>
        <input onChange={this.handlePassword} type="text" />
        <button>Register</button>
      </div>
    );
  }
}
