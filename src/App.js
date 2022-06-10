import React from "react";

// Styles
import "./App.css";
import Employee from "./components/Employee/Employee";
import Header from "./components/Header/Header";
import Toast from "./components/Toast/Toast";

// Components

const App = () => {
  return (
    <div className="app">
      <Header />
      <Employee />
      <Toast />
    </div>
  );
};

export default App;
