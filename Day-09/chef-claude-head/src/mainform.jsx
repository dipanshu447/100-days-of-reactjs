export default function Main() {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"];

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        ingredients.push(newIngredient);
        console.log(ingredients);
        
    }

    return (
        <>
            <main>
                <form onSubmit={handleSubmit}>
                    <input className="input" type="text" placeholder="e.g. oregano" aria-label="Add ingredient" name="ingredient"/>
                    <button>Add ingredient</button>
                </form>
                <ul>
                    {ingredients.map(a => <li>{a}</li>)}
                </ul>
            </main>
        </>
    )
}