import React, { Component } from 'react'

import {Link} from 'react-router-dom'


import $ from 'jquery'

import NavBar from './ACC_subComponents/NavBar'
import SideNav from './ACC_subComponents/SideNav'
import Footer from './ACC_subComponents/Footer'
import { GenerateroomIds } from '../ServerApi/ServerApi'
import Roombuttons from '../F3MainComponents/Roombutton'
export default class Lobby extends Component {

  handleUrl=()=>{
		this.props.history.push('/Game')
		
	}

    componentDidMount(){


        $(function () {
            'use strict'
          
            $('[data-toggle="offcanvas"]').on('click', function () {
              $('.offcanvas-collapse1').toggleClass('open')
            })
		  })
		  

		  
   GenerateroomIds().then( userroomids=>{
	console.log('roomids',userroomids)
}).catch(err=>{
	console.log('roomid errror',err)
})
	
    }


    render() {
        return (
            <div>
          
            <div className="container-fluid">
			<div className="row d-flex">
				<SideNav/>
				<div className="col-12 col-lg-9 px-0 bg " >
				<NavBar/>
           
				<Roombuttons/>
                            </div>

                            </div>
							
            </div>
            <Footer/>
            </div>
        )
    }
}
