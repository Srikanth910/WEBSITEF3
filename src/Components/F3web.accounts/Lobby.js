import React, { Component } from 'react'

import {Link} from 'react-router-dom'


import $ from 'jquery'

import NavBar from './ACC_subComponents/NavBar'
import SideNav from './ACC_subComponents/SideNav'
import Footer from './ACC_subComponents/Footer'
export default class Lobby extends Component {

  handleUrl=()=>{
		window.open("http://localhost:3000");
		
		
	}

    componentDidMount(){
        $(function () {
            'use strict'
          
            $('[data-toggle="offcanvas"]').on('click', function () {
              $('.offcanvas-collapse1').toggleClass('open')
            })
          })
    }


    render() {
        return (
            <div>
          
            <div className="container-fluid">
			<div className="row d-flex">
				<SideNav/>
				<div className="col-12 col-lg-9 px-0 bg " >
				<NavBar/>
           
				<section className="block ">
			
					<div className="container mt-5">
						<div className="row">
							<div className="col-md-4 px-3 mb-5">
								<div className="lobby">
									<img src={process.env.PUBLIC_URL + "/host_g1..png"} className="img-fluid" alt="..." />
									<div className="price">$10</div>
									<span className="dice"></span>
									<a href="#" className="overlay" onClick={this.handleUrl}>
										Play Now!
							</a>
								</div>

								<div className="green-bg px-2 py-2">
									<div className="row">
										<div className="col-8 col-md-8 black position-relative">
											<span className="flag"><img src={process.env.PUBLIC_URL + "/flag-1.png"} alt="" className="img-fluid" /></span>
											<span className="lobby-title">AMANDA PERRY</span>
										</div>
										<div className="col-4 col-md-4 blue">
											<span className="players">17652</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 px-3 mb-5">
								<div className="lobby">
									<img src={process.env.PUBLIC_URL + "/host_g2.png"} className="img-fluid" alt="..." />
									<div className="price">$10</div>
									<span className="dice"></span>
									<a href="#" className="overlay" onClick={this.handleUrl}>
										Play Now!
							</a>
								</div>
								<div className="green-bg px-2 py-2">
									<div className="row">
										<div className="col-8 col-md-8 black position-relative">
											<span className="flag"><img src={process.env.PUBLIC_URL + "/flag-1.png"} alt="" className="img-fluid" /></span>
											<span className="lobby-title">AMANDA PERRY</span>
										</div>
										<div className="col-4 col-md-4 blue">
											<span className="players">17652</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 px-3 mb-5">
								<div className="lobby">
									<img src={process.env.PUBLIC_URL + "/host_g3.png"} className="img-fluid" alt="..." />
									<div className="price">$10</div>
									<span className="dice"></span>
									<a href="#" className="overlay" onClick={this.handleUrl} >
										Play Now!
							</a>
								</div>
								<div className="green-bg px-2 py-2">
									<div className="row">
										<div className="col-8 col-md-8 black position-relative">
											<span className="flag"><img src={process.env.PUBLIC_URL + "/flag-1.png"} alt="" className="img-fluid" /></span>
											<span className="lobby-title">AMANDA PERRY</span>
										</div>
										<div className="col-4 col-md-4 blue">
											<span className="players">17652</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 px-3 mb-5">
								<div className="lobby">
									<img src={process.env.PUBLIC_URL + "/host_g4.png"} className="img-fluid" alt="..." />
									<div className="price">$10</div>
									<span className="dice"></span>
									<a href="#" className="overlay" onClick={this.handleUrl}>
										Play Now!
							</a>
								</div>
								<div className="green-bg px-2 py-2">
									<div className="row">
										<div className="col-8 col-md-8 black position-relative">

											<span className="flag"><img src={process.env.PUBLIC_URL + "/flag-1.png"} alt="" className="img-fluid" /></span>
											<span className="lobby-title">AMANDA PERRY</span>
										</div>
										<div className="col-4 col-md-4 blue">
											<span className="players">17652</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>


                            </div>

                            </div>
							
            </div>
            <Footer/>
            </div>
        )
    }
}
