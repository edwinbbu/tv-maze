import React, { Component } from 'react';
import Home from './components/Home';
import Detail from './components/Detail';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container" style={{ marginTop: "20px" }}>
            <Route exact path="/" component={Home} />
            <Route path="/detail" component={Detail} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
