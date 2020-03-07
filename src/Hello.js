import React, { Component } from "react";
import "./Hello.css";

/*class HelloWorld extends Component {
  render() {
    return <div className="helloTitle">Hellow {this.props.name}!!</div>;
  }
}
*/

const HelloWorld = props => {
  return <div className="helloTitle">Hellow {props.name}!!</div>;
};

export default HelloWorld;
