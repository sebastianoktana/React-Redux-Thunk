import React, { Component } from 'react';
import {connect} from 'react-redux';
import {showUsers} from '../actions';
import { Table } from 'react-bootstrap';



 class App extends Component {
  
   componentWillMount(){
   		this.props.showUsers();
   }


   renderUserList(){
   	return this.props.users.map((user) =>{
   		return (
   		 		<tr key={user.id}>
   		 		<td>{user.id}</td>
   		 		<td>{user.name}</td>
          <td>{user.company.name}</td>
   		 		</tr>
   			)
   		 
   	   })
   }
  
render() {
    return (
      <div>
      	<h2>Users List</h2>
	      	 <Table responsive>
			    <thead>
			      <tr>
			        <th>Id</th>
			        <th>Name</th>
              <th>Company</th>
			      </tr>
			    </thead>
			    <tbody>
			     { this.renderUserList() } 
			    </tbody>
			 </Table>
	 </div>
    );
  }
}


function mapStateToProps (state) {
	   return {
	   		users: state.user.list
	   }
}

export default connect (mapStateToProps,{showUsers})(App)





