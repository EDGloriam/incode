import _ from 'lodash';
import React, { Component } from 'react';
import { Search, Grid,Item, Segment } from 'semantic-ui-react';
import Client from '../../components/Client/Client';
import ClientInfo from '../../components/ClientInfo/ClientInfo';
import { connect } from 'react-redux';


class SearchClients extends Component {
  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '', clientSelected: false })

  handleResultSelect = (e, { result }) => {
   return this.setState({ value: result, clientSelected: result })
  }

  
  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value: value })
    
    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => {
        return re.test(JSON.stringify(result))
      }
      this.setState({
        isLoading: false,
        results: _.filter(this.props.clients, isMatch),
      })
    }, 300)
  }
  resultRenderer = (props) => {
    return [
      <img src={props.general.avatar} className='image' alt='avatar'></img>,
      <div key='content' className='content' >
        <div className='name'>{props.general.firstName + ' ' +props.general.lastName}</div>
        <div className='title'>{props.job.company}</div>
        <div className='description'>{props.job.title}</div>
      </div>,
  ]}

  setClientToShow = (client) => {
    this.setState({clientSelected: client});
  }

  render() {
    const { isLoading, value, results } = this.state
    const clients = this.props.clients.map((client, index) => {
      return <Client 
                key={index} 
                client={client} 
                showClientInfo = {this.setClientToShow}/>
    });

    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Search
              loading={isLoading}
              onResultSelect={this.handleResultSelect}
              onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
              results={results}
              resultRenderer={this.resultRenderer}
              value={value}
              {...this.props} />
            <Item.Group>
              {clients}
            </Item.Group>
          </Grid.Column>
          <Grid.Column width={12}>
            <Segment className='Info'>
              <ClientInfo client={this.state.clientSelected}/>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

const mapStateToRpops = state => ({
  clients: state.clients
});


export default connect(mapStateToRpops)(SearchClients);