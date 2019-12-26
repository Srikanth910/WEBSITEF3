import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal';
 import {Register, Login}  from '../ServerApi/ServerApi'
import { withRouter ,Redirect} from 'react-router-dom';
import Auth from '../ServerApi/Auth';


import Toast from 'light-toast';

class SignIn extends Component {
	
	constructor(props) {
		super(props)

		this.state = {

			isLogged:false,
			Name: 'Login',
		  login:'login',
		  Register:'',
		  alertshow:false,
		  messages:{},
		  errorstring:{},

			//

			user_name: '',
			pass_word: '',
			username: "",
			usernameError: "",
			email: '',
			password: '',
			currency: '',
			country: '',
			state: '',
			city: '',
			pincode: '',
			first_name: '',
			last_name: '',
			gender: '',
			date_of_birth: '',
			phone_number: '',
			address: '',
			fields: {},
			errors: {},



		}
		
		this.handleRegister = this.handleRegister.bind(this)
	}

	


	/// login validation
	validateForm() {
		

		let fields = this.state.fields;
		let errors = {};
		let formIsValid = true;


		/// LOGIN

		if (!fields["user_name"]) {
			formIsValid = false;
			errors["user_name"] = "*Please enter your username.";
		}

		if (typeof fields["user_name"] !== "undefined") {
			if (!fields["user_name"].match(/^[a-zA-Z0-9]+$/)) {
				formIsValid = false;
				errors["user_name"] = "*Please enter fields";
			}
		};

		if (!fields["pass_word"]) {
			formIsValid = false;
			errors["pass_word"] = "*Please enter your password.";
		}

		if (typeof fields["pass_word"] !== "undefined") {
			if (!fields["pass_word"].match(/(?=.*\d)(?=.*[a-z]).{6,}/

			)) {
				formIsValid = false;
				errors["pass_word"] = "*Please enter 1 lowercase alphabetical character.";
			}
		};


		this.setState({
			errors: errors
		});
		return formIsValid;

	};



