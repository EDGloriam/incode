import _ from 'lodash';
import React, { Component } from 'react';
import { Search, Grid, Item } from 'semantic-ui-react';
import source from '../../data/clients.json';
import Client from '../../components/Client/Client';


export default class FindClient extends Component {
  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => this.setState({ isLoading: false, results: source, value: '' , clientSelected: false})

  // handleResultSelect = (e, { result }) => this.setState({ value: result })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
      const isMatch = result => re.test(JSON.stringify(result));
      let data = _.filter(source, isMatch);
      if(!data){
        data = source;
      }
      this.setState({
        isLoading: false,
        results: data
      })
    }, 300)
  }

  setClientToShow = (client) => {
    this.setState({clientSelected: client});
  }

  render() {
    const { isLoading, value } = this.state;
    const clients = this.state.results.map((client, index) => {
      return <Client 
                key={index} 
                client={client} 
                showClientInfo = {this.setClientToShow}/>
            
    })

    return (
        <Grid.Column width={5}>
          <Search
            loading={isLoading}
            // onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
            // results={results}
            value={value}
            {...this.props}
          />
          <Item.Group>
            {clients}
          </Item.Group>
        </Grid.Column>
    )
  }
}
