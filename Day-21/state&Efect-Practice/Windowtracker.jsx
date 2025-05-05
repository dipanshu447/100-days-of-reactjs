function WindowTracker() {
    const [windowSize, setWindowSize] = React.useState(window.innerWidth);

    function eventChage(){
        setWindowSize(window.innerWidth)
        console.log("Resized");
    }

    React.useEffect(() => {
        window.addEventListener("resize",eventChage)
        return () => { // clean up function when component gets dismount
            console.log("clean up");
            window.removeEventListener("resize",eventChage);
        }
    },[])

    return (
        <h1>Window width: {windowSize}</h1>
    )
}
