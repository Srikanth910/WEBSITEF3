import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import roomIds from './HocModel/roomIds';
 class Roombuttons extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             id:''
        }
    }
    
    handleid1=()=>{
        console.log('dffd',this.props)
        this.setState({
            id:1
        })
        // this.props.dispatch({
        //     type: "GAME_ID",
        //     payload : 1,
        //     history : this.props.history
        // })
        this.props.history.push(`/Game/${1}`)
       
    }

    // componentDidUpdate(prePro ,preState) {
    //     if(prePro.game.gameId !== this.props.game.gameId) {
    //         console.log('changed',this.props.game.gameId)
    //         this.props.history.push('/Game')
    //     }
    //     else {
    //         console.log('pros',this.props)
    //     }
    // }

    handleid2=()=>{
        // this.props.dispatch({
        //     type:"Game_ID",
        //     payload:2,
        //     history:this.props.history
        // })
        window.open(`/Game/${2}`)

       
    }
    handleid3=()=>{
        window.open(`/Game/${3}`)

    
    }
    handleid4=()=>{
        window.open(`/Game/${4}`)

    }
    render() {
        console.log("proppp",this.props);

         console.log('ids', this.state.id)
         console.log('hoc ids',this.props.id)
        return (
            <div>
              
			
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4 px-3 mb-5">
                        <div className="lobby">
                            <img src={process.env.PUBLIC_URL + "/host_g1..png"} className="img-fluid" alt="..." />
                            <div className="price">$10</div>
                            <span className="dice"></span>
                            <a href="#" className="overlay" onClick={this.handleid1}>
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
                            <a href="#" className="overlay" onClick={this.handleid2}>
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
                            <a href="#" className="overlay" onClick={this.handleid3} >
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
                            <a href="#" className="overlay" onClick={this.handleid4}>
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
    


                
            </div>
        )
    }
}

export default withRouter(Roombuttons)
// export default connect(state => state, null)(withRouter(Roombuttons))