	RegisterValidate() {

		let fields = this.state.fields;
		let errors = {};
		let Registervalide = true;

		if (!fields["username"]) {
			Registervalide = false;
			errors["username"] = "*Please enter your username.";
		}

		if (typeof fields["username"] !== "undefined") {
			if (!fields["username"].match(/^[a-zA-Z0-9]+$/)) {
				Registervalide = false;
				errors["username"] = "*Please enter fields.";
			}
		}




		if (!fields["email"]) {
			Registervalide = false;
			errors["email"] = "*Please enter your email-ID.";
		}

		if (typeof fields["email"] !== "undefined") {
			//regular expression for email validation
			var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
			if (!pattern.test(fields["email"])) {
				Registervalide = false;
				errors["email"] = "*Please enter valid email-ID.";
			}
		};


		if (!fields["password"]) {
			Registervalide = false;
			errors["password"] = "*Please enter your password.";
		}

		if (typeof fields["password"] !== "undefined") {
			if (!fields["password"].match(/(?=.*\d)(?=.*[a-z]).{6,}/)) {
				Registervalide = false;
				errors["password"] = "*Please enter 1 lowercase alphabetical character..";
			}
		};


		if (!fields["Conform_password"]) {
			Registervalide = false;
			errors["Conform_password"] = "*Please enter your password.";
		}





		if (typeof fields["Conform_password"] !== "undefined") {
			if (!fields["Conform_password"].match(/(?=.*\d)(?=.*[a-z]).{6,}/)) {
				Registervalide = false;
				errors["Conform_password"] = "*Please enter 1 lowercase alphabetical character.";
			}



			if (fields["password"] != fields["Conform_password"]) {
				errors["Conform_password"] = "*Please password do not match.";
				Registervalide = false;
			}
			// return true;.. 
		};


		if (!fields["currency"]) {
			Registervalide = false;
			errors["currency"] = "*Please select your Currency.";
		};



		if (!fields["first_name"]) {
			Registervalide = false;
			errors["first_name"] = "*Please enter your firstName.";
		}

		if (typeof fields["first_name"] !== "undefined") {
			if (!fields["first_name"].match(/^[a-zA-Z ]*$/)) {
				Registervalide = false;
				errors["first_name"] = "*Please enter alphabet characters only.";
			}
		}


		if (!fields["last_name"]) {
			Registervalide = false;
			errors["last_name"] = "*Please enter your lastName.";
		}

		if (typeof fields["last_name"] !== "undefined") {
			if (!fields["last_name"].match(/^[a-zA-Z ]*$/)) {
				Registervalide = false;
				errors["last_name"] = "*Please enter alphabet characters only.";
			}
		}

		if (!fields["gender"]) {
			Registervalide = false;
			errors["gender"] = "*You must select male or female";
		}


		if (!fields["date_of_birth"]) {
			Registervalide = false;
			errors["date_of_birth"] = "*Please enter your Date of birth";
		}

		if (typeof fields["date_of_birth"] !== "undefined") {
			if (!fields["date_of_birth"].match(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/
			)) {
				Registervalide = false;
				errors["date_of_birth"] = "*Please enter format YYYY-MM-DD.";
			}
		}



		if (!fields["state"]) {
			Registervalide = false;
			errors["state"] = "*Please enter your state.";
		}

		if (typeof fields["state"] !== "undefined") {
			if (!fields["state"].match(/^[a-zA-Z ]*$/)) {
				Registervalide = false;
				errors["state"] = "*Please enter alphabet characters only.";
			}
		}

		if (!fields["city"]) {
			Registervalide = false;
			errors["city"] = "*Please enter your city.";
		}

		if (typeof fields["city"] !== "undefined") {
			if (!fields["city"].match(/^[a-zA-Z ]*$/)) {
				Registervalide = false;
				errors["city"] = "*Please enter alphabet characters only.";
			}
		}

		if (!fields["pincode"]) {
			Registervalide = false;
			errors["pincode"] = "*Please enter your pincode.";
		}

		if (typeof fields["pincode"] !== "undefined") {
			if (!fields["pincode"].match(/^[1-9][0-9]{5}$/)) {
				Registervalide = false;
				errors["pincode"] = "*Please enter numeric numbers only.";
			}
		};


		if (!fields["country"]) {
			Registervalide = false;
			errors["country"] = "*Please  select your  country.";
		}


		if (!fields["address"]) {
			Registervalide = false;
			errors["address"] = "*Please enter your address.";
		}

		if (typeof fields["address"] !== "undefined") {
			if (!fields["address"].match(/^[a-zA-Z ]*$/)) {
				Registervalide = false;
				errors["address"] = "*Please enter alphabet characters only.";
			}
		}

		if (!fields["phone_number"]) {
			Registervalide = false;
			errors["phone_number"] = "*Please enter your mobile no.";
		}

		if (typeof fields["phone_number"] !== "undefined") {
			if (!fields["phone_number"].match(/^[0-9]{10}$/)) {
				Registervalide = false;
				errors["phone_number"] = "*Please enter valid mobile no.";
			}
		};

		this.setState({
			errors: errors
		});
		return Registervalide;



	};




	getInitialState() {
		return { showModal: false };
	};

	close = () => {
		this.setState({ showModal: false });
	};

	open = () => {
		console.log('open')
		this.setState({
			showModal: true,
		});

	};


	handlechange = (e, ) => {


		// this.setState({

		// 	[event.target.name]: event.target.value,

		let fields = this.state.fields;
		fields[e.target.name] = e.target.value;
		this.setState({
			fields
		});

	};


	handleclick = (Name, e) => {
		
		console.log('login click')
		this.setState({
			Name: Name
		})
	};
	loginchange = (e) => {


		let fields = this.state.fields;
		fields[e.target.name] = e.target.value;
		this.setState({
			fields
		});


	};

	  handlelogin=async(e) =>{
		e.preventDefault();
		
		if (this.validateForm()) {
			let fields = {};
			fields["user_name"] = "";
			fields["pass_word"] = "";
			this.setState({ fields: fields });

			const { user_name, pass_word } = this.state.fields
			const user = {
				username: user_name,
				password: pass_word,
			}
			console.log('outside', user);
			 
	
		const LoginUser=await Login(user);

		 if(LoginUser.status==="ok"){
			Toast.loading('loading...',()=>{
				this.props.history.push("/LobbyArena");
					
				});
				setTimeout(() => {
					Toast.hide();
				}, 3000);
	
			
			Auth.authenticate(()=>{
			this.setState(() => ({
			isLogged: true,
		
			  }));


			})
		   }else {
						Toast.loading('pleace wait...',()=>{
							this.setState({
								error:LoginUser.message
							 })	

						})
						setTimeout(() => {
							Toast.hide();
						}, 3000);



						 
					}

		 }
		

		



		}


	


