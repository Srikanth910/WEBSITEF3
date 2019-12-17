import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import  $ from 'jquery'
import Modelpopup from './HocModel/Modelpopup'
import Footer from './SubCompoents/Footer'


 class Faq extends Component {
    
	
    constructor(props) {
        super(props)
    
        this.state = {
             Name:'Login',
             CollapseId:'collapse',
             collapseID1:true,

           
  
              }
           
    }
    // getInitialState() {
    //    return { showModal: false };
    //  }	
   



 


toggleCollapse =(collapseID,) =>{
this.setState(prevState => ({
  collapseID: prevState.collapseID !== collapseID ? collapseID : "",
 
}));

}


toggleCollapse1 =( collapseID1) =>{
    this.setState(prevState => ({
    //   collapseID: prevState.collapseID !== collapseID ? collapseID : "",
      collapseID1:prevState.collapseID1 !== collapseID1 ? collapseID1: ""
    }));
    
    }



    componentDidMount(){
        $(function () {
            'use strict'
          
            $('[data-toggle="offcanvas"]').on('click', function () {
              $('.offcanvas-collapse1').toggleClass('open')
            })
          })


        //   $(document).ready(function(){
            // $('.slide').hide();  

        $(".accordion_head ").click(function() {
           

            if ($('.accordion_body').is(':visible')) {
              $(".accordion_body").slideUp(300);
            //   $(".plusminus").text('+');
            }
            if ($(this).next(".accordion_body").is(':visible')) {
              $(this).next(".accordion_body").slideUp(300);
            //   $(this).children(".plusminus").text('+');
                  
            } else {
              $(this).next(".accordion_body").slideDown(300);
            //   $(this).children(".plusminus").text('-');
            }
          });
        // });
    }
    // openModal=(e)=> {
	// 	console.log('hello')
	// 	 e.preventDefault();
	// 	 this.setState({modalIsOpen: true});
	//    }
 
	//  closeModal=(e)=> {
		
		 
	// 	 this.setState({modalIsOpen: false});
	//    }



   
    render() {
       
        const { collapseID,collapseID1 } = this.state;

        return (
            <div>

                
				<header className="mt-2 mt-sm-4 fixed-top">
					<div className="container-fluid px-0 text-center">
						<a href="#" role="button" class="sign-in" data-toggle="modal" onClick={this.props.showmodel} data-target="#exampleModalCenter">Sign In / Register</a>
						{/* <FormModel open={this.state.modalopen} close={this.closeModal}/> */}
						<nav className="navbar navbar-expand-lg orange-bg mt-4 mt-md-5">
							<Link Link to={'/'} className="navbar-brand">
								<img src={process.env.PUBLIC_URL + "/logo.png"} className="d-none d-sm-none d-md-block" alt="Fantastic 3" />
								<img src={process.env.PUBLIC_URL + "/logo-m.png"} className="d-block d-sm-none" alt="Fantastic 3" />

							</Link>
							<button className="navbar-toggler" type="button" data-toggle="offcanvas">
								<span className="navbar-toggler-icon"></span>
							</button>
							<div className="navbar-collapse offcanvas-collapse1" id="collapsingNavbar">
								<ul className="navbar-nav mr-5 ml-auto">
									<li className="nav-item active">
										<Link className="nav-link " Link to={'/'}>Home</Link>
									</li>
									<li className="nav-item">

										<Link className="nav-link  " Link to={'/About'}>About Us</Link>
									</li>
								</ul>
								<ul className="navbar-nav ml-5 mr-auto">
									<li className="nav-item">

										<Link className="nav-link " Link to={'/LiveCasino'}>Live Casino</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link active " Link to={'/FAQ'}>Faq</Link>
									</li>

								</ul>
							</div>
						</nav>
					</div>
				</header> 

        
        {/* <Navbar/> */}


        <div id="carouselExampleIndicators" className="carousel inner slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active text-center">

                </div>
            </div>
        </div>









        <section className="block dark-blue-bg">
            <div className="container-fluid pb-5">
                <h1 className="h1">FAQ</h1>
                <div className="row justify-content-md-center pb-5">
                    <div className="col-12 col-lg-6 px-4 px-sm-5">
                        <h2 className="orange">Registration</h2>

                        <div className="accordion" id="accordion1">
                            <div className="card">

                                <div className="card-header" id="headingOne">
                                    <h5 className="mb-0">
                                        <button   onClick={() => this.toggleCollapse('collapse1')}  className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                                        </button>
                                    </h5>
                                </div>
                                
                              {collapseID==='collapse1'  && <div  aria-labelledby="headingOne" data-parent="#accordion1">
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                         terry richardson ad squid. 3 wolf moon officia aute, non cupidatat 
                                         skateboard dolor brunch. 
                                         Food truck quinoa nesciunt laborum eiusmod. 
                                         Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>}
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingTwo">
                                    <h5 className="mb-0">
                                        <button onClick={() => this.toggleCollapse('collapse2')}  className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                                        </button>
                                    </h5>
                                </div>
                                {collapseID ==='collapse2' ?    <div >
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>:null}
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingThree">
                                    <h5 className="mb-0">
                                        <button  onClick={() => this.toggleCollapse('collapse3')}  className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                                        </button>
                                    </h5>
                                </div>
                                {collapseID ==='collapse3'  ?  <div>
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>:null}
                                
                            </div>
                            
                            
                        </div>
                        
                    </div>

                 

                    {/* placing accordin */}

                    <div className="col-12 col-lg-6 px-4 px-sm-5">
                        <h2 className="orange">Placing bet &amp; Settlement</h2>
                        <div className="accordion" id="accordion2">
                            <div className="card">
                                <div className="card-header" id="headingFour">
                                <h5 className="mb-0">
                                        <button   onClick={() => this.toggleCollapse1('collapse4')}  className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                                        </button>
                                    </h5>
                                </div>
                                
                              {collapseID1==='collapse4'  && <div >
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>}
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingTwo">
                                    <h5 className="mb-0">
                                        <button onClick={() => this.toggleCollapse1('collapse5')}  className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                                        </button>
                                    </h5>
                                </div>
                                {collapseID1 ==='collapse5' &&    <div >
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>}
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingThree">
                                    <h5 className="mb-0">
                                        <button  onClick={() => this.toggleCollapse1('collapse6')}  className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                                        </button>
                                    </h5>
                                </div>
                                {collapseID1 ==='collapse6'  &&  <div>
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>}
                                   
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Live */}
            <div className="container-fluid dashed-border pt-5">
                <div className="row justify-content-md-center py-5">
                    <div className="col-12 col-lg-6 px-4 px-sm-5">
                        <h2 className="orange">Live Bet</h2>
                      
                        <div className="accordion" id="accordion1">
                            <div className="card">

                                <div className="card-header accordion_head" id="headingOne">
                                    <h5 className="mb-0">
                                        {/* <button   onClick={() => this.toggleCollapse('collapse1')}  className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                                        </button> */}
                                        <button   className="btn btn-link " type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                                        </button>
                                    </h5>
                                </div>
                                
                              {/* {collapseID==='collapse1'  && <div  aria-labelledby="headingOne" data-parent="#accordion1">
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>} */}
                               <div id="collapseSeven" class="collapse show accordion_body " aria-labelledby="headingSeven" data-parent="#accordion3">
									<div class="card-body">
										Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
									</div>
								</div>
                            </div>
                            <div className="card">
                                <div className="card-header accordion_head " id="headingTwo">
                                    <h5 className="mb-0">
                                        {/* <button onClick={() => this.toggleCollapse('collapse2')}  className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                                        </button> */}
                                        <button   className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                                        </button>
                                    </h5>
                                </div>
                                {/* {collapseID ==='collapse2' ?    <div >
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>:null} */}
                             <div id="collapseEight" class="collapse accordion_body " aria-labelledby="headingEight" data-parent="#accordion3">
									<div class="card-body">
										Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
									</div>
								</div>
                            </div>
                            <div className="card">
                                <div className="card-header accordion_head" id="headingThree">
                                    <h5 className="mb-0">
                                         {/* <button  onClick={() => this.toggleCollapse('collapse3')}  className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                                        </button>  */}
                                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                                        </button> 
                                        
                                    </h5>
                                </div>
                                {/* {collapseID ==='collapse3'  ?  <div>
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>:null} */}
                             <div id="collapseNine" class="collapse accordion_body " aria-labelledby="headingNine" data-parent="#accordion3">
									<div class="card-body">
										Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
									</div>
								</div>

                                
                            </div>
                            
                            
                        </div>
                        
                    </div>

                 



                    
                    <div className="col-12 col-lg-6 px-4 px-sm-5">
                        <h2 className="orange">Casino</h2>
                        <div className="accordion" id="accordion4">
                            <div className="card">
                                <div className="card-header  accordion_head" id="headingTen">
                                    <h5 className="mb-0   ">
                                        <button  className="btn btn-link collapsed " type="button" data-toggle="collapse" data-target="#collapseTen" aria-expanded="true" aria-controls="collapseTen">
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                                    
                                        </button>

                                        
                                    </h5>
                                </div>
                                <div id="collapseTen" className="accordion_body " aria-labelledby="headingTen" data-parent="#accordion4">
                                    <p className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header accordion_head " id="headingEleven">
                                    <h5 className="mb-0 ">
                                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseEleven" className="accordion_body  slide collapse " aria-labelledby="headingEleven" data-parent="#accordion4">
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header accordion_head" id="headingTwelve">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link collapsed " type="button" data-toggle="collapse" data-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseTwelve" className="accordion_body  slide collapse" aria-labelledby="headingTwelve" data-parent="#accordion4">
                                    <div className="card-body content">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 
                                        3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. 
                                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. 
                                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur 
                                        butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't 
                                        heard of them accusamus labore sustainable VHS.
                                    </div>

                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="px-3 py-3 px-sm-5 py-sm-5 green-bg">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6"><h1 class="black">Live Dealer Game</h1></div>
                    <div className="col-12 col-md-6 text-center"> <Link className="btn-block"Link to={'/Deposit'}>Deposit</Link>
           </div>
                </div>
            </div>
        </section>

        <Footer/>


</div>


        )
    }
}

export default Modelpopup(Faq)