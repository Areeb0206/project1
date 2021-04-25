import React from 'react';


import { Navbar } from 'react-bootstrap';

import { Link } from 'react-router-dom';


import './Navbar.css';  


function Navbr() {
  return(
     <div >

       <Navbar className="navbar">
            <div className="innavbar">
               <div className="project">

                 
                   <div className="logo"></div>
                </div>
               
               
                <div className="headings"> 
                       <Link to="/Home" className="contact">Contact</Link>
                       <Link to="/" className="link">About</Link>
                        
                           <Link to="/" className="link">Blog</Link>
                       <Link to="/" className="link">Home</Link>                         

                   

                  </div>    
           
             </div>
</Navbar>

</div>
    
    );

}

export default Navbr;