	handleRegister = (e, Name) => {
	
		e.preventDefault();

	

		// this.Registeralert();

		if (this.RegisterValidate()) {
			let fields = {};
			fields["username"] = "";
			fields["password"] = "";
			fields["email"] = "";
			fields["currency"] = "";
			fields["Conform_password"] = ""
		
			fields["city"] = "";
			fields["pincode"] = "";
			fields["first_name"] = "";
			fields["last_name"] = "";
			fields["country"] = "";
			fields["gender"]="";
			fields["date_of_birth"] = "";
			fields["phone_number"] = "";
			fields["address"] = "";



			this.setState({ fields: fields });

	//   console.log('fleds data',this.state.fields)

	   const data =this.state.fields
		console.log('prestATE',data)

		Register(data).then(res => {

			console.log('responce', res);




			if(res.status===200){
				Toast.loading('pleace wait...',()=>{
					this.Registeralert();
				setTimeout(()=>this.login(), 1000);  

				this.setState({
			
					errorstring:res.data.errorString,
					messages:res.data.message
				},)
	
				})

				setTimeout(() => {
					Toast.hide();
				}, 1000);

		



				
	
				

			
				
		
	}
})

	};
}



	login = () => {
        

        const {login  } = this.state;
        if (login === "login") {
            this.setState({
                login: "login",
               
            })
        } else {
            this.setState({
                login: "login",
               
            });
        }
    }



	
	Register = () => {
        console.log("hello  button2")

        const { login } = this.state;
        if (login === "Register") {
            this.setState({
                login: "Register",
             
            });
        } else {
            this.setState({
                login: "Register",
                // value: 0,
               

            });

        }
    }
	




	RegisterValidate1() {

		let fields = this.state.fields;
		let errors = {};
		let Registervalide1 = true;

		if (!fields["username"]) {
			Registervalide1 = false;
			errors["username"] = "*Please enter your username.";
		}

		if (typeof fields["username"] !== "undefined") {
			if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
				Registervalide1 = false;
				errors["username"] = "*Please enter alphabet characters only.";
			}
		}




		if (!fields["email"]) {
			Registervalide1 = false;
			errors["email"] = "*Please enter your email-ID.";
		}

		if (typeof fields["email"] !== "undefined") {
			//regular expression for email validation
			var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
			if (!pattern.test(fields["email"])) {
				Registervalide1 = false;
				errors["email"] = "*Please enter valid email-ID.";
			}
		};


		if (!fields["password"]) {
			Registervalide1 = false;
			errors["password"] = "*Please enter your password.";
		}

