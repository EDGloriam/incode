import React from 'react';
import { Item } from 'semantic-ui-react';

const Client = (props) => {
    return(
      <Item onClick={() => props.showClientInfo(props.client)}>
        <Item.Image className='ui mini middle aligned image' src={props.client.general.avatar}/>
        <Item.Content>
          <Item.Header as='a' className="hedList">{props.client.general.firstName + ' ' + props.client.general.lastName}</Item.Header>
          <Item.Description className="descripList">
            {props.client.job.title}
          </Item.Description>
        </Item.Content>
      </Item>
  )
}

export default Client;