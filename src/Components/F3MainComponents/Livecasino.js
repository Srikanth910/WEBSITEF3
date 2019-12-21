import React, { Component,  } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';




import Modelpopup from './HocModel/Modelpopup';
import Footer from './SubCompoents/Footer';


 class LiveCasino extends Component {




	constructor(props) {
		super(props)

		this.state = {
			setShow: false,

			Name: 'Login',
			
		




			}


		
		
	}

  

	// getInitialState() {
	// 	return { show: false };
	// }

	// render() {
	// 	let close = () => {
	// 		console.log('hiding');
	// 		this.setState({ show: false });
	// 	}
	// }
	// getInitialState() {
	// 	return {
	// 		showModal: false,


	// 	};
	// }
	// modelclose = () => {
	// 	this.setState({
	// 		show: false
	// 	})
	// }



	// close = () => {
	// 	this.setState({
	// 		showModal: false,
	// 		setShow: false

	// 	});
	// }

	
	// openModal=(e)=> {   
	// 	console.log('hello')
	// 	 e.preventDefault();
	// 	 this.setState({modalopen: true});
	//    }
 
	//  closeModal=(e)=> {
		
		 
	// 	 this.setState({modalopen: false});
	//    }

	componentDidMount() {
	
		$(function () {
			'use strict'

			$('[data-toggle="offcanvas"]').on('click', function () {
				$('.offcanvas-collapse1').toggleClass('open')
			})
		})
	}
	// handlelink=()=>{
	// 	window.open("http://localhost:3000")
		
		
	// }

	
	handleUrl=()=>{
		window.open("http://localhost:3000");
		
		
	}
	
	render() {
		
		return (

			<div>
		
				 <header class="mt-2 mt-sm-4 fixed-top">
					<div class="container-fluid px-0 text-center">
						<Link Link to={"#"} role="button" class="sign-in" data-toggle="modal" onClick={this.props.showmodel} data-target="#exampleModalCenter">Sign In / Register</Link>
						{/* <FormModel open={this.state.modalopen} close={this.closeModal}/> */}
						<nav class="navbar navbar-expand-lg orange-bg mt-4 mt-md-5">
							<Link Link to={'/'} className="navbar-brand">
								<img src={process.env.PUBLIC_URL + "/logo.png"} className="d-none d-sm-none d-md-block" alt="Fantastic 3" />
								<img src={process.env.PUBLIC_URL + "/logo-m.png"} className="d-block d-sm-none" alt="Fantastic 3" />

							</Link>
							<button className="navbar-toggler" type="button" data-toggle="offcanvas">
								<span className="navbar-toggler-icon"></span>
							</button>
							<div class="navbar-collapse offcanvas-collapse1" id="collapsingNavbar">
								<ul class="navbar-nav mr-5 ml-auto">
									<li className="nav-item active">
										<Link className="nav-link " Link to={'/'}>Home</Link>
									</li>
									<li className="nav-item">

										<Link className="nav-link " Link to={'/About'}>About Us</Link>
									</li>
								</ul>
								<ul className="navbar-nav ml-5 mr-auto">
									<li className="nav-item">

										<Link className="nav-link  active" Link to={'/LiveCasino'}>Live Casino</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link " Link to={'/FAQ'}>Faq</Link>
									</li>

								</ul>
							</div>
						</nav>
					</div>
				</header> 

				{/* <Navbar/> */}

				{/* model */}


{/* 
				<Modal
					centered
					show={this.state.showModal}
					onHide={this.close}
				>

                      
				</Modal> */}
				<div id="carouselExampleIndicators" class="carousel inner slide" data-ride="carousel">
					<div className="carousel-inner">
						<div className="carousel-item active text-center">

						</div>
					</div>
				</div>

				
		<section class="block dark-blue-bg">
			<h1 class="h1">Lobby arena</h1>
			<div class="darkest-blue-bg px-5 py-5 text-center">
				<div class="balance-btn">
					<span>Balance</span>
					$ 382,34,583
				</div>
			</div>
			<div class="container mt-5">
				<div class="row">
					<div class="col-md-4 px-3 mb-5">
						<div class="lobby">
						<img src={process.env.PUBLIC_URL + "/host_g1..png"} class="img-fluid" alt="..." />
							<div class="price">$10</div>
							<span class="dice"></span>
							<a href="#" class="overlay" onClick={this.handleUrl}>
								Play Now!
							</a>
						</div>	
						<div class="green-bg px-2 py-2">
							<div class="row">
								<div class="col-8 col-md-8 black position-relative">
									<span class="flag"><img src={process.env.PUBLIC_URL + "/flag-1.png"} alt="" class="img-fluid"/></span>
									<span class="lobby-title">AMANDA PERRY</span>
								</div>
								<div class="col-4 col-md-4 blue">
									<span class="players">17652</span>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-4 px-3 mb-5">
						<div class="lobby">
						<img src={process.env.PUBLIC_URL + "/host_g1..png"} class="img-fluid" alt="..." />
							<div class="price">$10</div>
							<span class="dice"></span>
							<a href="#" class="overlay" onClick={this.handleUrl}>
								Play Now!
							</a>
						</div>	
						<div class="green-bg px-2 py-2">
							<div class="row">
								<div class="col-8 col-md-8 black position-relative">
									<span class="flag"><img src={process.env.PUBLIC_URL + "/flag-1.png"} alt="" class="img-fluid"/></span>
									<span class="lobby-title">AMANDA PERRY</span>
								</div>
								<div class="col-4 col-md-4 blue">
									<span class="players">17652</span>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-4 px-3 mb-5">
						<div class="lobby">
						<img src={process.env.PUBLIC_URL + "/host_g1..png"} class="img-fluid" alt="..." />
							<div class="price">$10</div>
							<span class="dice"></span>
							<a href="#" class="overlay" onClick={this.handleUrl} >
								Play Now!
							</a>
						</div>	
						<div class="green-bg px-2 py-2">
							<div class="row">
								<div class="col-8 col-md-8 black position-relative">
									<span class="flag"><img src={process.env.PUBLIC_URL + "/flag-1.png"} alt="" class="img-fluid"/></span>
									<span class="lobby-title">AMANDA PERRY</span>
								</div>
								<div class="col-4 col-md-4 blue">
									<span class="players">17652</span>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-4 px-3 mb-5">
						<div class="lobby">
						<img src={process.env.PUBLIC_URL + "/host_g1..png"} class="img-fluid" alt="..." />
							<div class="price">$10</div>
							<span class="dice"></span>
							<a href="#"  class="overlay" onClick={this.handleUrl}>
								Play Now!
							</a>
						</div>	
						<div class="green-bg px-2 py-2">
							<div class="row">
								<div class="col-8 col-md-8 black position-relative">
									
									<span class="flag"><img src={process.env.PUBLIC_URL + "/flag-1.png"} alt="" class="img-fluid"/></span>
									<span class="lobby-title">AMANDA PERRY</span>
								</div>
								<div class="col-4 col-md-4 blue">
									<span class="players">17652</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		

				<section className="px-3 py-3 px-sm-5 py-sm-5 green-bg">
					<div className="container">
						<div className="row">
							<div className="col-12 col-md-6"><h1 className="black">Live Dealer Game</h1></div>
							<div className="col-12 col-md-6 text-center"><Link className="btn-block" Link to={'/Deposit'}>Deposit</Link></div>
						</div>
					</div>
				</section>

				<Footer/>

              
			
			</div>


		)
	}
}

 export default   Modelpopup(LiveCasino)

 