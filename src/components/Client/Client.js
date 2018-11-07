import React from 'react';
import { Item } from 'semantic-ui-react';

export default class Client extends React.Component{
    onBtnClick = e => {
      // console.log('-----Client--------');
      // console.log(this.props.client);
      this.props.showClient(this.props.client)
    }

    render(){
      console.log('-----Client--------');
      const {client} = this.props;
      return(
        <Item onClick={this.onBtnClick}>
          <Item.Image className='ui mini middle aligned image' src={client.general.avatar}/>
          <Item.Content>
            <Item.Header as='a' className="hedList">{client.general.firstName + ' ' + client.general.lastName}</Item.Header>
            <Item.Description className="descripList">
              {client.job.title}
            </Item.Description>
          </Item.Content>
        </Item>
      )
    }
    
}

