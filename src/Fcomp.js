import React from 'react'
import './Fcomp.css';

function Fcomp() {

  
  return (
    <div className='csspart'>
        <h1>This is created using functional component</h1>
        <p>This is done using external CSS</p>
        <p style={{color:"blue"}}>This is done using inline CSS</p>
    </div>
  )
}

export default Fcomp;