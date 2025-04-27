import { useState } from "react";

export default function Main() {
    const [ingredients,setIngredients] = useState([]);

    function handleSubmit(formData) {
        setIngredients(prev => [...prev, formData.get("ingredient")]);
    }

    return (
        <>
            <main>
                <form action={handleSubmit}>
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