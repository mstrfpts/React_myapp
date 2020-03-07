import React, { Component } from "react";
import "./Hello.css";

class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = { greeting: "Hello" };
  }

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
