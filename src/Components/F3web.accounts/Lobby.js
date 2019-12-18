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
                <div className="container" style={{marginTop:"3rem"}}>
				
                {/* <Link to={'#'}  target="_blank"  onClick={this.handlelink} >
								<button   class="btn btn-primary"  type="submit">play</button>
						
                    		</Link> */}


<div class="row d-flex justify-content-center ">

{/* <!-- Card--1 --> */}

<div class="col-md-4 cards-section cardcursor" onClick={this.handleUrl}>
  <div class="card  cards-view text-white">
    <img src={process.env.PUBLIC_URL + "/host_g1..png"} class="card-img" alt="..." />
    <div class="card-img-overlay align-self-end">
      <div class="image-game-type align-self-end">
        <img src={process.env.PUBLIC_URL + "/price.png"} class="bet-place" alt="" />
        <img src={process.env.PUBLIC_URL + "/game_type_f3.png"} class="dies" />
      </div>
    </div>

  </div>
  <div class="card-footer bg-light d-flex justify-content-between">
    <img src={process.env.PUBLIC_URL + "/flag_ph.png"} />
    <h6 class="player_name"> AMANDA PERRY</h6>
    <div>
      <img src={process.env.PUBLIC_URL + "/icon_players.png"} class="icon_players" />
      <span class="player_bet">1000</span>
    </div>


  </div>
</div>

{/* <!-- Card--2 --> */}
<div class="col-4 cards-section cardcursor" onClick={this.handleUrl}>
                  <div class="card cards-view text-white">
                    <img src={process.env.PUBLIC_URL + "/host_g2.png"} class="align-self-center card-img" alt="..." />
                    <div class="card-img-overlay align-self-end">
                      <div class="image-game-type align-self-end">
                        <img src={process.env.PUBLIC_URL + "/price.png"} class="bet-place" alt="" />
                        <img src={process.env.PUBLIC_URL + "/game_type_f3.png"} class="dies" />
                      </div>
                    </div>

                  </div>
                  <div class="card-footer bg-light d-flex justify-content-between">
                    <img src={process.env.PUBLIC_URL + "/flag_uk.png"} />
                    <h6 class="player_name"> BLAKE PORTMAN</h6>
                    <div>
                      <img ssrc={process.env.PUBLIC_URL + "/icon_players.png"} class="icon_players" />
                      <span class="player_bet">1000</span>
                    </div>


                  </div>
                </div>





                <div class="col-4 cards-section cardcursor" onClick={this.handleUrl}>
                <div class="card  cards-view text-white">
                  <img src={process.env.PUBLIC_URL + "/host_g3.png"} class="card-img" alt="..." />
                  <div class="card-img-overlay align-self-end">
                    <div class="image-game-type align-self-end">
                      <img src={process.env.PUBLIC_URL + "/price.png"} class="bet-place" alt="" />
                      <img src={process.env.PUBLIC_URL + "/game_type_f3.png"} class="dies" />
                    </div>
                  </div>

                </div>
                <div class="card-footer bg-light d-flex justify-content-between">
                  <img src={process.env.PUBLIC_URL + "flag_us.png"} />
                  <h6 class="player_name"> EVA JOHNSSON</h6>
                  <div>
                    <img src={process.env.PUBLIC_URL + "/icon_players.png"} class="icon_players" />
                    <span class="player_bet">1000</span>
                  </div>


                </div>
              </div>


              <div class="col-4 cards-section   cardcursor"  onClick={this.handleUrl}>
                <div class="card cards-view text-white">
                  <img src={process.env.PUBLIC_URL + "/host_g4.png"} class="card-img" alt="..." />
                  <div class="card-img-overlay align-self-end">
                    <div class="image-game-type align-self-end">
                      <img src={process.env.PUBLIC_URL + "/price.png"} class="bet-place" alt="" />
                      <img src={process.env.PUBLIC_URL + "/game_type_f3.png"} class="dies" />
                    </div>
                  </div>

                </div>
                <div class="card-footer bg-light d-flex justify-content-between">
                  <img src={process.env.PUBLIC_URL + "/flag_eu.png"} />
                  <h6 class="player_name"> NATALIE BLAIR</h6>
                  <div>
                    <img src={process.env.PUBLIC_URL + "/icon_players.png"} class="icon_players" />
                    <span class="player_bet">1000</span>
                  </div>


                </div>
              </div>
          


</div>


{/* <!-- Card--1 --> */}


{/* <!-- Card--2 --> */}






                            </div>


                            </div>

                            </div>
							
            </div>
            <Footer/>
            </div>
        )
    }
}
