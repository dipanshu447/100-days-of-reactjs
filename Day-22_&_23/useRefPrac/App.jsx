function App() {
    const [text, setText] = React.useState('');
    const count = React.useRef(0);
    const test = React.useRef();
    // console.log(test);
    
    React.useEffect(() => {
        // console.log(test.current.value);
    })

    function handle() {
        setText(test.current.value);
        // count.current = count.current + 1;
        count.current++;
    }
    
    return (
        <>
            <input ref={test} type="text" onChange={handle}/>
            <p>Count is {count.current}</p>
            <h1>{text}</h1>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);