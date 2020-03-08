import React, { Component } from "react";
import "./HelloWorldList.css";
import HelloWorld from "./HelloWorld";

class HelloWorldList extends React.Component {
  render() {
    return (
      <div className="HelloWorldList">
        <HelloWorld name="Jim" />
        <HelloWorld name="Jim" />
      </div>
    );
  }
}
export default HelloWorldList;
