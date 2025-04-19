import marker from '../assets/marker.png'

export default function Entry(entry){
    return (
        <article>
            <img src={entry.img.src} alt={entry.img.alt} />
            <div className="details">
                <div className="location-details">
                    <div className="location">
                        <div className="country">
                            <img src={marker} alt="marker-icon" />
                            <span>{entry.country}</span>
                        </div>
                        <a href={entry.googleMapsLink} target='_blank'>View on Google Maps</a>
                    </div>
                    <h1>{entry.title}</h1>
                </div>
                <div className="info">
                    <div className="dates">{entry.dates}</div>
                    <div className="about">{entry.text}</div>
                </div>
            </div>
        </article>
    )
}