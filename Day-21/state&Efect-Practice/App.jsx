function App() {
    const [show, setShow] = React.useState(true);
    
    return (
        <main className="container">
            <button onClick={() => setShow(prev => !prev)}>
                Toggle WindowTracker
            </button>
            {show && <WindowTracker />}
        </main>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)