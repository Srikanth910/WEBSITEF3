import React, { Component } from 'react'

 import {Link} from 'react-router-dom'
import Footer from './SubCompoents/Footer'
export default class Lobby extends Component {
    render() {
        return (
        
       <header class="mt-2 mt-sm-4 fixed-top">
					<div class="container-fluid px-0 text-center">
						
						
						<Link to="" role="button" class="sign-in" data-toggle="modal" onClick={this.props.showmodel} data-target="#exampleModalCenter">Sign In / Register</Link>


						{/* <Link to="" role="button" class="sign-in" data-toggle="modal" onClick={this.props.showmodel} data-target="#exampleModalCenter">Logout</Link> */}
						
						
						{/* <FormModel open={this.state.modalopen} close={this.closeModal}/> */}
						
						<nav class="navbar navbar-expand-lg orange-bg mt-4 mt-md-5">
							<Link Link to={'/'} className="navbar-brand">
								<img src={process.env.PUBLIC_URL + "/logo.png"} className="d-none d-sm-none d-md-block" alt="Fantastic 3" />
								<img src={process.env.PUBLIC_URL + "/logo-m.png"} className="d-block d-sm-none" alt="Fantastic 3" />

							</Link>
							<button class="navbar-toggler" type="button" data-toggle="offcanvas">
								<span class="navbar-toggler-icon"></span>
							</button>
							<div class="navbar-collapse offcanvas-collapse1" id="collapsingNavbar">
								<ul class="navbar-nav mr-5 ml-auto">
									<li className="nav-item active">
										<Link className="nav-link active" Link to={'/'}>Home</Link>
									</li>
									<li className="nav-item">

										<Link className="nav-link " Link to={'/About'}>About Us</Link>
									</li>
								</ul>
								<ul className="navbar-nav ml-5 mr-auto">
									<li className="nav-item">

										<Link className="nav-link " Link to={'/LiveCasino'}>Live Casino</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link " Link to={'/FAq'}>Faq</Link>
									</li>

								</ul>
							</div>
						</nav>
					</div>
				</header> 

		
             
		
        )
    }
}
