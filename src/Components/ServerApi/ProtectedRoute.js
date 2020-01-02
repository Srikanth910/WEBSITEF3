import React from 'react'
// import ProtectedRoute from './auth';
import {Route, Redirect} from 'react-router-dom'
import Auth from './Auth';

 
 const ProtectedRoute = ({ component: Component, ...rest }) => {

	const status = localStorage.getItem('status');
	console.log('autheritcation', status)


	return(
	<Route
	  {...rest}
	  render={props =>
		 status==="ok"? (
		  <Component {...props} />
		) : (
		  <Redirect
			to={{
			  pathname: "/",
			  state:{
				from: props.location
				  
			  }
			  
			   
			}}
		  />
		)
	  }
	/>
	)
	}
   ;
  
   export default ProtectedRoute;