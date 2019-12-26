import React, { Component } from 'react'
import Auth from '../../ServerApi/Auth'
import { Link ,} from 'react-router-dom'
import { withRouter ,Redirect} from 'react-router-dom';
import Modelpopup from '../HocModel/Modelpopup'
import { Logout } from '../../ServerApi/ServerApi'
import {NotificationContainer, NotificationManager} from 'react-notifications';

 class LoginButton extends Component {

    LogoutUser=()=>{
     console.log('logour')
     Logout().then(user=>{
       if(user.status==="ok"){
      
        Auth.signout();
     NotificationManager.success('successful logout ');
    this.props.history.push('/');
       }else{
        NotificationManager.error('try again  ');

       }
         
     })
 }
    
    render() {
        return (
            <div>
                <NotificationContainer/>
                {Auth.getAuth()===false &&
						
						<Link to="" role="button" class="sign-in" data-toggle="modal" onClick={this.props.showmodel} data-target="#exampleModalCenter">Sign In / Register</Link>}

{Auth.getAuth()===true &&
						<Link to={'#'} role="button" class="sign-in" data-toggle="modal"  onClick={this.LogoutUser} data-target="#exampleModalCenter">Logout</Link>}
						
            </div>
        )
    }
}


export default Modelpopup(withRouter(LoginButton));