import React from "react";

const ChildComponant = ({sendToApp}) => {

  {/* const handleMsg =()=>{
    sendToApp("Hello Pappa from child...!")
   }  */}

    let son1='Tejas';
    let son2='Rohit';
    let son3='Ramesh';
    sendToApp("Hello Pappa from child...!" , son1, son2, son3)
    
  
    return(
   
        <div>

       {/* <button onClick={handleMsg}>Send msg to Pappa</button> */}

       <button onClick={()=>sendToApp("Hello Pappa from child...!")}>Send msg to Pappa</button>

        </div>


    );
}
  
export default ChildComponant
