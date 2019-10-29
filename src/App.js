import React from 'react';
import './App.css';

//components
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Wizard from "./components/Wizard/Wizard";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Dashboard />
        <Header />
        <Wizard />
      </>
    )
  }
}