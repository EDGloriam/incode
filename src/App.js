import React, { Component } from 'react';
import './App.css';
import Find from './containers/FindClient/FindClient';
import ClientInfo from './components/ClientInfo/ClientInfo';
import { Search, Grid, Item, Segment } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Grid className='ui container' columns='equal' celled='internally'>
          <Find />
          <ClientInfo />
      </Grid>
    );
  }
}

export default App;
