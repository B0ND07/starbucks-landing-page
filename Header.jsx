import React from 'react'
import logo from "./pngegg.png"

function Header() {
  return (
    <div className='header-bg'>
      <div className='logo'>
      <img style={{width: "57px",height: "55px"}} src={logo} alt="logo"/>
      
      </div>
      <div className='head-form'>
      <ul className='menu' style={{paddingLeft:"30px"}}>
        <li className='navfont'>MENU</li>
        <li className='navfont' style={{paddingLeft:"20px"}}>REWARDS</li>
        <li className='navfont' style={{paddingLeft:"20px"}}>GIFT CARD</li>
        </ul>
      </div>
      <div className='button' style={{paddingLeft:"750px",display:"flex"}}>
        <button style={{width:"75px",height:"35px",borderRadius: "16px"}}>Sign In</button>
        <button style={{marginLeft:"20px",width:"75px",height:"35px",borderRadius: "16px",backgroundColor:"black",color:"white"}}>Join Now</button>
      </div>
    </div>
  )
}

export default Header