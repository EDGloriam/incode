import React, { Component } from 'react';
import './App.css';
import Find from './containers/FindClient/FindClient';
import ClientInfo from './components/ClientInfo/ClientInfo';
import { Search, Grid, Item, Segment } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
          <Find />
          
      
    );
  }
}

export default App;
