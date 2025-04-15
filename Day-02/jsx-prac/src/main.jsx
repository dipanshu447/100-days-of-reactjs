import { createRoot } from "react-dom/client";
import reactLogo from "./assets/react.svg";
import "./index.css";

const root = createRoot(document.getElementById('root'));
root.render(
  <main>
    <img src={reactLogo} width="50px" />
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walkie</li>
      <li>Has well over 100k stars on Github</li>
      <li>Is well maintained by Meta</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </main>
)

// const root = createRoot(document.getElementById("root"))

// function HeadImg() {
//     return (
//         <header>
//             <img src={reactLogo} width="50px" alt="react-logo" />
//         </header>
//     )
// }


// function Foot() {
//     return (
//         <footer>
//             <strong>
//                 <i>© 2025 meee development. All rights reserved.</i>
//             </strong>
//         </footer>
//     )
// }

// function Page() {
//     return (
//         <ol>
//             <li>React is a popular library, so I will be able to
//                 fit in with all the coolest devs out there! 😎</li>
//             <li>I am more likely to get a job as a front end developer
//                 if I know React</li>
//         </ol>
//     )
// }

// function Main() {
//     return (
//         <main>
//             <h1>Reasons : I'm excited to learn React</h1>
//             <Page />
//         </main>
//     )
// }

// root.render(
//     <div>
//         <HeadImg />
//         <Main />
//         <Foot />
//     </div>
// )