import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import $ from 'jquery'
export default class SideNav extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              
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
          console.log('hello')
 
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
         
 
         // tabs 
         $(function() {
             $( 'ul.nav li' ).on( 'click', function() {
                   $( this ).parent().find( 'li.active' ).removeClass( 'active' );
                   $( this ).addClass( 'active' );
             });
       });
       $(document).ready(function(){
         $('.slide').hide();
      });
 
      }
 
     
    render() {
        return (
            <div className="col-md-3 blue-bg text-center px-0">
            <Link Link to={'/'} className="navbar-brand N-brand"> 
                    
                      
                <img src = { process.env.PUBLIC_URL + "/logo.png" }className="d-none d-sm-none d-md-block" alt="Fantastic 3"/>
                 <img src = { process.env.PUBLIC_URL + "/logo-m.png"} className="d-block d-sm-none" alt="Fantastic 3"/>
                </Link>
                <nav className="navbar navbar-expand-lg">
                    <button className="navbar-toggler taggler" type="button" data-toggle="offcanvas">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse offcanvas-collapse" id="collapsingNavbar1">
                        <ul className="nav flex-column text-left side-menu">
                        
                        <li class="nav-item active" >
                                {/* <a class="nav-link" href="#"><span class="messages"></span>Messages</a> */}
                                <Link className="nav-link"Link to={'/Lobby'}><span  className="messages"></span>Lobby</Link>

                            </li> 
                        
                        <li className="nav-item">


                                {/* <Link  onClick={function(){this.setState({open:!this.state.open})}.bind(this)}className=" nav-link dropdown-toggle" href="#" data-toggle="collapse" aria-expanded="false"><span class="profile"></span>Edit Profile</Link>
                                {this. state.open &&<ul  id="editProfile"> */}
                              <Link Link to  ={'#'} onClick={this._toggleprofile} className="nav-link  dropdown-toggle" data-toggle="collapse" aria-expanded="false"><span class="profile"></span>Edit Profile</Link>
                             <ul id="editProfile" className="slide" ref="toggle-profile" >
                                  <li>

                                        <Link  Link to={'/Profile'}>Profile</Link>

                                    </li>
                                    <li>
                                        {/* <a href="documents.html">Documents</a> */}
                                        <Link Link to={'/Documents'}>Documents</Link>
                                    </li>
                                    <li>
                                        {/* <a href="change-password.html">Change Password</a> */}
                                        <Link Link to={'/ChangePassword'}>Change-Password</Link>
                                    </li>
                                    <li>
                                        {/* <a href="notification.html">Notifications</a> */}
                                        <Link Link to={'/Notifications'}>Notification</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                {/* <Link   onClick={function(){this.setState({wallet:!this.state.wallet})}.bind(this)}  className="nav-link dropdown-toggle" href="#" data-toggle="collapse" aria-expanded="false"><span class="my-wallet"></span>My Wallet</Link>
                                {this.state.wallet &&<ul  id="myWallet"> */}
                                <Link Link to ={"#"}   onClick={this._toggleWallet}  className="nav-link dropdown-toggle trans"  data-toggle="collapse" aria-expanded="false"><span class="my-wallet"></span>My Wallet</Link> 
                                
                                
                                <ul   className="slide"  ref="toggle-Wallet" >
                                <li>
                                        {/* <a href="deposit.html">Deposit</a> */}
                                        <Link  Link to={'/Deposit'}>Deposit</Link>
                                    </li>
                                    <li>
                                        {/* <a href="withdraw.html">Withdraw</a> */}
                                        <Link  Link to={'/WithDraw'}>Withdraw</Link>
                                    </li>
                                    <li>
                                        {/* <a href="balance-history.html">Balance History</a> */}
                                        <Link  Link to={'/BalanceHistory'}>Balance History</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                            
                            <Link className="nav-link"Link to={'/Mybets'}><span  className="bonuses"></span>My Bets</Link>
                                    
                            </li>
                            <li className="nav-item">

                                {/* <a class="nav-link" href="bonuses.html"><span class="bonuses"></span>Bonuses</a> */}
                                <Link className="nav-link"Link to={'/Bonuses'}><span  className="bonuses"></span>Bonuses</Link>
                            </li>
                            <li class="nav-item">
                                {/* <a class="nav-link" href="#"><span class="messages"></span>Messages</a> */}
                                <Link className="nav-link"Link to={'/Messages'}><span  className="messages"></span>messages</Link>

                            </li>
                           
                        </ul>
                    </div>	
                </nav>	
            </div>
        )
    }
}
