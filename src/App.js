import React, { Component } from 'react';
import {ViewUser} from './components/ViewUser';
import {getUsers} from './api/Users';

class App extends Component{

  state = {
    users:[],
    user: {}
  }

  componentDidMount = ()=> {
    getUsers().then(response => {
      this.setState({users : response.data})
    });
  }
  

  setActive = (user) => {
    this.setState({
      user:user
    })
  }
  render(){



     
    return (
      
      <div>

          <ul >
            {this.state.users.map(user => 
                 <li key = {user.id}>
                  {user.name} 
                  <button style={{marginLeft:'20px'}} onClick= {()=> this.setActive(user)}> View Detail</button>
                </li>
            )}
           
          </ul>

              {this.state.user.id>0 ?
             <ViewUser user = {this.state.user} />
          :null}
          

      </div>
    );
  }
}

export default App;
