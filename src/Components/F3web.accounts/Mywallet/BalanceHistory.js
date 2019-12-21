import React, { Component } from 'react'
import $ from 'jquery'
import {Link}from 'react-router-dom'
import '../accounts.css'
import axios from 'axios'
import SideNav from '../ACC_subComponents/SideNav'
import NavBar from '../ACC_subComponents/NavBar'
import Footer from '../ACC_subComponents/Footer'

export default class BalanceHistory extends Component {

    constructor(props) {
        super(props);
        this.state = {
          open: false,
          wallet:false
        }
		
      }



    render() {
        return (
            <div>
                



                <div class="container-fluid">
			<div class="row d-flex">
				<SideNav/>
				<div class="col-md-9 px-0">
					<NavBar/>
					<div class="gray-bg">
						<div class="container-fluid px-3 py-3">
							<nav class="navbar navbar-expand-lg inner text-center text-md-left">
								<div id="navbarText" class="mx-auto mx-md-0">
									<ul class="navbar-nav mr-auto">
                                    <li class="nav-item">
											{/* <a class="nav-link active" href="deposit.html">Deposit</a> */}
                                            <Link  class="nav-link "  Link to={'/Deposit'}>Deposit</Link>
										</li>
										<li class="nav-item">
											{/* <a class="nav-link" href="withdraw.html">Withdraw</a> */}
                                            <Link   class="nav-link" Link to={'/WithDraw'}>Withdraw</Link>
										</li>
										<li class="nav-item">
											{/* <a class="nav-link" href="balance-history.html">Balance History</a> */}
                                            <Link  class="nav-link  active"  Link to={'/BalanceHistory'}>Balance History</Link>
										</li>
									</ul>
								</div>
							</nav>
						</div>
					</div>
					<div class="pt-3 pt-md-5">
						<h1 class="inner">Balance History</h1>
						<div class="blue-bg px-3 py-3">
							<div class="row clearfix">
								<form class="form-inline">
									<div class="col-md-3">
										<label for="">Type</label>
										<input type="text" class="form-control" placeholder="All"/>
									</div>
									<div class="col-md-5">	
										<label for="">Range</label>
										<input type="text" class="form-control" placeholder="10/07/2019"/>
                                         <span class="px-4">-</span>
                                          <input type="text" class="form-control" placeholder="10/07/2019"/>
									</div>
									<div class="col-md-1">
										<button type="submit" class="reload"></button>
									</div>	
								</form>
							</div>	
						</div>
						<div class="container-fluid">
							<div class="row clearfix darkest-gray-bg d-none d-md-flex">
								<div class="col-md-8">
								
								</div>
								<div class="col-md-2 row-title">Stake</div>
								<div class="col-md-2 row-title">Returns</div>
							</div>
							<div class="row clearfix">
								<div class="col-md-8 px-3 py-3">
									<h6>Name goes here</h6>
									<span class="smallest light-gray d-block">15 July 2019, 12:00pm</span>
									<span class="smallest orange text-uppercase d-block pt-4">Single</span>
								</div>
								<div class="col-md-2 text-left text-md-center my-0 my-md-4 px-3 py-0 py-md-3 dark-gray">
									<span class="row-title d-inline d-md-none">Stake: </span><strong>2000 INR</strong>
								</div>
								<div class="col-md-2 text-left text-md-center my-0 my-md-4 px-3 py-0 py-md-3 dark-gray">
									<span class="row-title d-inline d-md-none">Returns: </span><strong>10000 INR</strong>
								</div>
							</div>
							<div class="row clearfix lighest-gray-bg">
								<div class="col-md-8 px-3 py-3">
									<h6>Name goes here</h6>
									<span class="smallest light-gray d-block">15 July 2019, 12:00pm</span>
									<span class="smallest orange text-uppercase d-block pt-4">Single</span>
								</div>
								<div class="col-md-2 text-left text-md-center my-0 my-md-4 px-3 py-0 py-md-3 dark-gray">
									<span class="row-title d-inline d-md-none">Stake: </span><strong>2000 INR</strong>
								</div>
								<div class="col-md-2 text-left text-md-center my-0 my-md-4 px-3 py-0 py-md-3 dark-gray">
									<span class="row-title d-inline d-md-none">Returns: </span><strong>10000 INR</strong>
								</div>
							</div>
							<div class="row clearfix">
								<div class="col-md-8 px-3 py-3">
									<h6>Name goes here</h6>
									<span class="smallest light-gray d-block">15 July 2019, 12:00pm</span>
									<span class="smallest orange text-uppercase d-block pt-4">Single</span>
								</div>
								<div class="col-md-2 text-left text-md-center my-0 my-md-4 px-3 py-0 py-md-3 dark-gray">
									<span class="row-title d-inline d-md-none">Stake: </span><strong>2000 INR</strong>
								</div>
								<div class="col-md-2 text-left text-md-center my-0 my-md-4 px-3 py-0 py-md-3 dark-gray">
									<span class="row-title d-inline d-md-none">Returns: </span><strong>10000 INR</strong>
								</div>
							</div>
							<div class="row clearfix lighest-gray-bg">
								<div class="col-md-8 px-3 py-3">
									<h6>Name goes here</h6>
									<span class="smallest light-gray d-block">15 July 2019, 12:00pm</span>
									<span class="smallest orange text-uppercase d-block pt-4">Single</span>
								</div>
								<div class="col-md-2 text-left text-md-center my-0 my-md-4 px-3 py-0 py-md-3 dark-gray">
									<span class="row-title d-inline d-md-none">Stake: </span><strong>2000 INR</strong>
								</div>
								<div class="col-md-2 text-left text-md-center my-0 my-md-4 px-3 py-0 py-md-3 dark-gray">
									<span class="row-title d-inline d-md-none">Returns: </span><strong>10000 INR</strong>
								</div>
							</div>
							<div class="row clearfix">
								<div class="col-md-8 px-3 py-3">
									<h6>Name goes here</h6>
									<span class="smallest light-gray d-block">15 July 2019, 12:00pm</span>
									<span class="smallest orange text-uppercase d-block pt-4">Single</span>
								</div>
								<div class="col-md-2 text-left text-md-center my-0 my-md-4 px-3 py-0 py-md-3 dark-gray">
									<span class="row-title d-inline d-md-none">Stake: </span><strong>2000 INR</strong>
								</div>
								<div class="col-md-2 text-left text-md-center my-0 my-md-4 px-3 py-0 py-md-3 dark-gray">
									<span class="row-title d-inline d-md-none">Returns: </span><strong>10000 INR</strong>
								</div>
							</div>
							<div class="row clearfix lighest-gray-bg">
								<div class="col-md-8 px-3 py-3">
									<h6>Name goes here</h6>
									<span class="smallest light-gray d-block">15 July 2019, 12:00pm</span>
									<span class="smallest orange text-uppercase d-block pt-4">Single</span>
								</div>
								<div class="col-md-2 text-left text-md-center my-0 my-md-4 px-3 py-0 py-md-3 dark-gray">
									<span class="row-title d-inline d-md-none">Stake: </span><strong>2000 INR</strong>
								</div>
								<div class="col-md-2 text-left text-md-center my-0 my-md-4 px-3 py-0 py-md-3 dark-gray">
									<span class="row-title d-inline d-md-none">Returns: </span><strong>10000 INR</strong>
								</div>
							</div>
							<div class="row clearfix">
								<div class="col-md-8 px-3 py-3">
									<h6>Name goes here</h6>
									<span class="smallest light-gray d-block">15 July 2019, 12:00pm</span>
									<span class="smallest orange text-uppercase d-block pt-4">Single</span>
								</div>
								<div class="col-md-2 text-left text-md-center my-0 my-md-4 px-3 py-0 py-md-3 dark-gray">
									<span class="row-title d-inline d-md-none">Stake: </span><strong>2000 INR</strong>
								</div>
								<div class="col-md-2 text-left text-md-center my-0 my-md-4 px-3 py-0 py-md-3 dark-gray">
									<span class="row-title d-inline d-md-none">Returns: </span><strong>10000 INR</strong>
								</div>
							</div>
							<div class="row clearfix darkest-gray-bg px-2 py-2 px-md-4 py-md-4 pagination">
								<div class="col-3 col-md-4 px-0">
									<a href="#" class="prev">Prev</a>
								</div>
								<div class="col-6 col-md-4 text-center px-0">
									<ul>
										<li><a href="#" class="active">1</a></li>
										<li><a href="#">2</a></li>
										<li><a href="#">3</a></li>
										<li><a href="#">4</a></li>
									</ul>	
								</div>
								<div class="col-3 col-md-4 px-0 text-right">
									<a href="#" class="next">Next</a>
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
