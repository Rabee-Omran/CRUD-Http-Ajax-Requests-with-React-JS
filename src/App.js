import React, { Component } from 'react';
import {ViewUser} from './components/ViewUser';
import {getUsers, deleteUser, updateUser, addUser} from './api/Users';
import UsersForm from './components/UsersForm';
class App extends Component{

  state = {
    users:[],
    user: {}
  }

  componentDidMount = ()=> {
    getUsers().then(response => {
      this.setState({users : response.data})
    }).catch(
      ()=>{alert('an error ')
    });;
  }
  

  setActive = (user) => {
    this.setState({
      user:user
    })
  }
  deleteUser = (user) => {

   
    //delete from server
    deleteUser(user.id).then(()=>{

        //then delete from state
        let users = this.state.users;
        const index = users.indexOf(user);
        users.splice(index, 1);
        this.setState({
          users:users
        })

    }).catch(
      ()=>{alert('an error ')
    });
  }

  updateUser = (values) => {

      const id = this.state.user.id
      updateUser(id, values).then(()=> alert('Done'))
  }

  addUser =(values)=> {
    addUser(values).then(()=> alert('Done'))
  } 

  render(){



     
    return (
      
      <div>

          <ul >
            {this.state.users.map(user => 
                 <li key = {user.id}>
                  {user.name} 
                  <button style={{marginLeft:'20px'}} onClick= {()=> this.setActive(user)}> View Detail</button>
                  <button style={{marginLeft:'20px'}} onClick= {()=> this.deleteUser(user)}> Delete</button>
                </li>
            )}
           
          </ul>

              {this.state.user.id>0 ?
             <ViewUser user = {this.state.user} />
          :null}

              {this.state.user.id>0 ?
              <div>  
                <h3> User Edit </h3>  
                <UsersForm values = {this.state.user}  onSubmit = {this.updateUser} />
              </div>
            
          :null}

              <div>  
                <h3> Add User </h3>  
                <UsersForm values = {{
                  name : '',
                  email: ''
                }}  onSubmit = {this.addUser} />
              </div>

          

      </div>
    );
  }
}

export default App;
