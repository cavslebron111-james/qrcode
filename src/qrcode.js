import React from 'react'
import QRCode from 'qrcode'

function qrcode() {
   
    const generateQR=()=> {
        let str = 'My first QR!'
        QRCode.toCanvas(document.getElementById('canvas'), str, function(error) {
        if (error) console.error(error)
        //console.log('success!')
        })
        }
   
   
    return (
<div>
     <canvas id="canvas" align="center" />
     <button onClick={this.generateQR}>
     Generate QR!
</button>
</div>
    )
}

export default qrcode
