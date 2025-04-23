import { useState } from "react"

export default function App() {
    let [darkMode, setdarkMode] = useState(false);

    function toggleTheme() {
        setdarkMode(prev => !prev)
    }

    let [input, setInput] = useState("");

    function update(text) {
        setInput(text);
        // console.log(text);
    }

    return (
        <div className="f" style={{ filter: darkMode ? "invert(1)" : "invert(0)" }}>
            <img onClick={toggleTheme} src="https://img.icons8.com/?size=100&id=45475&format=png&color=000000" alt="moon" />
            <input type="text" onChange={e => update(e.target.value)} />
            <p>{input}</p>
        </div>
    )
}