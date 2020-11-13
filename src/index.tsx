import React from "react";
import { render } from "react-dom";
import Root from "./Root";

const App = () => {
  return (
      <Root />
  );
};

const renderApp = () => render(<App />, document.getElementById("root"));

renderApp();
