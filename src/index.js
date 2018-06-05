import React from "react";
import { render } from "react-dom";

import MainApp from "./MainApp";

const styles = {
  fontFamily: "sans-serif"
  // textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <MainApp />
  </div>
);

render(<App />, document.getElementById("root"));
