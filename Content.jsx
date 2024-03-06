import React from 'react'
import './SB.css'

function Content() {
  return (
    <div className='containers'>
        <div className='image-div'>
            <img style={{maxWidth:"100%",height:"100%"}} src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-86159.jpg"></img>
        </div>
        <div className='image-div' style={{backgroundColor:"#d69a2d"}}>
            <h1 className='center-text'>Long Live Pumpkin</h1>
            <p className='center-text'>Break for a classic Pumpkin Spice Latte<br/> <span style={{marginLeft:"30px"}}>topped with whipped cream and<br/> <span style={{marginLeft:"90px"}}>pumpkin-pie spices.</span></span></p>
            <button className='center-button'>Order Now</button>
        </div>
        
        

    </div>

    
  )
}

export default Content