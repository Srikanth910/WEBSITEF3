import React, { Component } from 'react'
import SignIn from '../SignIn'



 const Modelpopup=(WrappedComponent)=>{




return class Modelpopup extends Component {

     constructor(props) {
         super(props)
     
         this.state = {
              openModal:'',
              Loggeruser:''
         }
     }
     
    openModal=(e)=> {   
	
		 
		 this.setState({modalopen: true});
	   }
 
	 closeModal=(e)=> {
		
		 
		 this.setState({modalopen: false});
	   }
  h



    
    render() {
        return (
            <div >

      <WrappedComponent    showmodel={this.openModal} Loggeruser={this.state.loggedin} />
      <SignIn open={this.state.modalopen} close={this.closeModal} Loggeruser={this.state.loggedin}    />
                
            </div>
        )
    }
}
 } 
 export default Modelpopup;
