import React, { Component } from 'react';
import ShowHideTech from './components/ShowHideTech'
import './css/styles.css';

class App extends Component {
  render() {
    return (
      <div className="App" id="app-container">
      <ShowHideTech />
      </div>
    );
  }
}

export default App;
