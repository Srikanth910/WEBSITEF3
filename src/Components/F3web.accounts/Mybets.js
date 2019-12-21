import React, { Component } from 'react'
import {Link} from 'react-router-dom'
 import $  from 'jquery'
 import axios from 'axios'
import SideNav from './ACC_subComponents/SideNav';
import NavBar from './ACC_subComponents/NavBar';
import Footer from './ACC_subComponents/Footer';


export default class Mybets extends Component {
    constructor(props) {
        super(props);
        this.state = {
          open: false,
          wallet:false
        }
		this._toggleprofile = this._toggleprofile.bind(this)
		this._toggleWallet = this._toggleWallet.bind(this)
      }


	  _toggleprofile () {
		
		$(this.refs['toggle-profile']).slideToggle()
		
	  }
	  _toggleWallet () {
		$(this.refs['toggle-Wallet']).slideToggle()
	  }
    componentDidMount(){
        $(function () {
            'use strict'
          
            $('[data-toggle="offcanvas"]').on('click', function () {
              $('.offcanvas-collapse').toggleClass('open')
            })
          })

          $(document).ready(function(){
            $('[data-toggle=offcanvas]').click(function() {
                $('.row-offcanvas').toggleClass('active');
                //$('.collapse').toggleClass('in').toggleClass('hidden-xs').toggleClass('visible-xs');
            });
		});
		$(document).ready(function(){
			$('.slide').hide();
		 });
		 
	}
	
