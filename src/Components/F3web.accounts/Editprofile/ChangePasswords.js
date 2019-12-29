import React, { Component } from 'react';
import axios from 'axios'

import {Link} from 'react-router-dom'
import Footer from '../ACC_subComponents/Footer';
import { Navbar } from 'react-bootstrap';
import SideNav from '../ACC_subComponents/SideNav';
import NavBar from '../ACC_subComponents/NavBar';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { passwordChange } from '../../ServerApi/ServerApi';
import Auth from '../../ServerApi/Auth';

class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
          open: false,
		  wallet:false,
		  currentPassword:'',
		  oldPassword:'',
          Conform_password:'',
          fields:{},
          errors:{},
          user:{}
		  
        }
		
      }


      ChangePasswordvalidate(){

      let fields = this.state.fields
      let errors = {};
      let ChangePasswordvalid = true;

      

      if (!fields["oldPassword"]) {
        ChangePasswordvalid = false;
        errors["oldPassword"] = "*Please enter your oldPassword.";
    }

    if (typeof fields["oldPassword"] !== "undefined") {
        if (!fields["oldPassword"].match(/^[a-zA-Z0-9]+$/)) {
            ChangePasswordvalid = false;
            errors["oldPassword"] = "*Please enter   oldPassword.";
        }
    };
 
      if (!fields["currentPassword"]) {
        ChangePasswordvalid = false;
        errors["currentPassword"] = "*Please enter your newPassword.";
    }

    if (typeof fields["currentPassword"] !== "undefined") {
        if (!fields["currentPassword"].match(/^[a-zA-Z0-9]+$/)) {
            ChangePasswordvalid = false;
            errors["currentPassword"] = "*Please enter   newPassword.";
        }
    };



      


      
   



      if (!fields["Conform_password"]) {
          ChangePasswordvalid = false;
          errors["Conform_password"] = "*Please enter your Conform_password.";
      }





      if (typeof fields["Conform_password"] !== "undefined") {
          if (!fields["Conform_password"].match(/^[a-zA-Z0-9]+$/)) {
            ChangePasswordvalid = false;
              errors["Conform_password"] = "*Please enter  Conform_password.";
          }



          if (fields["currentPassword"] != fields["Conform_password"]) {
              errors["Conform_password"] = "*Please password do not match.";
              ChangePasswordvalid = false;
          }
          
      };
this.setState({errors:errors});
return ChangePasswordvalid;

    }
    
	 
	 handlechange=(e)=>{
		let fields = this.state.fields;
		fields[e.target.name] = e.target.value;
		this.setState({
			fields
		});
	 }
	 
	 handlesubmited=(event)=>{
        console.log('chnage')
		
        event.preventDefault();
        
        if (this.ChangePasswordvalidate()) {
			let fields = {};
			fields["oldPassword"] = "";
            fields["currentPassword"] = "";
            fields["Conform_password"] = "";
			this.setState({ fields: fields });

			const { currentPassword, oldPassword,Conform_password } = this.state.fields
			const userpasswords = {
                old_password: oldPassword,
				new_password: currentPassword,
              
              
            }
            console.log('outside', userpasswords);
            passwordChange(userpasswords).then(passwordresp=>{

                if(passwordresp.status==="ok"){
                    NotificationManager.success(' you have successfully changed your password','',2000);

                    setTimeout(()=>{
                        Auth.signout();
                        this.props.history.push('/')
                    },2000)
                    
                }else{

                    this.setState({
                        passwordError:passwordresp.message
                    })
                    NotificationManager.error(this.state.passwordError,'',5000);
                }
                console.log('changepassword',passwordresp)
            }).catch(err=>console.log(err))
            


		
			 
		
    }
	 }
	 
    render() {
        return (
            <div>


            <div class="container-fluid">
			<div class="row d-flex">
				<SideNav/>
				
				<div className="col-12 col-lg-9 px-0">
					<NavBar/>
					
					<div className="gray-bg">
						<div className="container-fluid px-3 py-3">
							<nav className="navbar navbar-expand-lg inner text-center text-md-left">
								<div id="navbarText" className="mx-auto mx-md-0">
									<ul className="navbar-nav  nav nav-list mr-auto">
                                    <li className="nav-item ">
										
                                        <Link  className="nav-link  " Link to={'/Profile'}>Profile</Link>


                                    </li>
                                    <li class="nav-item">
                                
                                        <Link  className="nav-link   " Link to={'/Documents'}>Documents</Link>
                                    </li>
                                    <li class="nav-item">		
                                        <Link  className="nav-link active " Link to={'/ChangePassword'}>Change Password</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link  className="nav-link" Link to={'/Notification'}>Notifications</Link>
                                    </li>
									</ul>
								</div>
							</nav>
						</div>
				</div>
					
					
					<div className="container px-3 py-3 px-md-5 py-md-5">
						<h1 className="inner">Change Password</h1>
						<div className="light-gray-bg px-5 py-5">
							<form className="inner-form" onSubmit={this.handlesubmited}>
								<div className="row">
									<div class="col-md-12 mb-3">
										<label for="">Current Password *</label>
										<input type="password"  name="oldPassword" value={this.state.fields.oldPassword}  onChange={this.handlechange}  class="form-control" placeholder=""/>
                                        <div className="errorMsg">{this.state.errors.oldPassword}</div>
									</div>
									<div class="col-md-12 mb-3">
										<label for="">New Password *</label>
										<input type="password"  name="currentPassword" value={this.state.fields.currentPassword}  onChange={this.handlechange}  class="form-control" placeholder=""/>
                                        <div className="errorMsg">{this.state.errors.currentPassword}</div>
									</div>
									<div class="col-md-12 mb-3">
										<label for="">Confirm New Password *</label>
										<input type="password"   name="Conform_password" value={this.state.fields.Conform_password}  onChange={this.handlechange}  class="form-control" placeholder=""/>
                                        <div className="errorMsg">{this.state.errors.Conform_password}</div>
									</div>
								</div>
								<hr class="my-5"/>
								<button className="btn btn-light" type="submit">Save Password</button>
							</form>
						</div>
					</div>	
				</div>
			</div>
		</div>
	   <Footer/>
                
            </div>
        )
    }
}
export default  ChangePassword