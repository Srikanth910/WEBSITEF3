import React, { Component } from 'react'
// import './Home.css'
import '../accounts.css';
import $ from 'jquery';
import {Link} from 'react-router-dom';
import Footer from '../ACC_subComponents/Footer';
import SideNav from '../ACC_subComponents/SideNav';
import NavBar from '../ACC_subComponents/NavBar';
import { Balance, Getdata, Updateprofile } from '../../ServerApi/ServerApi';




export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {

		  todoItems: [],
          open: false,
		  wallet:false,
		  

		  //balance data
		  balance:'',
		  mainbouns:'',
		  
//profile data

	  first_name:'',
	  last_name:'',
	  date_of_birth :'',
	  email:'',
	  password:'',
	  state:'',
	  phone_number:'',
	  currency:'',
	  city:'',
	  country:'',
	  address:'',
	  gender: '',
	  pincode:'',


		}
		this.handlechange=this.handlechange.bind(this)
		
	}


	
        



    componentDidMount=()=>{


console.log('called component	')


     Balance().then(balancedata=>{
		//  console.log('responcs balance',balancedata);

		 this.setState({
			 balance:balancedata.cash,
			 mainbouns:balancedata.bonus
		 })
	 }).catch(err=>{
		 console.log('err',err)
	 })


		//fetch data
    Getdata().then(userProfile=>{
		 console.log('profile',userProfile)
	
		 this.setState({
			first_name : userProfile.firstName,
			last_name:userProfile.lastName,
			currency:userProfile.currency,
			date_of_birth:userProfile.dateOfBirth,
			address:userProfile.address,
			state:userProfile.state,
			city:userProfile.city,
			gender:userProfile.sex,
			phone_number:userProfile.phoneNumber,
			country:userProfile.country,
			pincode:userProfile.pincode,
			
			


			
		 })
		 console.log(this.state.first_name);
	}).catch(err=>{
		console.log('err',err)
	})

    
		
		 
	 }
	 handlechange=(event)=>{
		    
		 this.setState({
		 [event.target.name]:event.target.value,
		
		 
		})
	 }
	 
	 handlesubmit=(e)=>{
		
		e.preventDefault();

		 const  userdata={
			 first_name:this.state.first_name,
			 last_name:this.state.last_name,
			 date_of_birth :this.state.date_of_birth,
			
			 state:this.state.state,
			 gender:this.state.gender,
			 currency:this.state.currency,
			 pincode:this.state.pincode,
			 phone_number:this.state.phone_number,
			 city:this.state.city,
			 country:this.state.country,
			 address:this.state.address
		 }
		  console.log('userdata', userdata)
		 


	Updateprofile(userdata).then(resp=>{
		console.log('responce profile', resp)
	}).catch(err=>{
		console.log('error',err)
	})

	
	 }

	//  handlelogout=()=>{
		  
	// 	Logout().then(resp=>{
	// 		console.log('responce',resp)
	// 			if(resp.status==200){
	// 		alert('logout succuss')
	// 		   this.props.history.push("/")
	// 		}else{
				
	// 			this.props.history.push("#  ")
	// 		}
	// 	   }).catch(err=>{
	// 		   console.log('error',err)
	// 	   })
        
    
		
	//  } 



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
                                    <li className="nav-item ">
										
                                        <Link  className="nav-link active " Link to={'/Profile'}>Profile</Link>


                                    </li>
                                    <li class="nav-item">
                                
                                        <Link  className="nav-link  " Link to={'/Documents'}>Documents</Link>
                                    </li>
                                    <li class="nav-item">		
                                        <Link  className="nav-link " Link to={'/ChangePassword'}>Change Password</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link  className="nav-link" Link to={'/Notification'}>Notifications</Link>
                                    </li>
									</ul>
								</div>
							</nav>
						</div>
				</div>
					<div className="container-fluid px-3 py-3 px-md-5 py-md-5">
						<h1 className="inner">My Profile</h1>
						<div className="light-gray-bg px-5 py-5">
							
						
				       <form   onSubmit={this.handlesubmit}className="inner-form">
								<div className="row">
									<div className="col-md-6 mb-3">
										<label className="">First Name</label>
										
                   
										<input type="text" 	 name="first_name" value={this.state.first_name}  onChange={this.handlechange}  className="form-control" placeholder=""/>
									
								
									</div>
									<div className="col-md-6 mb-3">
										<label className="">Last Name</label>
										<input type="text"  name="last_name" value={this.state.last_name}   onChange={this.handlechange}  className="form-control" placeholder=""/>
									</div>
								 
									
									<div className="col-md-6 mb-3">
										<label className="">Birth Date *</label>
										<input type="text"   name="date_of_birth" value={this.state.date_of_birth}   onChange={this.handlechange}className="form-control" placeholder=""/>
									</div>
									<div className="col-md-6 mb-3">
										<label className="">Mobile Number *</label>
										<input type="text"   name="phone_number" value={this.state.phone_number}   onChange={this.handlechange}className="form-control" placeholder=""/>
									</div>
									<div className="col-md-6 mb-3">
										<label className="">currency</label>
										<input type="text"   name="currency" value={this.state.currency}   onChange={this.handlechange}className="form-control" placeholder=""/>
									</div>
									<div className="col-md-6 mb-3">
										<label className="">Gender *</label>
										<div className="col px-0 py-3">
											<div className="custom-control custom-radio custom-control-inline mr-5">
											  <input type="radio"   value="m" name="gender" checked={this.state.gender === 'm'}  onChange={this.handlechange} id="customRadioInline1"   className="custom-control-input"/>
											  <label className="custom-control-label" for="customRadioInline1">Male</label>
											</div>
											<div className="custom-control custom-radio custom-control-inline">
											  <input type="radio" value="f"   name="gender"  checked={this.state.gender === 'f'} onChange={this.handlechange} id="customRadioInline2" className="custom-control-input"/>
											  <label className="custom-control-label" for="customRadioInline2">Female</label>
											</div>
										</div>	
									</div>
									<div className="col-md-6 mb-3">
										<label className="">City *</label>
										<input type="text"  name="city" value={this.state.city}   onChange={this.handlechange} className="form-control" placeholder=""/>
									</div>
									<div className="col-md-6 mb-3">
										<label className="">Pincode</label>
										<input type="text"   name="pincode" value={this.state.pincode}   onChange={this.handlechange}className="form-control" placeholder=""/>
									</div>
									<div className="col-md-6">
										<label className="">state *</label>
										<input type="text"  name="state" value={this.state.state}   onChange={this.handlechange} className="form-control" placeholder=""/>
									</div>
									<div className="col-md-6">
										<label className="">Country *</label>
										<input type="text"  name="country" value={this.state.country}   onChange={this.handlechange} className="form-control" placeholder=""/>
									</div>
									
									<div className="col-md-6">
										<label className="">Address *</label>
										<input type="text"   name="address" value={this.state.address}   onChange={this.handlechange}className="form-control" placeholder=""/>
									</div>
								</div>
								<hr className="my-5"/>
								<button className="btn btn-light" type="submit">Save Profile</button>
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
