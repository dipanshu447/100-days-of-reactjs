// import React from "react"

// export default function App() {
//   const [result, setResult] = React.useState("Hello")

//   function handleClick() {
//     setResult("React state work");
//   }

//   return (
//     <main>
//       <h1 className="title">Is state important to know?</h1>
//       <button onClick={handleClick}>{result}</button>
//     </main>
//   )
// }


import { useState } from "react"

export default function App() {
    let [count, setCount] = useState(0);


    function add() {
      setCount(preval => preval + 1);
      setCount(preval => preval + 1);
      setCount(preval => preval + 1);
    }

    function sub() {
      setCount(preval => preval - 1);
      setCount(preval => preval - 1);
      setCount(preval => preval - 1);
    }

    return (
        <main className="container">
            <h1>Counter</h1>
            <div className="counter">
                <button onClick={sub} className="minus" aria-label="Decrease count">–</button>
                <h2 className="count">{count}</h2>
                <button onClick={add} className="plus" aria-label="Increase count">+</button>
            </div>
        </main>
    )
}

