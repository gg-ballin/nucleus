import React, { Component } from 'react';

import Scroll from './Scroll';

class List extends Component {
  render() {
    const {users} = this.props;
    return (
      <div className='tc'>
        <h1 className='f1'>Nucleus</h1>
        <Scroll>
        <div>
          {users && users.map((user) => {
            return(
              <a onClick={()=> this.props.onClick(user)} className='tc grow bg-light br3 pa3 ma2 dib bw2 shadow-5' id="card">
                <p><strong>{user.login}</strong></p>
              </a>
            )
          })}
        </div>
        </Scroll>      
      </div>
   )
  }
}

export default List;