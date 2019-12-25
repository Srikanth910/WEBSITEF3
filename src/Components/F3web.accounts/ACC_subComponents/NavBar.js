import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal';
 import {Link } from 'react-router-dom'

 import { withRouter } from 'react-router-dom';
import { Balance, Logout } from '../../ServerApi/ServerApi';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
import Auth from '../../ServerApi/Auth';
 class NavBar extends Component {
	 constructor(props) {
		 super(props)
	 
		 this.state = {
			  Balance:'',
			  Bonus:'',
			push:''	,
			Modelopen:''		  

		 }
	
	 }
	 



	 componentDidMount=()=>{
		
		
	Balance().then(Userbalance=>{
		console.log('resp',Userbalance);
		this.setState({
		Balance:Userbalance.cash,
		Bonus:Userbalance.bonus,
		})
	})
		

	 }

	 LogoutUser=()=>{


	// 	this.setState({
	// 		Modelopen:true

	// 	})
	// }
	// 	closemodel=()=>{
	// 		console.log('hellomodel close')
	// 		this.setState({
	// 			Modelopen:false
	// 		})
	// 	}


	// 	UserLogout=async()=>{
	// 		console.log('logout')
	// 		const  Logoutuser  = await Logout();
	// if(Logoutuser.status==="ok"){

			
	// 		this.props.history.push('/')
	
			
	// 		}else{
				
	// 			this.props.history.push("# ")
	// 		}
	 

    confirmAlert({
		Title: 'Confirm to submit',
		message: 'Are you sure  LOGOUT',
		buttons: [
		  {
			label: 'Yes',
			onClick:() =>
			
			Logout().then(user=>{
				console.log('logoutrep',user)
				if(user.status==='ok'){
					Auth.signout(()=>{
						this.props.history.push('/');
					});
					
				
				}else{
					this.props.history.push("# ")
				}
			})
              

		
		  },
		  {
			label: 'No',
			onClick: () => 
			this.props.history.push("# ")
		  }
		]
	  });
		

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
								<a href ="#"   onClick={this.LogoutUser} className="sign-out"></a>
								</div>
							</div>
						</div>	
					</div>
					
					{/* <!-- Small modal --> */}
{/* <button class="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-sm">Logout modal</button> */}
				
</div>



           
        )
    }
}

export default withRouter(NavBar);