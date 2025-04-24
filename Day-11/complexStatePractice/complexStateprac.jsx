function FavApp() {
    const [myFavoriteThings,setmyFavoriteThings] = React.useState([]);
    const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁",
        "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
    const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)
    console.log(thingsElements);
    function addFavoriteThing() {
        setmyFavoriteThings(prev => [...prev, allFavoriteThings[prev.length]])
    }

    return (
        <main>
            <button onClick={addFavoriteThing}>Add item</button>
            <section aria-live="polite">
                {thingsElements}
            </section>
        </main>
    )
}