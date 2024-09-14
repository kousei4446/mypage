import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import "./HumbergerLine.css"

export default function HamburgerLine({isOpen,setIsOpen}) {
  return (
    <div>
        {/* <MenuIcon onClick={()=>{setIsOpen(!isOpen)}} style={{display:"flex",justifyContent:"center",alignItems:"center",color:"white",height:"80%"}}/> */}
        <div className={`hamburger-menu ${isOpen ? 'open' : ''}`} onClick={()=>setIsOpen(prev=>!prev)}>
          <div className="line line1"></div>
          <div className="line line2"></div>
          <div className="line line3"></div>
      </div>
    </div>
  );
}
