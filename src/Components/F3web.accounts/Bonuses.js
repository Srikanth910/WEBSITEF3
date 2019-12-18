import React, { Component } from 'react'

	import {Link} from 'react-router-dom'
import $ from 'jquery'
import axios from 'axios'
import SideNav from './ACC_subComponents/SideNav';
import NavBar from './ACC_subComponents/NavBar';
import Footer from './ACC_subComponents/Footer';

export default class Bonuses extends Component {
    constructor(props) {
        super(props);
        this.state = {
          open: false,
		  wallet:false,
		  
		   accordian:true,
		   accordian1:false	
		  
        }
	 	
      }


	  
	  
 handleopen=(name)=>{
	   console.log('name',name)
	 this.setState({
		 collapse:name
	 })
 }

 handlelogout=()=>{
		  
	axios.get('http://localhost:8080/api/v1/player/logout',{
		dafault:"successful operation"
	})
	.then(res=>{
		console.log('res',res);
	}).catch(error=>{
		console.log('error',error)
	})
}
    render() {
        return (
            <div>
                


                <div class="container-fluid">
			<div class="row d-flex">
				<SideNav/>
				
				<div className="col-12 col-lg-9 px-0">
					<NavBar-/>
				
					<div className="container-fluid pb-5">
						<h1 className="inner mt-5">Bonuses</h1>
						<div className="row clearfix darkest-gray-bg d-none d-md-flex">
							<div className="col-md-5 row-title">Bonus Name</div>
							<div className="col-md-3 row-title">Amount</div>
							<div className="col-md-3 row-title">Status</div>
							<div className="col-md-1 row-title"></div>
						</div>


		
						{/* <div className="accordion bonuses" id="accordionExample1">
							<div className="cardd mt-2">
								<div className="card-header" id="headingOne">
									<h5 className="mb-0">
										<div className="row">
											<div className="col-md-5">
												<h6>100% First Deposit Bonus up to 100 EUR</h6>
											</div>
											<div className="col-md-3 text-left text-md-center dark-gray">
												<span className="row-title d-inline d-md-none">Amount: </span><strong>-</strong>
											</div>
											<div className="col-md-3 text-left text-md-center dark-gray">
												<span className="row-title d-inline d-md-none">Status: </span><strong>Available Bonus</strong>
											</div>
											<div className="col-md-1 accordion_head">
												 <button  onClick={function(){this.setState({accordian:!this.state.accordian})}.bind(this)}  className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
												</button> 
													<button  className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
												</button>
											</div>
										</div>
									</h5>
								</div>
								
							<div id="collapseOne" className="accordion_body" aria-labelledby="headingOne" data-parent="#accordionExample1">
						<div className="card-body">
										<div className="blue-bg px-3"><strong>Starting Date:</strong> 05/06/2019 05:30 &nbsp; | &nbsp; <strong>Ending Date:</strong> 01/12/2021 05:30</div>
										<div className="clearfix pt-3">	
											<div className="float-left"><strong>Wagered:</strong> 0 USD</div> <div class="float-right"><strong>Remaining:</strong> 0 USD</div>
										</div>
										<hr/>
										<div className="row mx-1">
											<div className="col-md-4 light-gray-bg d-none d-md-flex">
												<strong>Time to Wager</strong>
											</div>
											<div className="col-md-4 light-gray-bg d-none d-md-flex">
												<strong>Wagering Req</strong>
											</div>
											<div className="col-md-4 light-gray-bg d-none d-md-flex">
												<strong>Min/Max Deposit</strong>
											</div>
											<div className="col-md-4">
												<span className="row-title d-inline d-md-none">Time to Wager: </span>30 days
											</div>
											<div className="col-md-4">
												<span className="row-title d-inline d-md-none">Wagering Req: </span>35x
											</div>
											<div className="col-md-4">
												<span className="row-title d-inline d-md-none">Min/Max Deposit: </span>10 USD / 100 USD
											</div>
										</div>
										<hr/>
										<div className="clearfix pt-3">	
											<div className="float-left">
												<button className="btn btn-light small mt-0 mr-5" type="submit">Claim Bonus</button>
											</div>
											<div class="float-left pt-3">
												<p>Make your first deposit and the bonus will be activated automatically. 100 Free Spins on Starburst will be distributed over 5 days. Good luck.</p>
											</div>
		                       </div>		
									</div>
								</div>
							</div>
							<div className="card mt-2">
								<div className="card-header" id="headingTwo">
									<h5 className="mb-0">
										<div className="row">
											<div className="col-md-5">
												<h6>100% First Deposit Bonus up to 100 EUR</h6>
											</div>
											<div className="col-md-3 text-left text-md-center dark-gray">
												<span className="row-title d-inline d-md-none">Amount: </span><strong>-</strong>
											</div>
											<div className="col-md-3 text-left text-md-center dark-gray">
												<span className="row-title d-inline d-md-none">Status: </span><strong>Available Bonus</strong>
											</div>
											<div className="col-md-1 accordion_head "> */}
											{/* <button  onClick={function(){this.setState({accordian:!this.state.accordian})}.bind(this)}  className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
												</button> */}
												{/* <button  onClick={function(){this.setState({accordian:!this.state.accordian})}.bind(this)}  className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
												</button>
											</div>
										</div>
									</h5>
								</div>

								
								<div id="collapseTwo" className=" collapse show" aria-labelledby="headingTwo" >
									<div  className="card-body accordion_body">
										
										<div className="blue-bg px-3"><strong>Starting Date:</strong> 05/06/2019 05:30 &nbsp; | &nbsp; <strong>Ending Date:</strong> 01/12/2021 05:30</div>
										<div className="clearfix pt-3">	
											<div className="float-left"><strong>Wagered:</strong> 0 USD</div> <div class="float-right"><strong>Remaining:</strong> 0 USD</div>
										</div>
										<hr/>
										<div className="row mx-1">
											<div className="col-md-4 light-gray-bg d-none d-md-flex">
												<strong>Time to Wager</strong>
											</div>
											<div className="col-md-4 light-gray-bg d-none d-md-flex">
												<strong>Wagering Req</strong>
											</div>
											<div className="col-md-4 light-gray-bg d-none d-md-flex">
												<strong>Min/Max Deposit</strong>
											</div>
											<div className="col-md-4">
												<span className="row-title d-inline d-md-none">Time to Wager: </span>30 days
											</div>
											<div class="col-md-4">
												<span className="row-title d-inline d-md-none">Wagering Req: </span>35x
											</div>
											<div className="col-md-4">
												<span className="row-title d-inline d-md-none">Min/Max Deposit: </span>10 USD / 100 USD
											</div>
										</div>
										<hr/>
										</div>
										<div className="clearfix pt-3">	
											<div className="float-left">
												<button className="btn btn-light small mt-0 mr-5" type="submit">Claim Bonus</button>
											</div>
											<div className="float-left pt-3">
												<p>Make your first deposit and the bonus will be activated automatically. 100 Free Spins on Starburst will be distributed over 5 days. Good luck.</p>
											</div>
										</div> 
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> */}
			<div className="accordion bonuses" id="accordionExample1">
							<div className="cards mt-2">
								<div className="card-header" id="headingOne">
									<h5 className="mb-0">
										<div className="row">
											<div className="col-md-5">
												<h6>100% First Deposit Bonus up to 100 EUR</h6>
											</div>
											<div className="col-md-3 text-left text-md-center dark-gray">
												<span className="row-title d-inline d-md-none">Amount: </span><strong>-</strong>
											</div>
											<div className="col-md-3 text-left text-md-center dark-gray">
												<span className="row-title d-inline d-md-none">Status: </span><strong>Available Bonus</strong>
											</div>
											<div className="col-md-1 ">
												<button className="btn btn-link accordion_head " type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
												</button>
											</div>
										</div>
									</h5>
								</div>
								<div id="collapseOne " className="accordian_body" aria-labelledby="headingOne" data-parent="#accordionExample1">
									<div className="card-body accordion_body ">
										<div className="blue-bg px-3"><strong>Starting Date:</strong> 05/06/2019 05:30 &nbsp; | &nbsp; <strong>Ending Date:</strong> 01/12/2021 05:30</div>
										<div className="clearfix pt-3">	
											<div className="float-left"><strong>Wagered:</strong> 0 USD</div> <div class="float-right"><strong>Remaining:</strong> 0 USD</div>
										</div>
										<hr/>
										<div className="row mx-1">
											<div className="col-md-4 light-gray-bg d-none d-md-flex">
												<strong>Time to Wager</strong>
											</div>
											<div className="col-md-4 light-gray-bg d-none d-md-flex">
												<strong>Wagering Req</strong>
											</div>
											<div className="col-md-4 light-gray-bg d-none d-md-flex">
												<strong>Min/Max Deposit</strong>
											</div>
											<div className="col-md-4">
												<span className="row-title d-inline d-md-none">Time to Wager: </span>30 days
											</div>
											<div className="col-md-4">
												<span className="row-title d-inline d-md-none">Wagering Req: </span>35x
											</div>
											<div className="col-md-4">
												<span className="row-title d-inline d-md-none">Min/Max Deposit: </span>10 USD / 100 USD
											</div>
										</div>
										<hr/>
										<div className="clearfix pt-3">	
											<div className="float-left">
												<button className="btn btn-light small mt-0 mr-5" type="submit">Claim Bonus</button>
											</div>
											<div className="float-left pt-3">
												<p>Make your first deposit and the bonus will be activated automatically. 100 Free Spins on Starburst will be distributed over 5 days. Good luck.</p>
											</div>
										</div>		
									</div>
								</div>
							</div>
							<div className="cards mt-2">
								<div className="card-header" id="headingTwo">
									<h5 className="mb-0">
										<div className="row">
											<div className="col-md-5">
												<h6>100% First Deposit Bonus up to 100 EUR</h6>
											</div>
											<div className="col-md-3 text-left text-md-center dark-gray">
												<span className="row-title d-inline d-md-none">Amount: </span><strong>-</strong>
											</div>
											<div className="col-md-3 text-left text-md-center dark-gray">
												<span className="row-title d-inline d-md-none">Status: </span><strong>Available Bonus</strong>
											</div>
											<div className="col-md-1">
												<button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
												</button>
											</div>
										</div>
									</h5>
								</div>
								<div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample1">
									<div className="card-body">
										<div className="blue-bg px-3"><strong>Starting Date:</strong> 05/06/2019 05:30 &nbsp; | &nbsp; <strong>Ending Date:</strong> 01/12/2021 05:30</div>
										<div className="clearfix pt-3">	
											<div className="float-left"><strong>Wagered:</strong> 0 USD</div> <div class="float-right"><strong>Remaining:</strong> 0 USD</div>
										</div>
										<hr/>
										<div className="row mx-1">
											<div className="col-md-4 light-gray-bg d-none d-md-flex">
												<strong>Time to Wager</strong>
											</div>
											<div className="col-md-4 light-gray-bg d-none d-md-flex">
												<strong>Wagering Req</strong>
											</div>
											<div className="col-md-4 light-gray-bg d-none d-md-flex">
												<strong>Min/Max Deposit</strong>
											</div>
											<div className="col-md-4">
												<span className="row-title d-inline d-md-none">Time to Wager: </span>30 days
											</div>
											<div className="col-md-4">
												<span className="row-title d-inline d-md-none">Wagering Req: </span>35x
											</div>
											<div className="col-md-4">
												<span className="row-title d-inline d-md-none">Min/Max Deposit: </span>10 USD / 100 USD
											</div>
										</div>
										<hr/>
										<div className="clearfix pt-3">	
											<div className="float-left">
												<button className="btn btn-light small mt-0 mr-5" type="submit">Claim Bonus</button>
											</div>
											<div className="float-left pt-3">
												<p>Make your first deposit and the bonus will be activated automatically. 100 Free Spins on Starburst will be distributed over 5 days. Good luck.</p>
											</div>
										</div>
									</div>
								</div>
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
