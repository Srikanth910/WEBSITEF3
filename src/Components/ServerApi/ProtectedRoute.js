import React from 'react'
// import ProtectedRoute from './auth';
import {Route, Redirect} from 'react-router-dom'
import Auth from './Auth';

 
 const ProtectedRoute = ({ component: Component, ...rest }) => {

	const isAuth = localStorage.getItem('isAuth');
	console.log('autheritcation', isAuth)


	return(
	<Route
	  {...rest}
	  render={props =>
		 isAuth? (
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