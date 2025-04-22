export default function App() {
    function handleClick() {
        console.log("I was clicked!")
    }
    return (
        <>
            <img onMouseOver={handleClick}  src="https://i.pinimg.com/736x/d9/42/9a/d9429a6afccaa3a447344f17e1025e70.jpg" alt="quote-img" />
            <button onClick={handleClick}>Click me</button>
        </>
    )
}