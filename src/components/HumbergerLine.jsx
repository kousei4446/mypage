import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

export default function HamburgerLine({isOpen,setIsOpen}) {
  return (
    <div>
        <MenuIcon onClick={()=>{setIsOpen(!isOpen)}} style={{display:"flex",justifyContent:"center",alignItems:"center",color:"white",height:"80%"}}/>
    </div>
  );
}
