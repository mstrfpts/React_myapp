import React, { Component } from "react";
import "./Hello.css";

class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = { greeting: "Hello" };
  }

  //binding in function using arrow function
  //if we wrote frenchify() , we would have to bind at render using
  //onClick={this.frenchify.bind(this)}
  frenchify = () => {
    this.setState({ greeting: "Bonjour" });
  };

  removeGreeting = () => {
    console.log("derd, in remove greeting");
    this.props.removeGreeting(this.props.name);
  };

  render() {
    console.log("derd, hello", this.props);
    return (
      <div className="helloTitle">
        {this.state.greeting + " "}
        {this.props.name}!!
        <br />
        <button onClick={this.frenchify}>Frenchify!</button>
        <button onClick={this.removeGreeting}>Remove</button>
      </div>
    );
  }
}

export default HelloWorld;
