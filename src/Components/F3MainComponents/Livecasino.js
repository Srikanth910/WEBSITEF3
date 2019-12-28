import React, { Component, } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';




import Modelpopup from './HocModel/Modelpopup';
import Footer from './SubCompoents/Footer';
import Auth from '../ServerApi/Auth';
import LoginButton from './SubCompoents/LoginButton';


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


	// handleUrl = () => {
	// 	window.open("http://localhost:3000");


	// }


	handleLivecasino = () => {
		console.log('lovecasino')
	}

	render() {

		return (

			<div>

				<header class="mt-2 mt-sm-4 fixed-top">
					<div class="container-fluid px-0 text-center">
						{/* <Link Link to={"#"} role="button" class="sign-in" data-toggle="modal" onClick={this.props.showmodel} data-target="#exampleModalCenter">Sign In / Register</Link> */}
						{/* <FormModel open={this.state.modalopen} close={this.closeModal}/> */}

						<LoginButton/>

						{/* {Auth.getAuth() === false &&

							<Link to="" role="button" class="sign-in" data-toggle="modal" onClick={this.props.showmodel} data-target="#exampleModalCenter">Sign In / Register</Link>}

						{Auth.getAuth() === true &&
							<Link to="" role="button" class="sign-in" data-toggle="modal" data-target="#exampleModalCenter">Logout</Link>} */}


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

										<Link className="nav-link  active" Link to={'/LiveCasino'} onClick={this.handleLivecasino}>Live Casino</Link>
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


				<section className="block dark-blue-bg">
					<h1 className="h1">Lobby arena</h1>
					<div className="darkest-blue-bg px-5 py-5 text-center">
						<div className="balance-btn">
							<span>Balance</span>
							$ 382,34,583
				</div>
					</div>
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
									<img src={process.env.PUBLIC_URL + "/host_g1..png"} className="img-fluid" alt="..." />
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

				<Footer />



			</div>


		)
	}
}

export default LiveCasino;

