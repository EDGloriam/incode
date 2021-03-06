import _ from 'lodash';
import React, { Component } from 'react';
import { Search, Grid,Item, Segment } from 'semantic-ui-react';
import Client from '../../components/Client/Client';
import ClientInfo from '../../components/ClientInfo/ClientInfo';
import { connect } from 'react-redux';
import { showClient } from '../../store/actions/ClientAction';


class SearchClients extends Component {
  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, { result }) => {
    this.props.showClientHandler(result);
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

  render() {
    const { isLoading, value, results } = this.state
    const clients = this.props.clients.map((client, index) => {
      return <Client 
                key={index} 
                client={client} 
                showClient = {this.props.showClientHandler}/>
    });
    console.log('-----SEARCH--------');
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
              <ClientInfo />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
// [4] приклеиваем данные из store
const mapStateToRpops = store => ({
  clients: store.clients
});
  

const mapDispatchToProps = dispatch => { 
  return {
    showClientHandler: client => dispatch(showClient(client))
  }
 };


export default connect(mapStateToRpops, mapDispatchToProps)(SearchClients);