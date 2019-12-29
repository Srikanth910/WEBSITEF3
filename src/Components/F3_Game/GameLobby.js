import React, { Component } from 'react'
import './f3game.css'
import Modal from 'react-bootstrap/Modal';
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'

class GameLobby extends Component {



  constructor(props) {
    super(props)

    this.state = {
      showmodel: false

    }
  }

  componentWillMount() {
    this.open()


  }

  open = () => {
    this.setState({
      showModal: true
    })

  }
 handleroom1=()=>{
  this.props.history.push(`/Game/${1}`)
 }

 handleroom2=()=>{
  this.props.history.push(`/Game/${2}`)
 }
 handleroom3=()=>{
  this.props.history.push(`/Game/${3}`)
 }
 handleroom4=()=>{
  this.props.history.push(`/Game/${4}`)
 }

 

  render() {
    return (
      <div>
        {/* <Modal
          show={this.state.showModal}

          className="modal-90w"
          onclose={this.state.close}



        > */}

          {/* <Gamef3 closeevent={this.state.showmodel}/> */}
          <div class="container content">


            <div class="bg-gamelobby align-content-center justify-content-around  flex-wrap">
              {/* <!-- Logo --> */}
              <div class="row justify-content-md-center mb-5 p-0 mr-0">
                <img src={process.env.PUBLIC_URL + "/logo.png"} class="logo align-self-center" alt="..." />
              </div>

              <div class="row justify-content-around around">

                {/* <!-- Card--1 --> */}


                {/* <Link to="/" className="list-style"> */}
                  <div class="col-md-4 cards-section cardcursor" href="/">
                    <div class="card card-view text-white lobby" >
                      <img src={process.env.PUBLIC_URL + "/host_g1..png"} class="card-img" alt="..." />
                      <div class="card-img-overlay align-self-end">
                        <div class="image-game-type align-self-end">
                          <img src={process.env.PUBLIC_URL + "/price.png"} class="bet-place" alt="" />
                          <img src={process.env.PUBLIC_URL + "/game_type_f3.png"} class="dies" />
                        </div>
                      </div>

                      <Link to="#" href="#" class="overlay"  onClick={this.handleroom1}>
								Play Now!
							</Link>
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
        

                  <div class="col-4 cards-section cardcursor">
                    <div class="card card-view text-white lobby">
                      <img src={process.env.PUBLIC_URL + "/host_g2.png"} class="align-self-center card-img" alt="..." />
                      <div class="card-img-overlay align-self-end">
                        <div class="image-game-type align-self-end">
                          <img src={process.env.PUBLIC_URL + "/price.png"} class="bet-place" alt="" />
                          <img src={process.env.PUBLIC_URL + "/game_type_f3.png"} class="dies" />
                        </div>
                      </div>


                      <Link to="#" href="#" class="overlay"  onClick={this.handleroom2} >
								Play Now!
							</Link>
                    </div>
                    <div class="card-footer bg-light d-flex justify-content-between">
                      <img src={process.env.PUBLIC_URL + "/flag_uk.png"} />
                      <h6 class="player_name"> BLAKE PORTMAN</h6>
                      <div>
                      <img src={process.env.PUBLIC_URL + "/icon_players.png"} class="icon_players" />
                        <span class="player_bet">1000</span>
                      </div>


                    </div>
                  </div>
           

                {/* <!-- Card--3 --> */}

                  <div class="col-4 cards-section cardcursor">
                    <div class="card card-view text-white  lobby">
                      <img src={process.env.PUBLIC_URL + "/host_g3.png"} class="card-img" alt="..." />
                      <div class="card-img-overlay align-self-end">
                        <div class="image-game-type align-self-end">
                          <img src={process.env.PUBLIC_URL + "/price.png"} class="bet-place" alt="" />
                          <img src={process.env.PUBLIC_URL + "/game_type_f3.png"} class="dies" />
                        </div>
                      </div>


                      <Link to="#" href="#" class="overlay"  onClick={this.handleroom3}>
								Play Now!
							</Link>
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
               

                {/* <!-- Card--4 --> */}
                
                  <div class="col-4 cards-section  cardcursor">
                    <div class="card card-view text-white lobby">
                      <img src={process.env.PUBLIC_URL + "/host_g4.png"} class="card-img" alt="..." />
                      <div class="card-img-overlay align-self-end">
                        <div class="image-game-type align-self-end">
                          <img src={process.env.PUBLIC_URL + "/price.png"} class="bet-place" alt="" />
                          <img src={process.env.PUBLIC_URL + "/game_type_f3.png"} class="dies" />
                        </div>
                      </div>
                      <Link to="#" href="#" class="overlay"  onClick={this.handleroom4}>
								Play Now!
							</Link>
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



              {/* 
      <!--  -->
<!-- Bottom --> */}
              <div class="bottom p-0 mb-auto d-flex justify-content-end align-items-center">
                <div class="col-4">
                  <img src={process.env.PUBLIC_URL + "/Balance.png"} class="bottom-layer" alt="" />
                </div>
                <div class="col-8">
                  <img src={process.env.PUBLIC_URL + "/lobby_area.png"} class="bottom-layer" alt="" />
                </div>
              </div>

            </div>
          </div>

        {/* </Modal> */}
      </div>

    )
  }
}

export default withRouter(GameLobby)