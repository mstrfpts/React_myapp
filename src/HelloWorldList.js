import React, { Component } from "react";
import "./HelloWorldList.css";
import HelloWorld from "./HelloWorld";
import AddGreeter from "./AddGreeter";

class HelloWorldList extends Component {
  constructor(props) {
    super(props);
    //this.addGreeting = this.addGreeting.bind(this);
    this.state = { greetingTo: ["James", "Sally", "derd"] };
  }

  renderGreetings = () => {
    return this.state.greetingTo.map(name => (
      <HelloWorld key={name} name={name} removeGreeting={this.removeGreeting} />
    ));
  };

  addGreeting = newName => {
    this.setState({ greetingTo: [...this.state.greetingTo, newName] });
  };

  removeGreeting = removeName => {
    const filteredGreetings = this.state.greetingTo.filter(name => {
      return name !== removeName;
    });
    this.setState({ greetingTo: filteredGreetings });
  };

  render() {
    return (
      <div className="HelloWorldList">
        <AddGreeter addGreeting={this.addGreeting} />
        {this.renderGreetings()}
      </div>
    );
  }
}
export default HelloWorldList;
