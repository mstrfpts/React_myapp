import React, { Component } from "react";
import "./App.css";
import HelloWorld from "./Hello";

class App extends Component {
  render() {
    return (
      <div>
        <HelloWorld name={"derd"} />
      </div>
    );
  }
}

/*const App = () => {
  return (
    <div>
      <HelloWorld />
    </div>
  );
};*/

export default App;
