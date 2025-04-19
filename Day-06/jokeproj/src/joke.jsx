export default function Joke({setup, punchline,upvote,downvote}){
    return (
        <>
            <div className="joke">
                {setup && <p>Setup: {setup}</p>}
                <p>Punchline: {punchline}</p>
                {/* <div className="votes">
                    <div className="vote">
                        <img src="https://img.icons8.com/?size=100&id=JD2A4WXqotI8&format=png&color=000000"/> 
                        <p>{upvote}</p>
                    </div> 
                    <div className="vote">
                        <img src="https://img.icons8.com/?size=100&id=8378&format=png&color=000000" /> 
                        <p>{downvote}</p>
                    </div>
                </div> */}
            </div>
        </>
    )
}