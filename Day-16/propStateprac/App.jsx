function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })

    function toggleFavorite() {
        setContact(prev => ({...prev, isFavorite: !prev.isFavorite}))
    }

    /**
     * Challenge: Move the star image into its own component (Star)
     * - It should receive a prop called `isFilled` that it
     *   uses to determine which icon it will display. (You'll
     *   need to import the 2 star icons into that new component first).
     * - Import and render that component, passing the value of
     *   `isFavorite` to the new `isFilled` prop.
     * - Don't worry about the abiliity to flip this value quite yet.
     *   Instead, you can test if it's working by manually changing
     *   `isFavorite` in state above.
     */

    return (
        <main>
            <article className="card">
                <img
                    src="https://i.pinimg.com/736x/a1/7b/96/a17b960dd2b5343b168cf1740e30d8e3.jpg"
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">
                    <Star isFavorite={contact.isFavorite} clickFuc={toggleFavorite}/>
                    <h2 className="name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);