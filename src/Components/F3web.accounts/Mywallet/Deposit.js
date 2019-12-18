import React, { Component } from 'react'
import {Link } from 'react-router-dom';
import '../accounts.css'
import $ from 'jquery'
 import axios from 'axios'
import SideNav from '../ACC_subComponents/SideNav';
import NavBar from '../ACC_subComponents/NavBar';
import Footer from '../ACC_subComponents/Footer';
import { Balance } from '../../ServerApi/ServerApi';

export default class Deposit extends Component {
    constructor(props) {
        super(props);
        this.state = {
          open: false,
		  wallet:false,
		method:"",
		balance:'',
		bonusbalance:'',
		value:false

		}
		
      }


	 
    componentDidMount(){



		// Balance().then(balancedata=>{
		// 	//  console.log('responcs balance',balancedata);
	
		// 	 this.setState({
		// 		 balance:balancedata.cash,
		// 		 bonusbalance:balancedata.bonus
		// 	 })
		//  }).catch(err=>{
		// 	 console.log('err',err)
		//  })
	
	







          
	   }
	   handlechangeCard=(method)=>{
		   console.log('card',method);
		   this.setState({
			   method:method,
		   })
	   }
	   handlechange=(e)=>{
		   this.setState({
			   balance:e.target.value,
		   })
	   }


	   handlesubmit=(e)=>{
		e.preventDefault();
			 axios.post('',{
				
					amount:  parseInt( this.state.balance),
					method:this.state.method
				  
			 })
			 .then(resp=>{
				 console.log('responce card',resp);
			 }).catch(error=>{
				 console.log('error',error);
			 })
			
	   }
	//    handlelogout=()=>{
	// 	   Logout().then(resp=>{
	// 		console.log('responce',resp)
	// 			if(resp.status=='ok'){
	// 		 this.setState({
	// 			 error:"logout succuss"
	// 		 })
	// 		   this.props.history.push("/")
	// 		}else{
				
	// 			this.props.history.push("Deposit")
	// 		}
	// 	   }).catch(err=>{
	// 		   console.log('error',err)
	// 	   })
		  
	
    
	// }

	    
    render() {
        return (
           <div>
               <div className="container-fluid">
			<div className="row d-flex">
			<SideNav/>


				<div className="col-md-9 px-0">
					<NavBar/>
					<div className="gray-bg">
						<div className="container-fluid px-3 py-3">
							<nav className="navbar navbar-expand-lg inner text-center text-md-left">
								<div id="navbarText" className="mx-auto mx-md-0">
									<ul className="navbar-nav mr-auto">
										<li className="nav-item">
											{/* <a class="nav-link active" href="deposit.html">Deposit</a> */}
                                            <Link  className="nav-link active"  Link to={'/Deposit'}>Deposit</Link>
										</li>
										<li class="nav-item">
											{/* <a class="nav-link" href="withdraw.html">Withdraw</a> */}
                                            <Link   className="nav-link" Link to={'/WithDraw'}>Withdraw</Link>
										</li>
										<li className="nav-item">
											{/* <a class="nav-link" href="balance-history.html">Balance History</a> */}
                                            <Link  className="nav-link"  Link to={'/BalanceHistory'}>Balance History</Link>
										</li>
									</ul>
								</div>
							</nav>
						</div>
					</div>
					<div className="container-fluid px-3 py-3 px-md-5 py-md-5">
						<h1 className="inner">Deposit</h1>
						<div className="row clearfix">
							<div className="col-md-3">
								<ul className="tabs">
                                <li><a href="#" className="active"><img   onClick={()=>this.handlechangeCard('payPal')}  src = { process.env.PUBLIC_URL + "/paypal-logo.png" }  alt=""/></a></li>
      									<li><a href="#"><img     onClick={()=>this.handlechangeCard('visa')}src = { process.env.PUBLIC_URL + "/visa-logo.png" }       alt=""/></a></li>
      									<li><a href="#"><img  onClick={()=>this.handlechangeCard('masterCard')} src = { process.env.PUBLIC_URL + "/mastercard-logo.png" } alt=""/></a></li>
      									<li><a href="#"><img  onClick={()=>this.handlechangeCard('payPal')} src = { process.env.PUBLIC_URL + "/paypal-logo.png" }  alt=""/></a></li>
      									<li><a href="#"><img    onClick={()=>this.handlechangeCard('visa')} src = { process.env.PUBLIC_URL + "/visa-logo.png" } alt=""/></a></li>
      									<li><a href="#"><img   onClick={()=>this.handlechangeCard('masterCard')} src = { process.env.PUBLIC_URL + "/mastercard-logo.png" } alt=""/></a></li>
								</ul>
							</div>
							<div className="col-md-9 light-gray-bg px-5 py-5">
								<p>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
								</p>
								<form onSubmit={this.handlesubmit} >
									<label for="">Amount: *</label>
									<input type="text"   name="balance" value={this.state.balance}  onChange={this.handlechange}  className="form-control" placeholder="USD"/>
									<button className="btn btn-light small" type="submit">SUBMIT</button>
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
