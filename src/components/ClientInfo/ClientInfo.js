import React from 'react';
import { Grid, Segment, Item } from 'semantic-ui-react';


const clientInfo = (props) => {
  let details = <p>Click Client to see more...</p>;
  

  if (props.client) {

    details = <Grid.Column width={10}>
                <Segment>
                    <Item>
                        <Item.Image className='clientImage' src={props.client.general.avatar} bordered/>
                        <Item.Content className="textClient">
                            <Item.Header as='a' className="hedDetails">{props.client.general.firstName + ' ' + props.client.general.lastName}</Item.Header>
                            <Item.Extra className="descripDetails">
                                {props.client.job.title + props.client.job.company}
                            </Item.Extra>
                            <Item.Description className="descripDetails">
                                {props.client.contact.phone + props.client.contact.email}
                            </Item.Description>
                            <Item.Description className="descripDetails">
                                {props.client.address.country + props.client.address.zipCode + props.client.address.city + props.client.address.street}
                            </Item.Description>
                            </Item.Content>
                    </Item>
                </Segment>
            </Grid.Column>
  }
  return <div>{details}</div>;
}

export default clientInfo;