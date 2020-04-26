import React from "react";


<div className="App">
     <div className="Sign_in">
       <div className="container">
       <div>
         {isLoginActive && <Sign_in containerRef={(ref)=> this.current= ref}/>}
         {!isLoginActive && <Register containerRef={(ref)=> this.current= ref}/>}
     
     
       
    </div>
       </div>
     </div>
   </div>