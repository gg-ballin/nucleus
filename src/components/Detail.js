import React, { Component } from 'react';
import {fetch_user} from '../actions'

class Detail extends Component {
    state = {
      user :{}
    }


    async componentDidMount(){
      let {user} = this.props;
      if(user && user.login) {
        this.setState({ user })
      }
      else {
        let userId = this.props.history.location.pathname.replace('/details/', '');
        let result = await fetch_user(userId);
        this.setState({user: result})
      }
      
    }
  
  
    render() {
    const {user, history} = this.props;
      return (
        <div className='tc'>
          <h1 className='f1'>User Detail</h1>
          <div className='tc  bg-light br3 pa3 ma2 dib bw2 shadow-1' id="card">
            <img src={user.avatar_url}/>
            <p><strong>Name:</strong> {user.login}</p>
            <p><strong>Location:</strong> {user.location}</p>
          </div>
        </div>
   )
        
  }
}

export default Detail;