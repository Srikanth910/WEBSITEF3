import React from 'react'
// import ProtectedRoute from './auth';
import {Route, Redirect} from 'react-router-dom'
import Auth from './Auth';

 
 const ProtectedRoute = ({ component: Component, ...rest }) => (

	
	<Route
	  {...rest}
	  render={props =>
		Auth.getAuth() ? (
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
   ;
  
   export default ProtectedRoute;