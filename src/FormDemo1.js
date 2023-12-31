import React, { Component } from "react";

export default class FormDemo1 extends Component {
  state = { userName: "", city: "" };
  onChangeHandler = (event) => {
    //this.setState({userName : event.target.value})
    let name = event.target.name;
    let value= event.target.value;

    this.setState({[name]:value});
  }
  onSubmitHandler = (event) => {
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <h3>User Name</h3>
          <input onChange={this.onChangeHandler} name="userName" type="text"></input>
          <h3>User Name is {this.state.userName}</h3>
<br /> 
          <h3>City</h3>
          <input onChange={this.onChangeHandler} name="city" type="text"></input>
          <h3>City is {this.state.city}</h3>

          <input type="submit" value="Kaydet" ></input>
        </form>
      </div>
    );
  }
}
