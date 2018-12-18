import React, { Component } from 'react';
import Header from './components/header/';
import TaskBar from "./components/taskbar/";
import TaskList from './components/list/';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <TaskBar/>
        <TaskList/> 
      </div>
    );
  }
}

export default App;
