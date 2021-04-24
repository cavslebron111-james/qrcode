import React, { Component } from 'react';
import {Switch,Route} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import QRCode from 'qrcode';


class App extends Component {
   generateQR() {
    let str = 'eat my meat'
    QRCode.toCanvas(document.getElementById('canvas'), str, function(error) {
    if (error) console.error(error)
    //console.log('success!')
    })
    }
  
  render() {
    return (
      <div>
      <canvas id="canvas" align="center" />
      <button onClick={this.generateQR}>
      Generate QR!
 </button>
 </div>

    );
  }
}

export default App;
