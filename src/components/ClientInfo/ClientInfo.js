import React, { Component } from 'react';
import { Grid, Item } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { showClient } from '../../store/actions/ClientAction';

class ClientInfo extends Component {
    render(){
        // console.log('-----INFO--------');
        let content;
        if (typeof this.props.clientInfo === 'string'){
            content = <p className='invitation'><span>Select a Client to see more...</span></p>;
        } else {
            // console.log('----------------- INFO -------------');
            // console.log(this.props);
            const { clientInfo } = this.props.clientInfo
            // console.log('----------------- INFO/client -------------');
            // console.log(clientInfo);
            content = <Grid.Column width={10}>
                        <Item>
                            <Item.Image className='clientImage' src={clientInfo.general.avatar} bordered/>
                            <Item.Content className="textClient">
                                <Item.Header as='a' className="hedDetails">{clientInfo.general.firstName + ' ' + clientInfo.general.lastName}</Item.Header>
                                <Item.Description className="jobDetails">
                                    <span>Job:</span>
                                    <Item>{clientInfo.job.title}</Item>
                                    <Item>{clientInfo.job.company}</Item>
                                </Item.Description>
                                <Item.Description className="descripDetails">
                                    <span>Contacts:</span>
                                    <Item>{clientInfo.contact.phone}</Item>
                                    <Item>clientInfo.contact.email</Item>
                                </Item.Description>
                                <Item.Description className="descripDetails">
                                    <span>Addres:</span>
                                    <Item>{clientInfo.address.country}</Item>
                                    <Item>{clientInfo.address.city}</Item>
                                    <Item>{clientInfo.address.street}</Item>
                                    <Item>{clientInfo.address.zipCode}</Item>
                                </Item.Description>
                                </Item.Content>
                        </Item>
                    </Grid.Column>
        }
        return content;
  }
}


const mapStateToRpops = store => ({
    clientInfo: store.clientInfo
  });

  
  export default connect(
    mapStateToRpops
    )(ClientInfo);
