import Joke from "./joke.jsx"
import JokesObj from './jokesdata.js'

export default function App() {
  let Jokes = JokesObj.map(n => {
    return <Joke
      setup={n.setup}
      punchline={n.punchline}
    />
  });
  return (
    <>
      <h1>Jokes</h1>
      {Jokes}
    </>
  )
}