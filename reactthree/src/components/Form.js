import React, { Component } from "react";

class Form extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    username: "",
    password: ""
  };

  handleInputChange = event => {
    const {name, value} = event.target
    console.log(event.target);

    // console.log(this);
    this.setState({
      [name]: value
    })
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.username)
    console.log(this.state.password)
  }

  render() {
    return (
      <form>
        <p>Username: {this.state.username}</p>
        <p>Password: {this.state.password}</p>
        <input
          type="text"
          placeholder="Username"
          onChange={this.handleInputChange}
          value={this.state.username}
          name = "username"
        />
        <input
          type="password"
          placeholder="Password"
          name = "password"
          onChange = {this.handleInputChange}
          // value = {this.state.password}
        />
        <button onClick={this.handleFormSubmit}>Submit</button>
      </form>
    );
  }
}

export default Form;
