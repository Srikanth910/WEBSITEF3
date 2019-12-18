import React, { Component } from 'react'
 import {Link} from 'react-router-dom'
 

export default class Footer extends Component {
    render() {
        return (
            
                <footer class="text-center">
			<div class="container">
				<div class="social-media mt-3">
					<a href="#" target="_blank" className="facebook"></a>
					<a href="#" target="_blank" className="twitter"></a>
					<a href="#" target="_blank" className="youtube"></a>
					<a href="#" target="_blank" className="instagram"></a>
				</div>
			</div>
			<div className="border-top">
				<div className="container">
					<div className="row py-4">
						<div className="col-12 col-md-6 text-left">
						<Link Link to={'/TermsAndCondition'}>Terms &amp; Conditions</Link> &nbsp; | &nbsp;<Link Link to={'/PrivacyPolicy'}>Privacy Policy</Link>
						</div>
						<div className="col-12 col-md-6 text-right">
							&copy; 2019 Fantastic 3
						</div>
					</div>
				</div>
			</div>
		</footer>
                

        )
    }
}
