import React from 'react';
import { Grid, Item } from 'semantic-ui-react';


const clientInfo = (props) => {
  let details = <p className='invitation'><span>Select a Client to see more...</span></p>;
  
  if (props.client) {
    details = <Grid.Column width={10}>
                    <Item>
                        <Item.Image className='clientImage' src={props.client.general.avatar} bordered/>
                        <Item.Content className="textClient">
                            <Item.Header as='a' className="hedDetails">{props.client.general.firstName + ' ' + props.client.general.lastName}</Item.Header>
                            <Item.Extra className="jobDetails">
                                <p>
                                    <span>Job:</span>
                                    <Item>{props.client.job.title}</Item>
                                    <Item>{props.client.job.company}</Item>
                                </p>
                            </Item.Extra>
                            <Item.Description className="descripDetails">
                                <p>
                                    <span>Contacts:</span>
                                    <Item>{props.client.contact.phone}</Item>
                                    <Item>props.client.contact.email</Item>
                                </p>
                            </Item.Description>
                            <Item.Description className="descripDetails">
                                <p>
                                    <span>Addres:</span>
                                    <Item>{props.client.address.country}</Item>
                                    <Item>{props.client.address.city}</Item>
                                    <Item>{props.client.address.street}</Item>
                                    <Item>{props.client.address.zipCode}</Item>
                                </p>
                            </Item.Description>
                            </Item.Content>
                    </Item>
            </Grid.Column>
  }
  return <div>{details}</div>;
}

export default clientInfo;