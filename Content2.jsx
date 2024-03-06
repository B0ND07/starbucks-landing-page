import React from 'react'

function Content2() {
  return (
    <div className='containers'>
        
        <div className='image-div' style={{backgroundColor:"#006241"}}>
            <h1 className='center-text2'>Let’s celebrate</h1>
            <p className='center-text2'>Break for a classic Pumpkin Spice Latte<br/> <span style={{marginLeft:"30px"}}>topped with whipped cream and<br/> <span style={{marginLeft:"90px"}}>pumpkin-pie spices.</span></span></p>
            <button className='center-button' style={{backgroundColor:"#006241",color:"white",border: "2px solid #ffffff"}}>Find your favorite</button>
            
        </div>
        
        <div className='image-div' >
            <img style={{maxWidth:"100%",backgroundColor:"#006241",}} src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-87323.png"></img>
    
        </div>
        
        
        

    </div>
  )
}

export default Content2