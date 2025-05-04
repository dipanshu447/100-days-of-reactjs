function App() {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(1)

    // React.useEffect(() => {
    //     (async function getData() {
    //         let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    //         let data = await response.json();
    //         setStarWarsData(data);
    //         console.log("Fetched");
    //     })()
    // },[])

    React.useEffect(() => {
        (async function getData() {
            let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${count}`);
            let data = await response.json();
            setStarWarsData(data);
            console.log("Fetched");
        })()
    },[count])
    
    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Data</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />)