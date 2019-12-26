import React, { Component } from 'react'
import $ from 'jquery'
import {Link} from 'react-router-dom'
import axios from 'axios';

import Footer from '../ACC_subComponents/Footer';
import SideNav from '../ACC_subComponents/SideNav';
import NavBar from '../ACC_subComponents/NavBar';


export default class Notifications extends Component {

    constructor(props) {
        super(props);
        this.state = {
         open: false,
		 wallet:false,
		 internal:'',
		 push:'',
		 email:'',
		 SMS:'',
		 phoneCall:'',
		
        }
      }

   
	

 


// }

onChange=( event )=> {



		// console.log( event.target.name	 );

		// let update = {};

		// update[ event.target.name ] = parseInt( event.target.value);

		// this.setState( update);
		 this.setState({
			//  internal:event.target.value,
			 [ event.target.name ]:event.target.value
		 })


	}   

	handleconfrom=(e)=>{
	e.preventDefault();
	//  const confromdata={
	// 	  internal:this.state.internal,
	// 	  email:this.state.email,
	// 	  push:this.state.push,
	// 	  SMS:this.state.SMS,
	// 	  phoneCall:this.state.phoneCall
	//  }
	 

		

	//   axios.post('http://localhost:8080/api/v1/messaging/notifications',confromdata
		
	//  axios.post('http://localhost:8080/api/v1/messaging/notifications',{
	// 		internal:   JSON.parse(this.state.internal),
	// 		sms:JSON.parse(this.state.push),
	// 		push: JSON.parse(this.state.push),
	// 		email:JSON.parse(this.state.email),
	// 		phoneCall: JSON.parse(this.state.phoneCall)
		  
	// }
	// ).then(resp=>{
	// 	 console.log('resp',resp);
	//  }).catch(error=>{
	// 	 console.log('error',error)
	//  })
	 
}

	
	
	
	render() {
        return (
            <div>
                

                <div className="container-fluid">
			<div className="row d-flex">
				<SideNav/>
				
				<div className="col-12 col-lg-9 px-0">
					<NavBar/>
					<div className="gray-bg">
						<div className="container-fluid px-3 py-3">
							<nav className="navbar navbar-expand-lg inner text-center text-md-left">
								<div id="navbarText" className="mx-auto mx-md-0">
									<ul className="navbar-nav  nav nav-list mr-auto">
                                    <li className="nav-item active">
										
                                        <Link  className="nav-link " Link to={'/Profile'}>Profile</Link>


                                    </li>
                                    <li class="nav-item">
                                
                                        <Link  className="nav-link  " Link to={'/Documents'}>Documents</Link>
                                    </li>
                                    <li class="nav-item">		
                                        <Link  className="nav-link " Link to={'/ChangePassword'}>Change Password</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link  className="nav-link active" Link to={'/Notification'}>Notifications</Link>
                                    </li>
									</ul>
								</div>
							</nav>
						</div>
				</div>
				
					
					
					<div className="container-fluid px-3 py-3 px-md-5 py-md-5">
						<h1 className="inner">Notifications</h1>
						<div className="light-gray-bg px-3 py-3 px-md-5 py-md-5">
							<p>
								Notify me about news and offers by
							</p>
							<div className="row">
								<form className="inner-form col-12" onSubmit={this.handleconfrom}>
									<div className="border px-3 mb-3">
										<div className="row pt-2">
											<div className="col-6 col-md-6">
												Internal Message
											</div>
											<div className="col-6 col-md-6 text-right">
												<div className="custom-control custom-radio custom-control-inline">
												<input type="radio" id="customRadioInline1" name="internal"   className="custom-control-input"onChange={this.onChange} value="true" checked={this.state.internal === "true"} />
												  
												  <label className="custom-control-label" for="customRadioInline1"></label>
												</div>
												<div className="custom-control custom-radio custom-control-inline">

												<input type="radio" id="customRadioInline2" name="internal"  className="custom-control-input"onChange={this.onChange} value="false" checked={this.state.internal === 'false'} />
												 
												  <label className="custom-control-label" for="customRadioInline2"></label>
												</div>
											</div>
										</div>
									</div>
									<div className="border px-3 mb-3">
										<div className="row pt-2">
											<div className="col-6 col-md-6">
												Push Notification
											</div>
											<div className="col-6 col-md-6 text-right">
												<div className="custom-control custom-radio custom-control-inline">

												<input type="radio"  name="push"   id="customRadioInline3"  className="custom-control-input" onChange={this.onChange}  value="true"checked={this.state.push === 'true'} />
												 
												 <label className="custom-control-label" for="customRadioInline3"></label>
												</div>
												<div className="custom-control custom-radio custom-control-inline">
												<input type="radio" id="customRadioInline4"  className="custom-control-input" name="push" onChange={this.onChange} value="false"checked={this.state.push === 'false'} />
												<label className="custom-control-label" for="customRadioInline4"></label>
												</div>
											</div>
										</div>
									</div>
									<div className="border px-3 mb-3">
										<div className="row pt-2">
											<div className="col-6 col-md-6">
												E-mail
											</div>
											<div   className="col-6 col-md-6 text-right">
												<div  className="custom-control custom-radio custom-control-inline">
												<input type="radio" id="customRadioInline5" className="custom-control-input" name="email" onChange={this.onChange} value="true"checked={this.state.email === 'true'} />
												 
												  <label className="custom-control-label" for="customRadioInline5"></label>
												</div>
												<div className="custom-control custom-radio custom-control-inline">
												<input type="radio" id="customRadioInline6"  className="custom-control-input"name="email" onChange={this.onChange} value="false"checked={this.state.email === 'false'} />
												  <label className="custom-control-label" for="customRadioInline6"></label>
												</div>
											</div>
										</div>
									</div>
									<div className="border px-3 mb-3">
										<div className="row pt-2">
											<div className="col-6 col-md-6">
												SMS
											</div>
											<div className="col-6 col-md-6 text-right">
												<div className="custom-control custom-radio custom-control-inline">
												<input type="radio" id="customRadioInline7"  className="custom-control-input" name="SMS" onChange={this.onChange} value="true" checked={this.state.SMS === "true"} />
												  <label className="custom-control-label"  for="customRadioInline7"></label>
												</div>
												<div className="custom-control custom-radio custom-control-inline">
												<input type="radio" id="customRadioInline8"  className="custom-control-input" name="SMS" onChange={this.onChange} value="false" checked={this.state.SMS === "false"} />
												  <label className="custom-control-label"  for="customRadioInline8"></label>
												</div>
											</div>
										</div>
									</div>
									<div className="border px-3 mb-3">
										<div className="row pt-2">
											<div className="col-6 col-md-6">
												Phone Call
											</div>
											<div className="col-6 col-md-6 text-right">
												<div className="custom-control custom-radio custom-control-inline">
												<input type="radio" id="customRadioInline9"  className="custom-control-input"name="phoneCall" onChange={this.onChange} value="true" checked={this.state.phoneCall === "true"} />
												  <label className="custom-control-label" for="customRadioInline9"></label>
												</div>
												<div className="custom-control custom-radio custom-control-inline">
												<input type="radio" id="customRadioInline10"  className="custom-control-input"name="phoneCall" onChange={this.onChange} value="false" checked={this.state.phoneCall === "false"} />
												  <label className="custom-control-label" for="customRadioInline10"></label>
												</div>
											</div>
										</div>
									</div>
									<hr class="my-3 my-md-5"/>
									<button className="btn btn-light" type="submit">Confirm</button>
								</form>
							</div>
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
