import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div id="header">
        <h1>Cory Cox Test Website</h1>
        <h3>This is a test site for Cory Cox</h3>
        <h3>Projects being worked on:</h3>
      </div>

      <div id="button-group">
        <button type="button" className="btn btn-secondary">
          <a href="/js-counter/">JS Counter</a>
        </button>
        <button type="button" className="btn btn-secondary">
          <a href="/random-number-draw/">Random Number</a>
        </button>
      </div>
    </div>
  );
}

export default App;
