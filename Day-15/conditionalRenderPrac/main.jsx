function App() {
    const jokeElements = jokesData.map(joke => {
        return (
            <Joke 
                key={joke.id}
                setup={joke.setup} 
                punchline={joke.punchline} 
            />
        )
    })
    return (
        <div>
            {jokeElements}
        </div>
    )
}

function Joke(props) {
    let [isShown, setIsShown] = React.useState(false);

    function handleClick() {
        setIsShown(prev => !prev);
    }
    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            <button onClick={handleClick}>{isShown ? "Hide punchline" : "Show punchline"}</button>
            <hr />
        </div>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App />);