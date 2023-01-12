import React, { Component } from 'react'
import "./Ccomp.css";

export class Ccomp extends Component {
  render() {
    return (
      <div className='csspart2'>
       <h1>This is created using class component</h1>
        <p>This is done using external CSS</p>
        <p style ={{color:"blue"}}>This is done using inline CSS</p>
      </div>
    )
  }
}

export default Ccomp;