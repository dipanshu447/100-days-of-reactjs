function App() {
    // let [count, setCount] = React.useState(0);
    // return (
    //     <>
    //         <h2>Hello {count} times</h2>
    //         <button onClick={() => setCount(prev => prev + 1)}>Click me</button>
    //     </>
    // )

    const [isGoingOut, setisGoingOut] = React.useState(false);
    return (
        <main>
            <h1 className="title">Do I feel like going out tonight?</h1>
            <button onClick={() => setisGoingOut(!isGoingOut)} className="value">{isGoingOut ? "Yes" : "No"}</button>
        </main>
    )
}