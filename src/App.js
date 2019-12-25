import React, { Component } from 'react'

import Routing from './Routing'
import Navbar from './Components/F3MainComponents/SubCompoents/F3_Navbar'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Components/Redux/store'

export default class App extends Component {
  render() {
    return (
      <div>
        
        <Provider store={store}>
      <Routing/>

      </Provider>
     
      </div>
    )
  }
}
