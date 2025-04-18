import Contact from "./contact.jsx"

function App() {
    return (
        <div className="contacts">
            <Contact 
                img="https://i.pinimg.com/736x/3b/0a/d6/3b0ad67347c29377d4756db256df12f9.jpg"
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact 
                img="https://i.pinimg.com/736x/94/57/80/945780fbf04166f2fa1fa5a4c90199a5.jpg"
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact 
                img="https://i.pinimg.com/736x/fd/54/b0/fd54b08f683bf2b9535c5e9d3849be55.jpg"
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact 
                img="https://i.pinimg.com/736x/a6/35/a5/a635a5423ba14fd0d1452e4d12df5613.jpg"
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
        </div>
    )
}

export default App