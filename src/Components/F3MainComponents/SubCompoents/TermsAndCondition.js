import React, { Component } from 'react';
import {Link}  from 'react-router-dom';
import $ from 'jquery';
import Footer from './Footer';
import Modelpopup from '../HocModel/Modelpopup';

class TermsAndCondition extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Name:'Login'
        }
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
           
				 <header class="mt-2 mt-sm-4 fixed-top">
					<div class="container-fluid px-0 text-center">
						
						
						<Link to="" role="button" class="sign-in" data-toggle="modal" onClick={this.props.showmodel} data-target="#exampleModalCenter">Sign In / Register</Link>


						
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

			

    {/* model */}

   
    <div id="carouselExampleIndicators" className="carousel inner slide" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active text-center">
                
            </div>
        </div>
    </div>

    <section className="block dark-blue-bg">
        <div className="container">
            <h1 className="h1">Terms & Conditions</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur euismod libero, sit amet lacinia augue fermentum ut. Aliquam sollicitudin commodo ex, vehicula vehicula lectus porttitor id. Aliquam non tristique mauris, eu lobortis ligula. Aenean mauris nunc, fermentum in felis in, ornare ornare tellus. Duis feugiat consequat purus, nec finibus nisi aliquam in. Maecenas suscipit sapien ut sapien fermentum rhoncus. Nunc dolor est, commodo ac ante nec, condimentum accumsan mi. Aenean tellus orci, venenatis ac ante id, gravida scelerisque justo. Nunc ultricies ornare tellus, non faucibus eros blandit nec. Aenean commodo tortor tellus, finibus fringilla eros condimentum sit amet.
            </p>
            <ul class="list-unstyled">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Curabitur gravida elit tempor posuere pellentesque.</li>
                <li>Sed euismod ipsum commodo, cursus odio in, accumsan mauris.</li>
                <li>Ut dictum justo nec augue eleifend, a dapibus neque volutpat.</li>
                <li>Duis ullamcorper leo tincidunt, viverra justo vitae, tristique est.</li>
                <li>Donec volutpat enim nec commodo venenatis.</li>
                <li>Aliquam porttitor quam nec magna condimentum, ut consequat elit lacinia.</li>
                <li>Morbi in mi rhoncus, lacinia magna mollis, tempor tortor.</li>
                <li>Pellentesque interdum felis id risus mattis sodales.</li>
                <li>Duis semper urna sed pellentesque feugiat.</li>
                <li>Phasellus vestibulum lacus vitae blandit lacinia.</li>
                <li>Vivamus mollis neque nec velit aliquet malesuada.</li>
            </ul>
            <p>
                Vivamus euismod rhoncus sapien vitae mattis. Vestibulum orci eros, eleifend sit amet massa non, eleifend imperdiet orci. Duis ut turpis dapibus, convallis ex id, lobortis sapien. Vivamus at mi felis. Suspendisse eu vehicula augue. Pellentesque mattis nunc sed ipsum efficitur rhoncus. Sed ultricies tincidunt malesuada.
                <br></br>
                Morbi malesuada diam a libero accumsan, et luctus turpis posuere. Nulla a est quis metus dapibus placerat. Mauris est orci, porta ut iaculis id, molestie ut erat. Pellentesque pharetra euismod lectus vel maximus. Morbi mattis ut risus quis rutrum. Morbi ut mattis lorem, rhoncus porttitor libero. Quisque efficitur sollicitudin lorem vel tincidunt. Donec viverra rhoncus nulla. Fusce sagittis massa augue, auctor pellentesque ex mollis sit amet. Duis lectus odio, ullamcorper id malesuada sit amet, sodales sit amet ante. Aliquam quis lectus cursus, fringilla libero eget, eleifend massa. Nullam ex elit, tincidunt in suscipit eu, accumsan nec dolor. Curabitur neque est, efficitur eget sem in, iaculis viverra purus. Proin aliquam eros sed turpis sagittis semper. Suspendisse potenti. Pellentesque quis feugiat massa.
            </p>
            <ul className="list-unstyled">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Curabitur gravida elit tempor posuere pellentesque.</li>
                <li>Sed euismod ipsum commodo, cursus odio in, accumsan mauris.</li>
                <li>Ut dictum justo nec augue eleifend, a dapibus neque volutpat.</li>
                <li>Duis ullamcorper leo tincidunt, viverra justo vitae, tristique est.</li>
                <li>Donec volutpat enim nec commodo venenatis.</li>
                <li>Aliquam porttitor quam nec magna condimentum, ut consequat elit lacinia.</li>
                <li>Morbi in mi rhoncus, lacinia magna mollis, tempor tortor.</li>
                <li>Pellentesque interdum felis id risus mattis sodales.</li>
            </ul>
            <p>
                Nulla dolor lacus, tristique non dignissim sit amet, rhoncus quis nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean eget lorem ut metus sagittis consequat ac quis ex. Nulla maximus lacus sit amet urna vestibulum, in maximus elit accumsan. Nunc in vestibulum enim. Cras semper lectus porttitor, porttitor orci malesuada, laoreet ante. Praesent vehicula volutpat erat, aliquet varius lacus placerat a.
            </p>
            <p className="orange">
                <em>Ut a fringilla nisl, at imperdiet massa. Sed tempor tincidunt quam, sit amet faucibus tellus aliquet at. Donec euismod tristique augue maximus posuere. Nullam condimentum eget lacus vel consequat. </em>
            </p>
        </div>
    </section>
    
    <section className="px-3 py-3 px-sm-5 py-sm-5 green-bg">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6"><h1 className="black">Live Dealer Game</h1></div>
                <div className="col-12 col-md-6 text-center">  <Link  className="btn-block"Link to={'/Deposit'}>Deposit</Link></div>
            </div>
        </div>
    </section>
<Footer/>
        </div>
        )
    }
}

export default Modelpopup(TermsAndCondition)