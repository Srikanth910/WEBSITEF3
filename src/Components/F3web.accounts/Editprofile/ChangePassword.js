import React, { Component } from 'react';
import axios from 'axios'

import {Link} from 'react-router-dom'
import Footer from '../ACC_subComponents/Footer';
import { Navbar } from 'react-bootstrap';
import SideNav from '../ACC_subComponents/SideNav';
import NavBar from '../ACC_subComponents/NavBar';

export default class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
          open: false,
		  wallet:false,
		  currentPassword:'',
		  newPasswrod:'',
		  conform_password:'',
		  
        }
		
      }



    
	 
	 handlechange=(e)=>{
		 this.setState({
			[e.target.name]:e.target.value
		 })
	 }
	 
	 handlesubmited=(event)=>{
		
		event.preventDefault();


		const data={
			currentPassword:this.state.currentPassword,
			newPassword:this.state.newPasswrod,
			conform_password:this.state.conform_password
		}
		//  console.log(body);
		

	 }
	 handlelogout=()=>{
		  
		
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
                                        <Link  className="nav-link" Link to={'/Notifications'}>Notifications</Link>
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
										<input type="password"  name="currentPassword" value={this.state.currentPassword}  onChange={this.handlechange}  class="form-control" placeholder=""/>
									</div>
									<div class="col-md-12 mb-3">
										<label for="">New Password *</label>
										<input type="password"  name="newpassword" value={this.state.newPassword}  onChange={this.handlechange} class="form-control" placeholder=""/>
									</div>
									<div class="col-md-12 mb-3">
										<label for="">Confirm New Password *</label>
										<input type="password"   name="conform_password" value={this.state.conform_password}  onChange={this.handlechange}  class="form-control" placeholder=""/>
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
