///
import React, { Component } from 'react';
import './App.css';
// import IncidentTable from './components/dashboard/IncidentTable'
import routes from './routes'
// import EventForm from './components/event/EventNew'

class App extends Component {


  render() {



    return (
      <div className="App">
        {routes}
      </div>
    );
  }
}

export default App;
