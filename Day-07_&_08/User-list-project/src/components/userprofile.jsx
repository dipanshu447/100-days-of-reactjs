import Keyword from "./keywordContainer.jsx";

export default function User(data) {
    let userinterests = data.hobbies.map((interest, index) => {
        return <Keyword key={index+1} text={interest}/>
    })
    return (
        <section>
            <img src={data.profilePhoto} alt={`${data.name}-profile-photo`} />
            <div className="user">
                <div className="userInfo">
                    <span>{data.name}</span>
                    <small>{data.location}</small>
                </div>
                <div className="keywords">
                    {userinterests}
                </div>
            </div>
        </section>
    )
}