import React, { Component } from 'react';
import './App.css';
import SearchClients from './containers/SearchClients/SearchClients';
import ClientInfo from './components/ClientInfo/ClientInfo';
import { Search, Grid, Item, Segment } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
          <SearchClients />
          
      
    );
  }
}

export default App;
