import React, { Component } from 'react'
import Roombutton from '../Roombutton'
import { Provider } from 'react-redux'

  const RoomIds=(WrappedComponent) =>{
    return  class roomIds extends Component{

        constructor(props) {
            super(props)
        
            this.state = {
                 id:''
            }
        }

         roomid1=()=>{
             console.log('room')
             this.setState({
                 id:1
             })
         }

          roomid2=()=>{
              this.setState({
                  id:2
              })
              this.props.history.push('/GameLobby')
          }

        
        
        render(){
            return(
                <div>
                <WrappedComponent id={this.state.id}   roomid1={this.roomid1}   roomid2={this.roomid2}/>
               
                </div>
               
            )
        }
        
    }




         
}

export default RoomIds