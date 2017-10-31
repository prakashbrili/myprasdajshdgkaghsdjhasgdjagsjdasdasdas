import React, { Component } from 'react';

import Navbar from './navbar';
import Footer from './footer';
import Mail from './mail'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="App-content">
          {this.props.children}
        </div>
        <Mail />
        <Footer />
      </div>
    );
  }
}

export default App;
