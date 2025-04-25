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

    let startIcon = contact.isFavorite ? "https://img.icons8.com/?size=100&id=7856&format=png&color=000000" : "https://img.icons8.com/?size=100&id=104&format=png&color=000000";

    return (
        <main>
            <article className="card">
                <img
                    src="https://i.pinimg.com/736x/a1/7b/96/a17b960dd2b5343b168cf1740e30d8e3.jpg"
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">
                    <button
                        onClick={toggleFavorite}
                        aria-pressed={contact.isFavorite}
                        aria-label={contact.isFavorite ? "Remove from favorites" : "Add to favorites"}
                        className="favorite-button"
                    >
                        <img
                            src={startIcon}
                            alt={contact.isFavorite ? "filled star icon" : "empty star icon"}
                            className="favorite"
                        />
                    </button>
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