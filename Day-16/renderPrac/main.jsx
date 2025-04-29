function App() {
    const [messages, setMessages] = React.useState(["a","b"])
    let status;
    // if(messages.length === 0) {
    //     status = "You're all caught up!";
    // }
    // else if(messages.length === 1) {
    //     status = "You have 1 unread message (singular)";
    // }
    // else {
    //     status = `You have ${messages.length} unread messages`;
    // }
    if(messages.length === 0) {
        status = <h1>You're all caught up!</h1>;
    }
    else if(messages.length === 1) {
        status = <h1>You have 1 unread message (singular)</h1>;
    }
    else {
        status = <h1>You have {messages.length} unread messages </h1>;
    }


    return (
        <div>
            {/* <h1>{status}</h1> */}
            {status}
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);