export default function Contact({img, name, phone, email}) {
    return (
        <article className="contact-card">
            <img
                src={img}
                alt="Photo of Mr. Whiskerson"
            />
            <h3>{name}</h3>
            <div className="info-group">
                <img
                    src="https://img.icons8.com/?size=100&id=78382&format=png&color=000000"
                    alt="phone icon"
                />
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <img
                    src="https://img.icons8.com/?size=100&id=53435&format=png&color=000000"
                    alt="mail icon"
                />
                <p>{email}</p>
            </div>
        </article>
    )
}