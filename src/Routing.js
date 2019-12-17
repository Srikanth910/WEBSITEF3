import React, { Component } from 'react'
import { BrowserRouter, Route ,Switch} from 'react-router-dom'
import Home from './Components/F3MainComponents/Home'
import About from './Components/F3MainComponents/About'
import Faq from './Components/F3MainComponents/Faq'
import Livecasino from './Components/F3MainComponents/Livecasino'
import TermsAndCondition from './Components/F3MainComponents/SubCompoents/TermsAndCondition'
import PrivacyPolicy from './Components/F3MainComponents/SubCompoents/PrivacyPolicy'

export default class Routing extends Component {

  
  
  render() {
    return (
  <BrowserRouter >
  <switch>
       <Route exact path = '/' component = { Home }/>
        <Route path = '/About' component = {About }   />
       <Route path = '/FAQ'component = { Faq }/>
      <Route path = '/LiveCasino' component = { Livecasino } />
      <Route path='/TermsAndCondition' component= { TermsAndCondition }/>
      <Route path='/PrivacyPolicy' component= { PrivacyPolicy }/>  
      {/* <Route path='/Profile' component= { Profile }/>  
      <Route path='/WithDraw' component= { WithDraw }/>  
      <Route path='/Notifications' component= { Notifications }/> 
      <Route path='/Documents' component= { Documents }/> 
      <Route path='/Bonuses' component= { Bonuses }/> 
      <Route path='/BalanceHistory' component= { BalanceHistory }/> 
      <Route path='/Changepassword' component= { ChangePassword }/> 
      <Switch>
      <ProtectedRoute path='/Deposit' component= { Deposit }/> 
      </Switch>
      <ProtectedRoute path='/Mybet' component= { Mybet }/> 
     
    
      <Route path ="/SideBar" component ={SideBar}/>
      
      <Route path='/Messages' component= { Messages }/>
      <Route path='/Bar' component= { Bar }/>
     
      <Route path ='/FormModel' component={FormModel}/>
      <Route path ='/Singup' component ={Signup}/>
      <Route path ='/Lobby' component ={Lobby}/>
     */}
 </switch>
    
      
   
      </BrowserRouter>

  
  
  
    )
  }
}
