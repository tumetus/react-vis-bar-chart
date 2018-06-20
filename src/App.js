import React, { Component } from 'react';
import './App.css';
import MyBarChart from './MyBarChart';
import data from './data.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyBarChart data={data} />
      </div>
    );
  }
}

export default App;
