import React, { Component } from 'react';
import 'App.css';

import { Background } from './App.style';
import NavBar from 'components/NavBar/NavBar';
class App extends Component {
  render() {
    return (
      <div>
        <Background />
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}

export default App;