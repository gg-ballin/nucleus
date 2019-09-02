import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import List from '../components/List'
import Detail from '../components/Detail'
import './App.css';
import {fetch_user} from '../actions'

const history = createBrowserHistory();

const topUsers = ['GrahamCampbell','fabpot','weierophinney','rkh','josh'] 

class App extends Component {
  state = { 
    user: {}, 
    searchfield: '', 
    users: []
  }

  async componentDidMount() {
    this.setState({ users: await this.fetchUsers(topUsers) })
  }

  fetchUsers = async (data) => {
    let users = data.map(async (userid) => await fetch_user(userid))
    return Promise.all(users)
  }
  
  selectUser(user) {
    this.setState({ user: user })
    history.push(`/details/${user.login}`)
  }
  
  clearUser() {
    this.setState({ user: null })  
    history.goBack()
  }

  onSearchChange = (event) => {
    this.fetchData(event.target.value);
  }

  render() {
    const {users, user} = this.state;
    return (
      <Router history={history}>
          <Route 
            exact path="/" 
            component={()=> (
              <List 
                users={users} 
                onClick={(user) => this.selectUser(user)} 
                onSearchChange={this.onSearchChange.bind(this)} 
              />)
            } 
          />
          <Route 
            exact path="/details/:id" 
            component={()=> (
              <Detail history={history} clearUser={()=> this.clearUser()} user={user} />
              )} />
      </Router> )
  }
}




export default App;