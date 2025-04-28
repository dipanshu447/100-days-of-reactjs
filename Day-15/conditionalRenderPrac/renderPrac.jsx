function App() {
    const [unreadMessages, setUnreadMessages] = React.useState([])

    return (
        <div>
            {unreadMessages.length > 0 ? <h1>You have {unreadMessages.length} unread messages!</h1> : <p>You have no unread messages</p>}
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);