import React from "react";
import ReactDOM from "react-dom";
import Movies from "./movies.jsx";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return <div className="App" />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Movies />, rootElement);
