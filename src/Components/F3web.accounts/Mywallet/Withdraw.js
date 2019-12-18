import React, { Component } from 'react'
import '../accounts.css'
import $ from 'jquery'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Footer from '../ACC_subComponents/Footer'
import SideNav from '../ACC_subComponents/SideNav'
import NavBar from '../ACC_subComponents/NavBar'

export default class WithDraw extends Component {
    constructor(props) {
        super(props);
        this.state = {
          open: false,
		  wallet:false,
	      paymentCard:''
        }
	}	
  

       
	 
	 handlechangeCard=(method)=>{
		console.log('card',method);
		this.setState({
			method:method,
		})
	}
	handlechange=(e)=>{
		this.setState({
			amount:e.target.value,
		})
	}
	handlesubmit=(e)=>{
		e.preventDefault();
 

		 const data={
			 
			  amount:parseInt(  this.state.amount),
			  method:this.state.method,
		 }

		 
		
			
			
	   }

	   handlelogout=()=>{
		  
		
	}
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
								<div id="navbarText" class="mx-auto mx-md-0">
									<ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
											{/* <a class="nav-link active" href="deposit.html">Deposit</a> */}
                                            <Link  className="nav-link "  Link to={'/Deposit'}>Deposit</Link>
										</li>
										<li className="nav-item">
											{/* <a class="nav-link" href="withdraw.html">Withdraw</a> */}
                                            <Link   className="nav-link  active" Link to={'/WithDraw'}>Withdraw</Link>
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
						<h1 className="inner">Withdraw</h1>
						<div className="row clearfix">
							<div className="col-md-3">
							<ul className="tabs">
                                <li><Link Link to={'#'} className="active"><img   onClick={()=>this.handlechangeCard('payPal')}  src = { process.env.PUBLIC_URL + "/paypal-logo.png" }  alt=""/> </Link></li>
      									<li><Link Link to={'#'}><img     onClick={()=>this.handlechangeCard('visa')}src = { process.env.PUBLIC_URL + "/visa-logo.png" }       alt=""/></Link></li>
      									<li><Link Link to={'#'}><img  onClick={()=>this.handlechangeCard('masterCard')} src = { process.env.PUBLIC_URL + "/mastercard-logo.png" } alt=""/></Link></li>
      									<li><Link Link to={'#'}><img  onClick={()=>this.handlechangeCard('payPal')} src = { process.env.PUBLIC_URL + "/paypal-logo.png" }  alt=""/></Link></li>
      									<li><Link Link to={'#'}><img    onClick={()=>this.handlechangeCard('visa')} src = { process.env.PUBLIC_URL + "/visa-logo.png" } alt=""/></Link></li>
      									<li><Link Link to={'#'}><img   onClick={()=>this.handlechangeCard('masterCard')} src = { process.env.PUBLIC_URL + "/mastercard-logo.png" } alt=""/></Link></li>
								</ul>
							</div>
							<div className="col-md-9 light-gray-bg px-5 py-5">
								<p>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
								</p>
							
								<form onSubmit={this.handlesubmit} >
									<label for="">Amount: *</label>
									<input type="text"   name="amount" value={this.state.amount}  onChange={this.handlechange}  className="form-control" placeholder="USD"/>
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
