import { BrowserRouter, Routes, Route, Link, useSearchParams } from "react-router-dom";

function Home() {
  return (
    <h1>Hello React Router</h1>
  )
}

function About() {
  return (
    <>
      <h1>Hello You</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis amet iusto beatae ipsum voluptatum reprehenderit sapiente assumenda ut explicabo nemo praesentium eaque, quasi, laborum sed corporis quia nihil debitis doloribus.</p>
    </>
  )
}

const swCharacters = [
  { name: "Luke Skywalker", type: "Jedi" },
  { name: "Darth Vader", type: "Sith" },
  { name: "Emperor Palpatine", type: "Sith" },
  { name: "Yoda", type: "Jedi" }
]

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const typeFilter = searchParams.get("type")

  const displayedCharacters = typeFilter
    ? swCharacters.filter(char => char.type.toLowerCase() === typeFilter)
    : swCharacters

  const charEls = displayedCharacters
    .map(char => (
      <div key={char.name}>
        <h3
          style={{ color: char.type.toLowerCase() === "jedi" ? "blue" : "red" }}
        >
          Name: {char.name}
        </h3>
        <p>Type: {char.type}</p>
        <hr />
      </div>
    ));

  // To merge different search parameters, we manually handle the merging using URLSearchParams
  // Manually merge or update search parameters without losing existing ones
  function handleSearchparam(type, value) {
    const newsearchparam = new URLSearchParams(searchParams);

    if (value) {
      newsearchparam.set(type, value);
    } else {
      newsearchparam.delete(type);
    }

    return `?${newsearchparam.toString()}`
  }

  // Another easy way to do this is using setsearchparams
  function updatesearchparam(type, value) {
    setSearchParams(prev => {
        const newparams = new URLSearchParams(prev);
        if(value){
          newparams.set(type,value);
        }else {
          newparams.delete(type);
        }
        return newparams;
      })
  }

  return (
    <main>
      <h2>Home</h2>
      <div>
        <button onClick={() => updatesearchparam("type", "jedi")}>Jedi</button>
        <button onClick={() => updatesearchparam("type", "sith")}>Sith</button>
        <button onClick={() => updatesearchparam("type", null)}>Clear</button>
      </div>
      <hr />
      {charEls}
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      {/* <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
            </Routes> */}
      <Routes>
        <Route path="/characters" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}