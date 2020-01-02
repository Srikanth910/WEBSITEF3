import React, { Component } from 'react'
import Auth from '../../ServerApi/Auth'
import { Link ,} from 'react-router-dom'
import { withRouter ,Redirect} from 'react-router-dom';
import Modelpopup from '../HocModel/Modelpopup'
import { Logout } from '../../ServerApi/ServerApi'
import {NotificationContainer, NotificationManager} from 'react-notifications';


 class LoginButton extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
             
         }
     }
     

    LogoutUser=()=>{
     console.log('logour')
     Logout().then(user=>{
       if(user.status==="ok"){
        localStorage.removeItem('status');
   
     NotificationManager.success('You have successfully logged out','',1000);
    this.props.history.push('/');
       }else{
        NotificationManager.error('try again  ','',1000);

       }
         
     })
 }
    
    render() {
        var Userlogged=localStorage.getItem('status');
        
        
        return (
            <div>
                <NotificationContainer/>
                {Userlogged==='false'||Userlogged===null ?
						
						<Link to="" role="button" class="sign-in" data-toggle="modal" onClick={this.props.showmodel} data-target="#exampleModalCenter">Sign In / Register</Link>:null}

{Userlogged==="ok" ?
						<Link to={'#'} role="button" class="sign-in" data-toggle="modal"  onClick={this.LogoutUser} data-target="#exampleModalCenter">Logout</Link>:null}
						
            </div>
        )
    }
}


export default Modelpopup(withRouter(LoginButton));