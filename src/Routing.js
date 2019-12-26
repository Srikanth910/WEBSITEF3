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
import ChangePassword from './Components/F3web.accounts/Editprofile/ChangePassword'
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

export default class Routing extends Component {



  render() {
    return (
      <BrowserRouter >

        <Route exact path='/' component={Home} />
        <Route path='/About' component={About} />
        <Route path='/Faq' component={Faq} />
        <ProtectedRoute path='/LiveCasino' component={Livecasino} />
        <Route path='/TermsAndCondition' component={TermsAndCondition} />
        <Route path='/PrivacyPolicy' component={PrivacyPolicy} />
        <Route path='/Profile' component={Profile} />
        <Route path='/WithDraw' component={Withdraw} />
        <Route path='/Notification' component={Notification} />
        <Route path='/Documents' component={Documents} />
        <Route path='/Bonuses' component={Bonuses} />
        <Route path='/BalanceHistory' component={BalanceHistory} />
        <Route path='/Changepassword' component={ChangePassword} />

        <ProtectedRoute path='/Deposit' component={Deposite} />

        <ProtectedRoute path='/Mybets' component={Mybets} />

        <Route path='/Messages' component={Messages} />
        <ProtectedRoute path='/LobbyArena' component={Lobby} />
      </BrowserRouter>




    )
  }
}
