import React from 'react';

const clientMini = (props) => {
    return <div onClick={() => props.clicked(props.client)}>
            <img src={props.client.general.avatar} className='image' alt='avatar'></img>,
            <div key='content' className='content'>
                <div className='name'>{props.client.general.firstName + ' ' +props.client.general.lastName}</div>
                <div className='title'>{props.client.job.company}</div>
                <div className='description'>{props.client.job.title}</div>
            </div>
    </div>
  }
  
  export default clientMini;

