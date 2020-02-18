import React, { Component } from 'react';
import Header from './components/header/index'
import api from './service/api';

export default class App extends Component {

  render() {
    return (
      <div className="App">
      <Header/>
      </div>
    );
  }
}

