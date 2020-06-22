import React from 'react';
export  const Header= (props) =>{
    return(
           <div>
               <h3 className="bg-warning text-primary">{props.company} - {props.city}</h3>           
            </div>
  
    )
 }
 Header.defaultProps = {
     company : "No Company"
 }

// Stateless Functional component - Presentation