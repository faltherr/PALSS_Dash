import React, { Component } from 'react';
import './App.css';
import IncidentTable from './components/dashboard/IncidentTable'

class App extends Component {
  render() {
    return (
      <div className="App">
        <IncidentTable />
      </div>
    );
  }
}

export default App;
