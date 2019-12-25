import React, { Component } from 'react'
import Auth from '../../ServerApi/Auth'
import { Link } from 'react-router-dom'
import Modelpopup from '../HocModel/Modelpopup'

 class LoginButton extends Component {
    render() {
        return (
            <div>
                {Auth.getAuth()===false &&
						
						<Link to="" role="button" class="sign-in" data-toggle="modal" onClick={this.props.showmodel} data-target="#exampleModalCenter">Sign In / Register</Link>}

{Auth.getAuth()===true &&
						<Link to="" role="button" class="sign-in" data-toggle="modal"  onClick={this.LogoutUser} data-target="#exampleModalCenter">Logout</Link>}
						
            </div>
        )
    }
}


export default Modelpopup(LoginButton)