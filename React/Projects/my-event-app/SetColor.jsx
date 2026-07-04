import React, { useState } from 'react'

const SetColor = () => {

    let [color , setColor] = useState('')

  return (
    <div>
      
      enter color : <input type="text" onChange={(e)=>setColor(e.target.value)} />

<br /><br />
      <div
      style={{
        backgroundColor : color , 
        height: "100px" , 
        width : "100px"
      }}
      ></div>

      <br /><br />
    </div>
  )
}

export default SetColor
