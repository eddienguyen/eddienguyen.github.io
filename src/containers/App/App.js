import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import { Background } from './App.style';
class App extends Component {
  render() {
    return (
      <div>
        <Background />
          {this.props.children}
      </div>
    );
  }
}

export default hot(module)(App);  
