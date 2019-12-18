import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal';
 import {Link } from 'react-router-dom'

 import { withRouter } from 'react-router-dom';
import { Balance, Logout } from '../../ServerApi/ServerApi';

  
 class NavBar extends Component {
	 constructor(props) {
		 super(props)
	 
		 this.state = {
			  Balance:'',
			  Bonus:'',
			push:''	,
			Modelopen:''		  

		 }
		 this.UserLogout=this.UserLogout.bind(this)
	 }
	 



	 componentDidMount=()=>{
		
		
	// Balance().then(Userbalance=>{
	// 	console.log('resp',Userbalance);
	// 	this.setState({
	// 	Balance:Userbalance.cash,
	// 	Bonus:Userbalance.bonus,
	// 	})
	// })
		

	 }

	 LogoutModel=()=>{


		this.setState({
			Modelopen:true

		})
	}
		closemodel=()=>{
			console.log('hellomodel close')
			this.setState({
				Modelopen:false
			})
		}


		UserLogout=async()=>{
			console.log('logout')
			const  Logoutuser  = await Logout();
	if(Logoutuser.status==="ok"){

			
			this.props.history.push('/')
	
			
			}else{
				
				this.props.history.push("# ")
			}
	 


		

		}
		
	
		
	
		
	// 	  Logout().then(resp=>{
	// 		console.log('responce',resp)
	// 		if(resp.status==="ok"){

	// 	alert('logout succuss')
	// 	this.props.history.push('/')

		
	// 	}else{
			
	// 		this.props.history.push("# ")
	// 	}
	//    }).catch(err=>{
	// 	   console.log('error',err)
	//    })
	

	  


    render() {
        return (
            
                
<div >
					<div className="gray-bg border-bottom">
						<div className="container-fluid">
							<div className="row">
								<div className="col-12 col-sm-5 col-lg-7 px-3 py-3">
									<span className="user">Username</span>
								</div>
								<div className="col-5 col-sm-3 col-lg-2 border-left m-border px-3 py-3">
									<div class="balance">
										MAIN BALANCE
										<span>{this.state.Balance} INR</span>
									</div>	
								</div>
								<div className="col-5 col-sm-3 col-lg-2 border-left px-3 py-3">
									<div className="bonus-balance">
										Bonus Balance
										<span>{this.state.Bonus} INR</span>
									</div>	
								</div>
								<div  onClick={this.LogoutModel}className="col-2 col-sm-1 col-lg-1 border-left px-3 py-3 text-center">
								<a href ="#"   className="sign-out"></a>
								</div>
							</div>
						</div>	
					</div>
					
					{/* <!-- Small modal --> */}
{/* <button class="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-sm">Logout modal</button> */}
<Modal
        size="sm"
		show={this.state.Modelopen}
		onHide={this.closemodel}
     className="modelcolor"
        aria-labelledby="example-modal-sizes-title-sm"
      >
     
		  <div class="modal-content1">
         
	 <Modal.Header  >
          <Modal.Title id="example-modal-sizes-title-sm"  >
		 
		 <h4><span style={{color:'black'}}>Logout <i class="fa fa-lock"></i></span></h4> </Modal.Title>

        </Modal.Header>

	
   
        <Modal.Body>

		<div style={{color:'block'}} ><i class="fa fa-question-circle"></i> Are you sure you want to log-off?</div>

		  
		
			
			.</Modal.Body>
			<hr/>
		 

			<Modal.Footer>
			<button   onClick={this.UserLogout}  className=" btn btn-info">Logout</button>
  </Modal.Footer>

			</div>
      </Modal>

  
				
</div>



           
        )
    }
}

export default withRouter(NavBar);