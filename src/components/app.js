import React, { Component } from 'react';

import Navbar from './navbar';
import Footer from './footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="App-content">
          {this.props.children}
        </div>
          <Footer />
      </div>
    );
  }
}

export default App;
