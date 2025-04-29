function App() {
    const [userName, setUserName] = React.useState("Rahul")

    return (
        <main>
            <Header name={userName} />
            <Body  name={userName}/>
        </main>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)