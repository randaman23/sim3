import React, { Component } from "react";
import axios from 'axios'
// import {connect} from 'react-redux'
// import {getUser} from './../../ducks/reducer'

export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.registerUser = this.registerUser.bind(this);
    this.loginUser = this.loginUser.bind(this)
  }

  handleUsername(e) {
    this.setState({ username: e.target.value });
  }

  handlePassword(e) {
    this.setState({ password: e.target.value });
  }
  registerUser(){
      axios.post("/api/register", {username: this.state.username, password: this.state.password})
      .then(res => this.setState({username: res.data, password: res.data}))
    
  }

  loginUser(){
      axios.post("/api/login", {username: this.state.username, password: this.state.password})
      .then(res => this.setState({username: res.data, password: res.data}))
    //   window.location = "http://localhost:3000/#/dashboard"
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Auth</h1>
        <input onChange={this.handleUsername} type="text" />
        <input onChange={this.handlePassword} type="text" />
        <button onClick={this.loginUser}>Login</button>
        <button onClick={this.registerUser}>Register</button>
      </div>
    );
  }
}

// export default connect(null,{getUser})(Auth)
