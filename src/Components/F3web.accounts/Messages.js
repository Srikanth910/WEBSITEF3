import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import $ from 'jquery'
import axios from 'axios'
import SideNav from './ACC_subComponents/SideNav';
import NavBar from './ACC_subComponents/NavBar';
import Footer from './ACC_subComponents/Footer';

export default class Messages extends Component {

    constructor(props) {
        super(props);
        this.state = {
          open: false,
          wallet:false,
       
		name : "index",
		isActive: false	,
		subject:'',
		body:'',
		

		}
	}
	
	 handlechange=(name, active)=>{
		 console.log("amee",name)
		 this.setState({
			 name : name,
			//  active:active
			 
		 })
		
		//  }
		
	 }

	//  handleChangeText=(e)=>{
	// 	 this.setState({
	// 		 [e.target.name]:e.target.value

	// 	 })

	//  }
	 
	 

// 	 handleSubmit=(event)=>{
// 		event.preventDefault()

//  console.log('data',this.state.subject);


//   const messagedata={

// 	subject:this.state.subject,
// 	body:this.state.body
	
//   }
//    axios.post('http://localhost:8080/api/v1/messaging/messages',messagedata)
//    .then(resp=>{
// 	    console.log('responce mesaage',resp);
//    }).catch(error=>{
// 	   console.log('err',error)
//    })
// 	 }
// 	 handlelogout=()=>{
		  
// 		axios.get('http://localhost:8080/api/v1/player/logout',{
// 			dafault:"successful operation"
// 		})
// 		.then(res=>{
// 			console.log('res',res);
// 		}).catch(error=>{
// 			console.log('error',error)
// 		})
// 	}
    render() {
        return (
            <div>


<div className="container-fluid">
			<div className="row d-flex">
				
<SideNav/>
				
				<div className="col-md-9 px-0">
					<NavBar/>
					<div className="pt-3 pt-md-5">
						<h1 className="inner">Messages</h1>
						<div className="container-fluid">
							<ul className="nav nav-pills mb-3 blue-bg px-3 py-3" id="pills-tab" role="tablist">
								<li className="nav-item nav-link  active ">
									<Link Link to={'#tabs'}     onClick={() => this.handlechange("index")}  className="nav-link " aria-controls="pills-home" >Inbox</Link>
								</li>
								<li className="nav-item nav-link ">
								<Link Link to={'#tabs'}  onClick={() => this.handlechange("sent")}   className=" nav-link    " data-toggle="pill"  role="tab" aria-controls="pills-profile" >Sent Messages</Link>
								</li>
								<li className="nav-item float-right nav-link">
								<Link Link to={'#tabs'}   onClick={() => this.handlechange("new")}   className="nav-link "   data-toggle="pill" role="tab" aria-controls="pills-contact">New Message</Link>
								</li>
							</ul>
							<div className="tab-content" id="pills-tabContent">
                            {this.state.name === "index" && <div id="tabs" >
									<div  className="row clearfix darkest-gray-bg d-none d-md-flex">
										<div className="col-md-3 row-title">Subject</div>
										<div class="col-md-8 row-title">Body</div>
										<div class="col-md-1 row-title"></div>
									</div>
									<div class="row clearfix">
										<div class="col-md-3 px-3 py-2 border-right">
											index
										</div>
										<div class="col-md-8 px-3 py-2 dark-gray border-right">
											Body text goes here..
										</div>
										<div class="col-md-1 px-3 py-2 dark-gray text-center">
											<a href="#"><img src= { process.env.PUBLIC_URL + "/delete-icon.png" } alt="" className=""/></a>
										</div>
									</div>
									<div class="row clearfix lighest-gray-bg">
										<div class="col-md-3 px-3 py-2 border-right">
											Subject goes here
										</div>
										<div class="col-md-8 px-3 py-2 dark-gray border-right">
											Body text goes here..
										</div>
										<div class="col-md-1 px-3 py-2 dark-gray text-center">
											<a href="#"><img src= { process.env.PUBLIC_URL + "/delete-icon.png" } alt="" className=""/></a>
										</div>
									</div>
									<div class="row clearfix">
										<div class="col-md-3 px-3 py-2 border-right">
											Subject goes here
										</div>
										<div class="col-md-8 px-3 py-2 dark-gray border-right">
											Body text goes here..
										</div>
										<div className="col-md-1 px-3 py-2 dark-gray text-center">
											<a href="#"><img src= { process.env.PUBLIC_URL + "/delete-icon.png" } alt="" className=""/></a>
										</div>
									</div>
									<div className="row clearfix lighest-gray-bg">
										<div className="col-md-3 px-3 py-2 border-right">
											Subject goes here
										</div>
										<div className="col-md-8 px-3 py-2 dark-gray border-right">
											Body text goes here..
										</div>
										<div class="col-md-1 px-3 py-2 dark-gray text-center">
											<a href="#"><img src= { process.env.PUBLIC_URL + "/delete-icon.png" } alt="" class=""/></a>
										</div>
									</div>
								</div>}


						{this.state.name === "sent" &&	<div   id="tabs">
									<div   class="row clearfix darkest-gray-bg d-none d-md-flex">
										<div className="col-md-3 row-title">Subject</div>
										<div className="col-md-8 row-title">Body</div>
										<div className="col-md-1 row-title"></div> 
								 </div>
									<div className="row clearfix">
										<div className="col-md-3 px-3 py-2 border-right">
										{this.state.subject}
										</div>
										<div className="col-md-8 px-3 py-2 dark-gray border-right">
										{this.state.body}
										</div>
										<div className="col-md-1 px-3 py-2 dark-gray text-center">
											<a href="#"><img src= { process.env.PUBLIC_URL + "/delete-icon.png" } alt="" className=""/></a>
										</div>
									</div>
									<div className="row clearfix lighest-gray-bg">
										<div className="col-md-3 px-3 py-2 border-right">
											Subject goes here
										</div>
										<div className="col-md-8 px-3 py-2 dark-gray border-right">
											Body text goes here..
										</div>
										<div className="col-md-1 px-3 py-2 dark-gray text-center">
											<a href="#"><img src= { process.env.PUBLIC_URL + "/delete-icon.png" } alt="" className=""/></a>
										</div>
									</div>
									<div className="row clearfix">
										<div className="col-md-3 px-3 py-2 border-right">
											Subject goes here
										</div>
										<div className="col-md-8 px-3 py-2 dark-gray border-right">
											Body text goes here..
										</div>
										<div className="col-md-1 px-3 py-2 dark-gray text-center">
											<a href="#"><img src= { process.env.PUBLIC_URL + "/delete-icon.png" } alt="" className=""/></a>
										</div>
									</div>
									<div className="row clearfix lighest-gray-bg">
										<div className="col-md-3 px-3 py-2 border-right">
											Subject goes here
										</div>
										<div className="col-md-8 px-3 py-2 dark-gray border-right">
											Body texthelo here..
										</div>
										<div className="col-md-1 px-3 py-2 dark-gray text-center">
											<a href="#"><img src= { process.env.PUBLIC_URL + "/delete-icon.png" } alt="" className=""/></a>
										</div>
									</div>
								</div>}
							{this.state.name === "new" &&	<div   id="tabs">
									<div className="light-gray-bg px-5 py-5">
										<form onSubmit={this.handleSubmit}>
											
											<div className="form-group">
												<label className="exampleFormControlInput1">Subject</label>
												<input     name ="subject" value={this.state.subject} onChange={this.handleChangeText}  type="text" className="form-control" id="exampleFormControlInput1" placeholder="Subject"/>
											</div>
											<div className="form-group">
												<label className="exampleFormControlTextarea1">Body</label>
												<textarea   name="body"value={this.state.body} onChange={this.handleChangeText} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
											</div>
											<hr className="my-5"/>
											<button className="btn btn-light" type="submit">Send Message</button>
										</form>
									</div>
									
								</div>}
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
