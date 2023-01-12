
// import React from "react";
import './App.css';
import Fcomp from "./Fcomp";
import Ccomp from "./Ccomp";
import React, { useState } from "react"




 
 const App = () => {

  const[show, setShow] = useState(false);
  const[show1, setShow1] = useState(false);

   return (
     <div>
      <h1 id="head">Styling Using Functional and Class Component</h1>
    
      
  
         <button id="btn1" type = "button" onClick={()=>setShow(!show)}>To see styling in functional component</button>
         <button id="btn2" type = "button" onClick={()=>setShow1(!show1)}>To see styling in class component</button>
        
       {show && <Fcomp />}
      {show1 && <Ccomp />}

              </div>
   )
 }
 
 export default App;
//  class App extends React.Component {

//   constructor(){
//     super();
//     this.state = {
//       Fcomp:false,
//       Ccomp:false
//     }
//    }
//   render(){
        
  
//     return (
//       <div className="App">
        
//         <h1 id="head">Styling Using Functional and Class Component</h1>
  
//         <button >To see styling in functional component</button>
//         <button>To see styling in class component</button>
      
//     <Fcomp />
//     <Ccomp />
//       </div>

//      )
//   }
  
// }

// export default App;



