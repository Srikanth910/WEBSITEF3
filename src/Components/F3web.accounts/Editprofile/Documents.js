import React, { Component } from 'react'
import $ from 'jquery'
import {Link} from 'react-router-dom'
import axios from 'axios'
import SideNav from '../ACC_subComponents/SideNav';
import NavBar from '../ACC_subComponents/NavBar';
import Footer from '../ACC_subComponents/Footer';

export default class Documents extends Component {

   constructor(props) {
       super(props);
       this.state = {
         open: false,
         wallet:false,
         selectedFile: '',
          idDocument:''
         
       }
       
     }


    handleFileChange=(e)=>{

       this.setState({
           selectedFile: e.target.value,
         })
    }



    handleChange=(e)=>{
        this.setState({
            idDocument:e.target.value
        })
    }



   //  handlefilesubmit=(event)=>{
   // 	event.preventDefault();



   // 	 let formdata= new FormData();
   // 	formdata.append("image",this.state.selectedFile)
   // 	formdata.append("image alt",this.state.idDocument)
       
   // 	// axios.post(	`http://localhost:8080/api/v1/player/uploadImage?idDocument=${this.state.idDocument}`,formdata)
   // 	axios.post('http://localhost:8080/api/v1/player/uploadKYC', formdata,
   // 	{
   // 		headers: {
   // 			"Content-Type": "multipart/form-data",
   // 			"Accept": "application/json",
   // 			"type": "formData"
   // 		  },
   // 	}
           
   // 	)

   // 	.then(resp=>{
   // 		console.log('respnce',resp)
   // 	}).catch(error=>{
   // 		console.log('error',error)
   // 	})

       
   //  }	
    
   //  handlelogout=()=>{
         
   // 	axios.get('http://localhost:8080/api/v1/player/logout',{
   // 		dafault:"successful operation"
   // 	})
   // 	.then(res=>{
   // 		console.log('res',res);
   // 	}).catch(error=>{
   // 		console.log('error',error)
   // 	})
   // }
    render() {
        return (
           

<>
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
                                       
                                       <Link  className="nav-link  " Link to={'/Profile'}>Profile</Link>


                                   </li>
                                   <li class="nav-item">
                               
                                       <Link  className="nav-link  active " Link to={'/Documents'}>Documents</Link>
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
                       <h1 className="inner">Documents</h1>
                       <div className="light-gray-bg px-5 py-5">
                           <p>
                               In order to verify your account, you should upload the documents that proves your personal information. We are required by the Malta Gaming Authority MGA) and both Malta and European Anti-Money Laundering regulations to verify the identity and address of our customers.
                           </p>
                           <form className="inner-form" onSubmit={this.handlefilesubmit}>
                               <div className="row">
                                   <div className="col-md-6 mb-3">
                                       <select name="idDocument" value={this.state.idDocument}  onChange={this.handleChange}    className="form-control">
                                               <option >Bank Slip</option>
                                               <option >Identity Document</option>
                                                <option >Passport</option>
                                                  <option >Driver's License</option>
                                      </select>
                                   </div>
                                   <div className="col-md-6 mb-3">
                                       <input type="file"   name="file"  value= {this.state.selectedFile} onChange={this.handleFileChange} class="form-control" placeholder=""/>
                                   </div>
                               </div>
                               <hr className="my-5"/>
                               <button className="btn btn-light" type="submit">Choose File</button>
                           </form>
                       </div>
                       <div className="pt-5">
                           <h5 className="black">Uploaded Documents</h5>
                           <div className="border px-3 py-3 mb-3">
                               Document name goes here
                               <a href="#" class="download"></a>
                           </div>
                           <div className="border px-3 py-3">
                               Document name goes here
                               <a href="#" className="download"></a>
                           </div>
                       </div>
                   </div>	
               </div>
           </div>
       </div>
       <Footer/>
       
</>
        )
    }
}
