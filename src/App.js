import React, { Component } from "react";
import "./App.css";
import HelloWorld from "./Hello";

/*class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Bingo App</h1>
      </div>
    );
  }
*/

/*const App = () => {
  return <div className="App">Hello World!</div>;
};
export default App;
*/

const App = () => {
  return (
    <div>
      <HelloWorld />
    </div>
  );
};

export default App;
