import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal';
 import {Link } from 'react-router-dom'

 import { withRouter } from 'react-router-dom';
import { Balance, Logout, Getdata } from '../../ServerApi/ServerApi';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
import Auth from '../../ServerApi/Auth';
import {NotificationContainer, NotificationManager} from 'react-notifications';

 class NavBar extends Component {
	 constructor(props) {
		 super(props)
	 
		 this.state = {
			  Balance:'',
			  Bonus:'',
			push:''	,
			firstName:'',
			Username:'username',
			Modelopen:''		  

		 }
	
	 }
	 



	 componentDidMount=()=>{
		
		
	Balance().then(Userbalance=>{
		// console.log('resp',Userbalance);
		this.setState({
		Balance:Userbalance.cash,
		Bonus:Userbalance.bonus,
		})
	})
		

	Getdata().then(userdata=>{
		console.log('profile' , userdata.firstName)
		this.setState({
		firstname:userdata.firstName,
		
		})
	}).catch(error=>{
		console.log('error',error)
	})



	 }

	 LogoutUser=()=>{



    confirmAlert({
		Title: 'Confirm to submit',
		message: 'Are you sure  Logout',
		buttons: [
		  {
			label: 'Yes',
			onClick:() =>{
			
			Logout().then(user=>{
				console.log('logoutrep',user)
				if(user.status==='ok'){
					
					this.setState({
						isLogged:false
						
					})
				
					localStorage.removeItem('isAuth');
					localStorage.setItem('isAuth',this.state.isLogged)
		
				
					NotificationManager.success('You have successfully logged out', '',2000)
					

			
					Auth.signout()
					

					setTimeout(()=>{
						this.props.history.push('/');

					},2000)
		
					
		
				
				}
				
			}).catch(err=>console.log('err', err))
              

			}
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
            
				
				
<div>
<NotificationContainer/>
					<div className="gray-bg border-bottom">
						<div className="container-fluid">
							<div className="row">
								<div className="col-12 col-sm-5 col-lg-7 px-3 py-3">
		<span className="user" style={{color:'red'}}>{this.state.firstName} </span>
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