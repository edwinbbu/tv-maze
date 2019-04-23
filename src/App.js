import React, { Component } from 'react';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container" style={{ marginTop: "20px" }}>
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
