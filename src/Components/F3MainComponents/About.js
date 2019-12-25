import React, { Component } from 'react';
// import './NavBar.css'
import { Link } from 'react-router-dom';
import $ from 'jquery';

import Modelpopup from './HocModel/Modelpopup';
import Footer from './SubCompoents/Footer';
import Auth from '../ServerApi/Auth';
import LoginButton from './SubCompoents/LoginButton';


class About extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modalopen: ''
        }
    }




    componentDidMount() {

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



                <header className="mt-2 mt-sm-4 fixed-top">
                    <div className="container-fluid px-0 text-center">
                        {/* <a href="#" role="button" class="sign-in" data-toggle="modal" onClick={this.props.showmodel} data-target="#exampleModalCenter">Sign In / Register</a> */}

                    <LoginButton/>

{/* 
                        {Auth.getAuth()===false &&
						
						<Link to="" role="button" class="sign-in" data-toggle="modal" onClick={this.props.showmodel} data-target="#exampleModalCenter">Sign In / Register</Link>}

                        {Auth.getAuth()===true &&
						<Link to="" role="button" class="sign-in" data-toggle="modal" data-target="#exampleModalCenter">Logout</Link>}
						
					 */}
                        <nav className="navbar navbar-expand-lg orange-bg mt-4 mt-md-5">
                            <Link Link to={'/'} className="navbar-brand">
                                <img src={process.env.PUBLIC_URL + "/logo.png"} className="d-none d-sm-none d-md-block" alt="Fantastic 3" />
                                <img src={process.env.PUBLIC_URL + "/logo-m.png"} className="d-block d-sm-none" alt="Fantastic 3" />

                            </Link>
                            <button className="navbar-toggler" type="button" data-toggle="offcanvas">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="navbar-collapse offcanvas-collapse1" id="collapsingNavbar">
                                <ul className="navbar-nav mr-5 ml-auto">
                                    <li className="nav-item active">
                                        <Link className="nav-link " Link to={'/'}>Home</Link>
                                    </li>
                                    <li className="nav-item">

                                        <Link className="nav-link active " Link to={'/About'}>About Us</Link>
                                    </li>
                                </ul>
                                <ul className="navbar-nav ml-5 mr-auto">
                                    <li className="nav-item">

                                        <Link className="nav-link " Link to={'/LiveCasino'}>Live Casino</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link " Link to={'/FAQ'}>Faq</Link>
                                    </li>

                                </ul>
                            </div>
                        </nav>
                    </div>
                </header>



                <div id="carouselExampleIndicators" class="carousel inner slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active text-center">

                        </div>
                    </div>
                </div>

                <section className="block dark-blue-bg">
                    <div className="container-fluid">
                        <h1 className="h1">About Fantastic 3</h1>
                        <div className="row justify-content-md-center pb-5">
                            <div className="col-12 col-lg-4 px-4 px-sm-5">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          							<br />
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          							<br></br>
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          							<br></br>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          							<br></br>
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          					   	</p>
                            </div>
                            <div className="col-12 col-lg-3 text-center">

                                <img src={process.env.PUBLIC_URL + "/about-table.png"} className="m-image" alt="" />
                            </div>
                            <div className="col-12 col-lg-4 px-4 px-sm-5">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          							<br></br>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          							<br></br>
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          							<br></br>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          							<br></br>
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          						</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-top">
                        <div className="container-fluid">
                            <div className="row pt-5 mt-5">
                                <div className="col-12 col-sm-12 col-lg-4 px-5">
                                    <h4 className="icon1">Lorem ipsum dolor sit amet</h4>
                                    <p className="py-3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          							</p>
                                </div>
                                <div className="col-12 col-sm-12 col-lg-4 px-5">
                                    <h4 className="icon2">Lorem ipsum dolor sit amet</h4>
                                    <p className="py-3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          							</p>
                                </div>
                                <div className="col-12 col-sm-12 col-lg-4 px-5">
                                    <h4 className="icon3">Lorem ipsum dolor sit amet</h4>
                                    <p className="py-3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          							</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="px-3 py-3 px-sm-5 py-sm-5 green-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6"><h1 class="black">Live Dealer Game</h1></div>
                            <div className="col-12 col-md-6 text-center"><Link className="btn-block" Link to={'/Deposit'}>Deposit</Link></div>
                        </div>
                    </div>
                </section>


                <Footer />

            </div>
        )
    }
}

export default About
