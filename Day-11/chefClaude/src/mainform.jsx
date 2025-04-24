import { useState } from "react";

export default function Main() {
    // const ingredients = ["Chicken", "Oregano", "Tomatoes"];
    const [ingredients,setIngredients] = useState([]);

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient");
        setIngredients(prev => [...prev, newIngredient])
        // ingredients.push(newIngredient); wrong
        console.log(newIngredient);
        
    }

    return (
        <>
            <main>
                <form onSubmit={handleSubmit}>
                    <input className="input" type="text" placeholder="e.g. oregano" aria-label="Add ingredient" name="ingredient"/>
                    <button>Add ingredient</button>
                </form>
                <ul>
                    {ingredients.map(a => <li key={a}>{a}</li>)}
                </ul>
            </main>
        </>
    )
}