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

  render() {
    return (
      <div className="helloTitle">
        {this.state.greeting + " "}
        {this.props.name}!!
        <br />
        <button onClick={this.frenchify}>Frenchify!</button>
      </div>
    );
  }
}

export default HelloWorld;