    render() {
        return (
            <div>
             <div className="container-fluid">
			<div className="row d-flex">
				<SideNav/>
				<div className="col-md-9 px-0">
					<NavBar/>
					<div className="pt-3 pt-md-5">
						<h1 className="inner">My Bets</h1>
						<div className="blue-bg px-3 py-3">
							<div className="row clearfix">
								<form className="form-inline">
								<div className="col-md-3">
										<label for="">Bet Type</label>
										<input type="text" class="form-control" placeholder="All"/>
									</div>	
									<div clclassNameass="col-md-3">
										<label for="">Result</label>
										<input type="text" className="form-control" placeholder="All"/>
									</div>
									<div className="col-md-5">	
										<label for="">Range</label>
										<input type="text" className="form-control" placeholder="10/07/2019"/> 
                                         <span class="px-4">-</span> <input type="text" class="form-control" placeholder="10/07/2019"/>
									</div>
									<div className="col-md-1">
										<button type="submit" class="reload"></button>
									</div>	
								</form>
							</div>	
						</div>
						<div className="container-fluid">
							<div className="row clearfix darkest-gray-bg d-none d-md-flex">
								<div className="col-md-6">
								
								</div>
								<div className="col-md-2 row-title">Stake</div>
								<div className="col-md-2 row-title">Returns</div>
								<div className="col-md-2 row-title">Result</div>
							</div>
							<div className="row clearfix">
								<div className="col-md-6 px-3 py-3">
									<h6>Name goes here</h6>
									<span className="smallest light-gray d-block">Bet Placed: 15 July 2019, 12:00pm</span>
									<span className="smallest orange text-uppercase d-block pt-4">Single</span>
								</div>
								<div className="col-md-2 text-left text-md-center my-0 my-md-4 px-3 py-0 py-md-3 dark-gray">
									<span className="row-title d-inline d-md-none">Stake: </span><strong>2000 INR</strong>
								</div>
								<div className="col-md-2 text-left text-md-center my-0 my-md-4 px-3 py-0 py-md-3 dark-gray">
									<span className="row-title d-inline d-md-none">Returns: </span><strong>10000 INR</strong>
								</div>
								<div className="col-md-2 text-left text-md-center my-0 my-md-4 px-3 py-0 pb-3 py-md-3 success">
									<span className="row-title d-inline d-md-none">Result: </span>won
								</div>
							</div>
							<div className="row clearfix lighest-gray-bg">
								<div className="col-md-6 px-3 py-3">
									<h6>Name goes here</h6>
									<span className="smallest light-gray d-block">Bet Placed: 15 July 2019, 12:00pm</span>
									<span className="smallest orange text-uppercase d-block pt-4">Single</span>
								</div>
								<div className="col-md-2 text-left text-md-center my-0 my-md-4 px-3 py-0 py-md-3 dark-gray">
									<span className="row-title d-inline d-md-none">Stake: </span><strong>2000 INR</strong>
								</div>
								<div className="col-md-2 text-left text-md-center my-0 my-md-4 px-3 py-0 py-md-3 dark-gray">
									<span className="row-title d-inline d-md-none">Returns: </span><strong>10000 INR</strong>
								</div>
								<div className="col-md-2 text-left text-md-center my-0 my-md-4 px-3 py-0 pb-3 py-md-3 success">
									<span className="row-title d-inline d-md-none">Result: </span>won
								</div>
							</div>
							<div className="row clearfix">
								<div className="col-md-6 px-3 py-3">
									<h6>Name goes here</h6>
									<span className="smallest light-gray d-block">Bet Placed: 15 July 2019, 12:00pm</span>
									<span className="smallest orange text-uppercase d-block pt-4">Single</span>
								</div>
								<div className="col-md-2 text-left text-md-center my-0 my-md-4 px-3 py-0 py-md-3 dark-gray">
									<span className="row-title d-inline d-md-none">Stake: </span><strong>2000 INR</strong>
								</div>
								<div className="col-md-2 text-left text-md-center my-0 my-md-4 px-3 py-0 py-md-3 dark-gray">
									<span className="row-title d-inline d-md-none">Returns: </span><strong>10000 INR</strong>
								</div>
								<div className="col-md-2 text-left text-md-center my-0 my-md-4 px-3 py-0 pb-3 py-md-3 success">
									<span className="row-title d-inline d-md-none">Result: </span>won
								</div>
							</div>
							<div className="row clearfix lighest-gray-bg">
								<div className="col-md-6 px-3 py-3">
									<h6>Name goes here</h6>
									<span className="smallest light-gray d-block">Bet Placed: 15 July 2019, 12:00pm</span>
									<span className="smallest orange text-uppercase d-block pt-4">Single</span>
								</div>
								<div className="col-md-2 text-left text-md-center my-0 my-md-4 px-3 py-0 py-md-3 dark-gray">
									<span className="row-title d-inline d-md-none">Stake: </span><strong>2000 INR</strong>
								</div>
								<div className="col-md-2 text-left text-md-center my-0 my-md-4 px-3 py-0 py-md-3 dark-gray">
									<span className="row-title d-inline d-md-none">Returns: </span><strong>10000 INR</strong>
								</div>
								<div className="col-md-2 text-left text-md-center my-0 my-md-4 px-3 py-0 pb-3 py-md-3 success">
									<span className="row-title d-inline d-md-none">Result: </span>won
								</div>
							</div>
							<div className="row clearfix">
								<div className="col-md-6 px-3 py-3">
									<h6>Name goes here</h6>
									<span className="smallest light-gray d-block">Bet Placed: 15 July 2019, 12:00pm</span>
									<span className="smallest orange text-uppercase d-block pt-4">Single</span>
								</div>
								<div className="col-md-2 text-left text-md-center my-0 my-md-4 px-3 py-0 py-md-3 dark-gray">
									<span className="row-title d-inline d-md-none">Stake: </span><strong>2000 INR</strong>
								</div>
								<div className="col-md-2 text-left text-md-center my-0 my-md-4 px-3 py-0 py-md-3 dark-gray">
									<span className="row-title d-inline d-md-none">Returns: </span><strong>10000 INR</strong>
								</div>
								<div className="col-md-2 text-left text-md-center my-0 my-md-4 px-3 py-0 pb-3 py-md-3 success">
									<span className="row-title d-inline d-md-none">Result: </span>won
								</div>
							</div>
							<div className="row clearfix lighest-gray-bg">
								<div className="col-md-6 px-3 py-3">
									<h6>Name goes here</h6>
									<span className="smallest light-gray d-block">Bet Placed: 15 July 2019, 12:00pm</span>
									<span className="smallest orange text-uppercase d-block pt-4">Single</span>
								</div>
								<div className="col-md-2 text-left text-md-center my-0 my-md-4 px-3 py-0 py-md-3 dark-gray">
									<span className="row-title d-inline d-md-none">Stake: </span><strong>2000 INR</strong>
								</div>
								<div className="col-md-2 text-left text-md-center my-0 my-md-4 px-3 py-0 py-md-3 dark-gray">
									<span className="row-title d-inline d-md-none">Returns: </span><strong>10000 INR</strong>
								</div>
								<div className="col-md-2 text-left text-md-center my-0 my-md-4 px-3 py-0 pb-3 py-md-3 success">
									<span className="row-title d-inline d-md-none">Result: </span>won
								</div>
							</div>
							<div className="row clearfix">
								<div className="col-md-6 px-3 py-3">
									<h6>Name goes here</h6>
									<span className="smallest light-gray d-block">Bet Placed: 15 July 2019, 12:00pm</span>
									<span className="smallest orange text-uppercase d-block pt-4">Single</span>
								</div>
								<div className="col-md-2 text-left text-md-center my-0 my-md-4 px-3 py-0 py-md-3 dark-gray">
									<span className="row-title d-inline d-md-none">Stake: </span><strong>2000 INR</strong>
								</div>
								<div className="col-md-2 text-left text-md-center my-0 my-md-4 px-3 py-0 py-md-3 dark-gray">
									<span className="row-title d-inline d-md-none">Returns: </span><strong>10000 INR</strong>
								</div>
								<div className="col-md-2 text-left text-md-center my-0 my-md-4 px-3 py-0 pb-3 py-md-3 success">
									<span className="row-title d-inline d-md-none">Result: </span>won
								</div>
							</div>
							<div className="row clearfix darkest-gray-bg px-2 py-2 px-md-4 py-md-4 pagination">
								<div className="col-3 col-md-4 px-0">
									<a href="#" className="prev">Prev</a>
								</div>
								<div className="col-6 col-md-4 text-center px-0">
									<ul>
										<li><a href="#" class="active">1</a></li>
										<li><a href="#">2</a></li>
										<li><a href="#">3</a></li>
										<li><a href="#">4</a></li>
									</ul>	
								</div>
								<div className="col-3 col-md-4 px-0 text-right">
									<a href="#" className="next">Next</a>
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
