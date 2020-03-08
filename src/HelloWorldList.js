import React, { Component } from "react";
import "./HelloWorldList.css";
import HelloWorld from "./HelloWorld";

class HelloWorldList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { greetingTo: ["James", "Sally", "derd"] };
  }

  renderGreetings = () => {
    return this.state.greetingTo.map(name => (
      <HelloWorld key={name} name={name} />
    ));
  };

  render() {
    return <div className="HelloWorldList">{this.renderGreetings()}</div>;
  }
}
export default HelloWorldList;
