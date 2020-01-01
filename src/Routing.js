import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Components/F3MainComponents/Home'
import About from './Components/F3MainComponents/About'
import Faq from './Components/F3MainComponents/Faq'
import Livecasino from './Components/F3MainComponents/Livecasino'
import TermsAndCondition from './Components/F3MainComponents/SubCompoents/TermsAndCondition'
import PrivacyPolicy from './Components/F3MainComponents/SubCompoents/PrivacyPolicy'
import Profile from './Components/F3web.accounts/Editprofile/Profile'
import Documents from './Components/F3web.accounts/Editprofile/Documents'

import Withdraw from './Components/F3web.accounts/Mywallet/Withdraw'
import BalanceHistory from './Components/F3web.accounts/Mywallet/BalanceHistory'
import Deposite from './Components/F3web.accounts/Mywallet/Deposit'
import Mybets from './Components/F3web.accounts/Mybets'
import Messages from './Components/F3web.accounts/Messages'
import ProtectedRoute from './Components/ServerApi/ProtectedRoute'
import SideNav from './Components/F3web.accounts/ACC_subComponents/SideNav'
import NavBar from './Components/F3web.accounts/ACC_subComponents/NavBar'
import Lobby from './Components/F3web.accounts/Lobby'
import Bonuses from './Components/F3web.accounts/Bonuses'
import Notifications from './Components/F3web.accounts/Editprofile/Notification'
import Changepassword from './Components/F3web.accounts/Editprofile/ChangePasswords'
import Game from './Components/F3_Game/Game'
import GameLobby from './Components/F3_Game/GameLobby'
 
const isLogged= localStorage.getItem('isAuth')
export default class Routing extends Component {



  render() {
    return (
      <BrowserRouter >

        <Route exact path='/' component={Home} />
        <Route path='/About' component={About} />
        <Route path='/Faq' component={Faq} />
        <Route path='/TermsAndCondition' component={TermsAndCondition} />
        <Route path='/PrivacyPolicy' component={PrivacyPolicy} />
       
       
        <Switch>
        <ProtectedRoute path='/LiveCasino' component={Livecasino} />
        
        <ProtectedRoute path='/Profile' component={Profile} />
        <ProtectedRoute path='/WithDraw' component={Withdraw} />
        <ProtectedRoute path='/Notification' component={Notifications} />
        <ProtectedRoute path='/Documents' component={Documents} />
        <ProtectedRoute path='/Bonuses' component={Bonuses} />
        <ProtectedRoute path='/BalanceHistory' component={BalanceHistory} />
        <ProtectedRoute path='/Changepassword' component={Changepassword} />

        <ProtectedRoute path='/Deposit' component={Deposite} />

        <ProtectedRoute path='/Mybets' component={Mybets} />

        <ProtectedRoute path='/Messages' component={Messages} />
        <ProtectedRoute path='/LobbyArena' component={Lobby} />
     
       <ProtectedRoute path ="/GameLobby" component={GameLobby}/>  

       <ProtectedRoute path ='/Game/:id' component={Game}/>
       </Switch>
      </BrowserRouter>




    )
  }
}
