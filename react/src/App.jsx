
import "./App.css"

import ProductTab from "./productTab"

import MsgBoxTab from "./MsgBoxTab"

import Button from "./Button"
import From from "./From"

// function Title() {
//   return <h1>Welcome to My App</h1>
// }

// function Description() {  
//   return <p>This is a simple React application.</p>
// }

// function App() {
//  // return <h1>hello world</h1>  simple return statement
//   return <Title /> //rendering the Title component
// }

//multiple chej rendering
// function App() {
//   return (
//     <div>
//       <Title />
//       <Description />
//         <Title />
//       <p>This is my first React application.</p>
//       <Description />
//     </div>
//   )
// }
function App() {
  return (
    <div>
      {/* <h2>Person Progress Cycle</h2>
      <ProductTab /> */}
      {/* <MsgBoxTab /> */}

      <Button />
      <From />
    </div>
  )
}

export default App