		if (typeof fields["password"] !== "undefined") {
			if (!fields["password"].match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/)) {
				Registervalide1 = false;
				errors["password"] = "*Please enter secure and strong password.";
			}
		};


		if (!fields["Conform_password"]) {
			Registervalide1 = false;
			errors["Conform_password"] = "*Please enter your password.";
		}





		if (typeof fields["Conform_password"] !== "undefined") {
			if (!fields["Conform_password"].match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/)) {
				Registervalide1 = false;
				errors["Conform_password"] = "*Please enter secure and strong ConformPassword.";
			}



			if (fields["password"] != fields["Conform_password"]) {
				errors["Conform_password"] = "*Please password do not match.";
				Registervalide1 = false;
			}
			// return true;.. 
		};


		if (!fields["currency"]) {
			Registervalide1 = false;
			errors["currency"] = "*Please select your Currency.";
		};

		this.setState({
			errors: errors
		});
		return Registervalide1;
		




	}


	 Register2btn=(e)=>{
		 e.preventDefault();
		 

		const{login}=this.state.state;
		// if (this.RegisterValidate1()) {
		// 	let fields = {};
		// 	fields["username"] = "";
		// 	fields["password"] = "";
		// 	fields["email"] = "";
		// 	fields["currency"] = "";
		// 	fields["Conform_password"] = ""
		// 	this.setState({ fields: fields });


		  if(login==="Register2btn"){
			  this.setState({
				login:''
				  
			  })
		  }else{
			  this.setState({
				login:'Register2btn'
			  })
		  }

	//  }
	}

	 Registeralert=()=>{

		setTimeout(() => 
			this.setState({
				alertshow:!this.state.alertshow
			})
			
		, 3000);
		 


	 }
	


	render() {
		const { from } = this.props.location.state || { from: { pathname: '/' } };
	
		const { isLogged } = this.state;
	
		if (isLogged === true) {
		  this.props.history.push(from.pathname);
		}

		return (
			<Modal centeredaria-labelledby="contained-modal-title-vcenter" show={this.props.open} onHide={this.props.close} >





				<div tabindex="-1" role="dialog" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
					<div role="document">
						<div className="modal-content">
							<div className="signin-links">
								<ul className="nav nav-tabs" id="myTab" role="tablist">
									<li className="nav-item">
										
										{/* <a onClick={() => this.handleclick('Login')} className="nav-link active" id="signin-tab" data-toggle="tab" href="#signin" role="tab" aria-controls="signin" aria-selected="true">Sign In</a> */}
									


										<a onClick={this.login} className="nav-link active" id="signin-tab" data-toggle="tab" href="#signin" role="tab" aria-controls="signin" aria-selected="true">Sign In</a>
									
									
									</li>
									<li class="nav-item">
										{/* <a className="nav-link" onClick={() => this.handleclick('Register')} id="register-tab" data-toggle="tab" href="#register" role="tab" aria-controls="register" aria-selected="false">Register</a> */}
									
										<a className="nav-link" onClick={this.Register} id="register-tab" data-toggle="tab" href="#register" role="tab" aria-controls="register" aria-selected="false">Register</a>
									
									
									</li>
								</ul>
							</div>



							<div className="tab-content" id="myTabContent">
								<div className="tab-pane fade show active"  role="tabpanel" aria-labelledby="signin-tab">

									{/* alerts bootstrap */}


                                  
	}



								{this.state.login === "login" && 	<div>

								{this.state.alertshow &&

							<div >

							<p>{this.state.errorstring} ,
							
						</p>
						<p>{this.state.messages} </p>
					
								</div>}


                       {/* {this.state.alertshow &&

						<div class="alert alert-success" role="alert">
							{this.state.messages} 
						
							</div>} */}



									<div className="modal-header px-4 pt-5" id="signin">
										<h5 className="modal-title" id="exampleModalCenterTitle">Sign in to your account</h5>
									</div>
									<div className="modal-body px-4">

								<div>	<span style={{ color: 'red' }}>{this.state.error}</span></div>


										<form onSubmit={this.handlelogin}>
											<div className="form-group">
												<input

													type="text" name="user_name" value={this.state.fields.user_name} onChange={this.loginchange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username" />
												<div className="errorMsg">{this.state.errors.user_name}</div>
											</div>
											<div className="form-group">
												<input type="password"

													name="pass_word" value={this.state.fields.pass_word} onChange={this.loginchange} className="form-control" id="exampleInputPassword1" placeholder="Password" />

												<div className="errorMsg">{this.state.errors.pass_word}</div>

											</div>
											<div className="text-center">
												<button type="submit" className="btn btn-secondary">Login</button>


											</div>
											<span style={{ color: 'red' }}>{this.state.message}</span>

									
										</form>


									</div>
									<div className="modal-footer clearfix px-4 pb-4">
										<div className="float-left">

											<a href="#">Forgot Password?</a>
										</div>
										<div className="float-right">
											<a href="#">Join Now</a>
										</div>
									</div>

									{/* <Signup/> */}
								</div>}

								
								</div>
								{this.state.login === "Register" && <div id="register-step1" role="tabpanel" aria-labelledby="register-tab">


								
									<div className="modal-header px-4 pt-5">
																						
												
											<h5 className="modal-title" id="exampleModalCenterTitle">Registration</h5>

									</div>
									
									<div className="modal-body px-4">
										<form >
											<div className="form-group">
												<input

													type="text" name="username" value={this.state.fields.username} onChange={this.handlechange} className="form-control" aria-describedby="emailHelp" placeholder="Username" />
												<div className="errorMsg">{this.state.errors.username}</div>

											</div>

											<div className="form-group">
												<input


													type="email" name="email" value={this.state.fields.email} onChange={this.handlechange} className="form-control" placeholder="email" />
												<div className="errorMsg">{this.state.errors.email}</div>

											</div>
											<div className="form-group">
												<input

													type="password" name="password" value={this.state.fields.password} onChange={this.handlechange} className="form-control" placeholder="Password" />
												<div className="errorMsg">{this.state.errors.password}</div>


											</div>
											<div className="form-group">
												<input type="password" name="Conform_password" value={this.state.fields.Conform_password} onChange={this.handlechange} className="form-control" placeholder="Conform_password" />
												<div className="errorMsg">{this.state.errors.Conform_password}</div>
											</div>



											<div className="form-group">
												<select name="currency" value={this.state.fields.currency} onChange={this.handlechange} className="form-control" >
													<option>inr</option>
													<option>usd</option>
													<option >aud</option>

													{/* {this.state.data && data.map(object => (
														 <option>{object.currency}</option>
														 ))} 
														 */}
												</select>
												<div className="errorMsg">{this.state.errors.currency}</div>
											</div>
											<div className="text-center">
												<button  type="submit" className="btn btn-secondary"  onClick={this.Register2btn} >Next</button></div>
										</form>
									</div>

									<div className="modal-footer clearfix px-4 pb-4">
										<div className="float-left">
											Already have an account? <a href="#">Sign In</a>
										</div>
										<div className="float-right">
										</div>
									</div>
								</div>}



								{this.state.login === "Register2btn" &&
								
								 <div id="register-step2" class="modal-body px-4">

							
									<div className="modal-header px-4 pt-5">


										<h5 className="modal-title" id="exampleModalCenterTitle">Registration</h5>
									</div>
									<form onSubmit={this.handleRegister} >
										<div class="row">
											<div class="col-md-6">

												<div class="form-group">


													<input

														type="text" value={this.state.fields.first_name} name="first_name" onChange={this.handlechange} class="form-control" placeholder="First Name" />
													<div className="errorMsg">{this.state.errors.first_name}</div>
												</div>

											</div>
											<div class="col-md-6">

												<div class="form-group">
													<input

														type="text" value={this.state.fields.last_name} name="last_name" onChange={this.handlechange} class="form-control" placeholder="Last Name" />
													<div className="errorMsg">{this.state.errors.last_name}</div>
												</div>

											</div>
										</div>
										<div class="row">
											<div class="col-md-6">
												<div class="form-check form-check-inline">
													<input name="gender" value="m" checked={this.state.fields.gender === 'm'} onChange={this.handlechange} className="form-check-input" type="radio" id="gender" />
													<label style={{ color: 'white' }} class="form-check-label">Male</label>
												</div>

												<div class="form-check form-check-inline">
													<input

														name="gender" value="f" checked={this.state.fields.gender === 'f'} onChange={this.handlechange} className="form-check-input" type="radio" id="gender" />
													<label style={{ color: 'white' }} class="form-check-label">Female</label>

												
												</div>
												<div className="errorMsg">{this.state.errors.gender}</div>
											</div>
											<div class="col-md-6">

												<div class="form-group">
													<input

														name="date_of_birth" value={this.state.fields.date_of_birth} type="text" onChange={this.handlechange} className="form-control" placeholder="yyy-mm-dd" />
													<div className="errorMsg">{this.state.errors.date_of_birth}</div>

												</div>

											</div>
										</div>
										<div class="form-group">
											<select name="country" value={this.state.fields.country} onChange={this.handlechange} class="form-control">
												<option>UK</option>
												<option>IN</option>
											</select>
											<div className="errorMsg">{this.state.errors.country}</div>
										</div>
										<div class="row">
											<div class="col-md-6">


												<div class="form-group">

													<input

														name="city" value={this.state.fields.city} type="text" onChange={this.handlechange} class="form-control" placeholder="City" />
													<div className="errorMsg">{this.state.errors.city}</div>
												</div>

											</div>
											<div class="col-md-6">
												<div class="form-group">

													<input

														name="pincode" value={this.state.fields.pincode} type="text" onChange={this.handlechange} class="form-control" placeholder="Pin Code" />
													<div className="errorMsg">{this.state.errors.pincode}</div>
												</div>


											</div>
										</div>
										<div class="form-group">
											<input

												name="state" value={this.state.fields.state} type="text" onChange={this.handlechange} class="form-control" placeholder="state " />
											<div className="errorMsg">{this.state.errors.state}</div>
										</div>

										<div class="form-group">
											<input

												name="address" value={this.state.fields.address} type="text" onChange={this.handlechange} class="form-control" placeholder="Address" />
											<div className="errorMsg">{this.state.errors.address}</div>
										</div>
										<div class="form-group">
											<input


												name="phone_number" value={this.state.fields.phone_number} type="text" onChange={this.handlechange} class="form-control" placeholder="Mobile" maxLength={10} />
											<div className="errorMsg">{this.state.errors.phone_number}</div>
										</div>
										<div style={{ color: 'white' }} class="form-group">
											<input type="checkbox" checked={this.state.isChecked} onChange={this.handlechange} type="checkbox" required />

											I agree to Terms &amp; Conditions and Privacy Policy
								  </div>
										<div class="text-center">

											<button type="submit"   id ="next-tab" class="btn btn-secondary">Sign Up</button></div>
									</form>
								</div> }
								{/* } */}
								<div class="modal-footer clearfix">
								</div>

							</div>
						</div>
					</div>
				</div>

			</Modal>

		)
	}
}
export default withRouter(SignIn)
