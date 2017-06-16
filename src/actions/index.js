
import axios from 'axios';
export const SHOW_USERS = 'SHOW_USERS';

/*const users = [
		{id: 1, name:'Pepe'},
		{id: 2, name:'Carlo'},
		{id: 3, name:'Robert'},
		{id: 4, name:'Charles'}
]*/

/*action with thunk asyncronus call */
export function showUsers() {
	return (dispatch,getState) =>{
		axios.get('https://jsonplaceholder.typicode.com/users').
		then( (response) => { 
		    	dispatch( { type:SHOW_USERS,payload:response.data } )
		 	}	
     	 )}
}

/* Simple example action*/
/*export const showUsers = () =>({
	type: SHOW_USERS,
	payload :users
});
*/

	


