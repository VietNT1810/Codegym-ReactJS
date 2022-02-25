import logo from './logo.svg';
import './App.css';
import { useState } from "react";

// DEMO
// function App() {
//   return (
//     <div className="App">
//       <button id="ClickMe" className="click-me">Click Me</button>
//     </div >
//   );
// }

//Thuchanh 1
// function App() {
//   const value = 0

//   return (
//     <div>
//       <h1>Default value</h1>
//       <div className="default-value">{value}</div>
//     </div>
//   );
// }

//Thuchanh 2

// function App() {
//   const [counter, setCounter] = useState(0);

//   return (
//     <div>
//       <h1>This is counter app</h1>
//       <div className="counter-value">Count: {counter}</div>
//       <button className="increment" onClick={() => setCounter(counter + 1)}>
//         Increment
//       </button>
//       <button className="decrement" onClick={() => setCounter(counter - 1)}>
//         Decrement
//       </button>
//     </div>
//   );
// }

//Thuchanh 3
function App() {
  return (
    <>
      <div className="app-pages">
        Hello world
      </div>
      <div className="app-pages">
        Hello world
      </div>
    </>
  )
}


export default App;
