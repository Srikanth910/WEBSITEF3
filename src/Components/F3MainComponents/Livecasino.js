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

				<section className="block dark-blue-bg">
					<div className="container-fluid">
						<h1 className="h1">Live Casino</h1>
						<div>



							{/* <!-- Place this code where you'd like the game to appear --> */}
							<div className="miniclip-game-embed" data-game-name="8-ball-pool-multiplayer" data-theme="5" data-width="100%" data-height="680" data-language="en">
								{/* <a onClick={() => this.setState({ show: true })} href="#">Play 8 Ball Pool</a> */}
                              
  
                  <Link to={'/Lobby'}  onClick={this.handlelink} >
								<button   class="btn btn-primary"  type="submit">play</button>
								</Link>
							
								{/* <button  onClick={this.props.openModal} class="btn btn-primary"  type="submit">play</button> */}
							</div>

                        {/* <Game  open={this.state.modalIsOpen} /> */}
							{/* <!-- Insert this code before your </body> tag --> */}
							<script src="//static.miniclipcdn.com/js/game-embed.js"></script>
                     {/* <Game   id={this.state.RoomId} open={this.state.modelopen} close={this.state.closeModal}/> */}
							
						
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