import _ from 'lodash'
import React, { Component } from 'react'
// import { Image } from 'react-native';
import { Search, Grid,Item, Header, Segment } from 'semantic-ui-react'
import Client from '../../components/Client/Client'
import { connect } from 'react-redux';
import { updateClients } from '../../actions/ClientAction';
import ClientInfo from '../../components/ClientInfo/ClientInfo';

// const source = [{
//   "general": {
//     "firstName": "Liana",
//     "lastName": "Crooks",
//     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/kevinoh/128.jpg"
//   },
//   "job": {
//     "company": "Ledner, Johnson and Predovic",
//     "title": "Investor Functionality Coordinator"
//   },
//   "contact": {
//     "email": "Gerry_Hackett77@gmail.com",
//     "phone": "(895) 984-0132"
//   },
//   "address": {
//     "street": "1520 Zemlak Cove",
//     "city": "New Devon",
//     "zipCode": "42586-7898",
//     "country": "Guinea-Bissau"
//   }
// },
// {
//   "general": {
//     "firstName": "Deontae",
//     "lastName": "Dare",
//     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/andysolomon/128.jpg"
//   },
//   "job": {
//     "company": "D'Amore, Dicki and Borer",
//     "title": "International Applications Consultant"
//   },
//   "contact": {
//     "email": "Kellie.Marvin38@yahoo.com",
//     "phone": "1-615-843-3426 x600"
//   },
//   "address": {
//     "street": "65901 Glover Terrace",
//     "city": "Alden ton",
//     "zipCode": "57744-4248",
//     "country": "Kenya"
//   }
// },
// {
//   "general": {
//     "firstName": "Cortez",
//     "lastName": "Pacocha",
//     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/holdenweb/128.jpg"
//   },
//   "job": {
//     "company": "McKenzie Group",
//     "title": "Forward Branding Developer"
//   },
//   "contact": {
//     "email": "Sage_Wiegand@hotmail.com",
//     "phone": "725.583.0926 x0430"
//   },
//   "address": {
//     "street": "376 Reginald Dam",
//     "city": "Port Enid fort",
//     "zipCode": "51294-8361",
//     "country": "Belarus"
//   }
// },
// {
//   "general": {
//     "firstName": "Geoffrey",
//     "lastName": "Russel",
//     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/swaplord/128.jpg"
//   },
//   "job": {
//     "company": "Nienow and Sons",
//     "title": "Central Intranet Designer"
//   },
//   "contact": {
//     "email": "Daron.Bartoletti9@gmail.com",
//     "phone": "646.580.9390"
//   },
//   "address": {
//     "street": "5050 Iva Extensions",
//     "city": "Madonna burgh",
//     "zipCode": "74470-6362",
//     "country": "Fiji"
//   }
// },
// {
//   "general": {
//     "firstName": "Christian",
//     "lastName": "Wuckert",
//     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/lowie/128.jpg"
//   },
//   "job": {
//     "company": "Jakubowski Inc",
//     "title": "Future Branding Assistant"
//   },
//   "contact": {
//     "email": "Zechariah48@hotmail.com",
//     "phone": "555-516-5564"
//   },
//   "address": {
//     "street": "1946 Nolan Mountain",
//     "city": "Garnet stad",
//     "zipCode": "79438",
//     "country": "Puerto Rico"
//   }
// }]


class SearchClients extends Component {
  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '', clientSelected: false })

  handleResultSelect = (e, { result }) => this.setState({ value: result })

  
  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value: value })
    
    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => {
        // debugger
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
      <div key='content' className='content'>
        <div className='name'>{props.general.firstName + ' ' +props.general.lastName}</div>
        <div className='title'>{props.job.company}</div>
        <div className='description'>{props.job.title}</div>
      </div>,
  ]}

  onSelect = () => {
    console.log('ON SELECT')
  }

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
    })

    return (
      <Grid>
        <Grid.Column width={4}>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
            results={results}
            resultRenderer={this.resultRenderer}
            onSelect={this.onSelect}
            value={value}
            {...this.props}
          />
          <Item.Group>
            {clients}
          </Item.Group>
        </Grid.Column>
        <Grid.Column width={12}>
          <Segment>
            <ClientInfo client={this.state.clientSelected}/>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToRpops = state => ({
  clients: state.clients
});

// const mapActionToProps = {
//   onUpdateUser: updateClients
// };

export default connect(mapStateToRpops)(SearchClients);