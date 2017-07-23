import React, { Component } from 'react';

import logo from '../styles/logo.svg';

export default class NavBar extends Component {
     render (){
          return (
                    <div className="navbar custom_navbar">
                         <img src={logo} className="App-logo" alt="logo" />
                         <h2 className="App-header">Play What?!</h2>
                    </div>
          )
     }
}
