// import {useState} from 'react'

// const App = () => {

//      let [color , setcolor] = useState("red")
  
//   function fun1() {
//     setcolor("blue") 
//   }
//   function fun2() {
//     setcolor("green") 
//   }
//   function fun3() {
//     setcolor("yellow") 
//   }
//   return (
//     <div style={{backgroundColor:color , height:"100vh"}}>
//       <button onClick={fun1}>Change Color</button>
//       <button onClick={fun2}> Change Color</button>
//       <button onClick={fun3}> Change Color</button>

//       {/* <h3>{count}</h3>
//       <button onClick={fun1}>Click me</button> */}
//       {/* <h1>Hello, World!</h1>
//       <p>Welcome to my React app.</p> */}
//     </div>
//   )
// }

// export default App


import React from 'react'
import Home from './Home'


const App = () => {
  return (
    <div>
      <Home />

    </div>
  )
}

export default App