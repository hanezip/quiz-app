import React from "react";

import Quiz from "./Component/Quiz";

import "./MainApp.css";

class MainApp extends React.Component {
  render() {
    return (
      <div className="component-app">
        <Quiz />
      </div>
    );
  }
}

export default MainApp;
