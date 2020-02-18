import React, { Component } from 'react';
import Header from './components/header/index'
import Main from './pages/main/index'
import api from './service/api';

export default class App extends Component {
  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get('/products');

    console.log(response.data.docs);
  };

  render() {
    return (
      <div className="App">
      <Header/>
      <Main/>
      </div>
    );
  }
}

