import { useState } from "react";
import Recipe from './ClaudeRecipe.jsx';
import IngredientsList from './IngredientsList.jsx';
import getRecipeAI from '../AI.js';

export default function Main() {
    const [ingredientData, setIngredientData] = useState([]);
    const [recipe, setRecipe] = useState("");

    function handleSubmit(formData) {
        let item = formData.get("ingredient");
        if(item != "") setIngredientData(prev => [...prev,  item]);
    }

    async function getRecipeData() {
        let receipedata = await getRecipeAI(ingredientData);
        setRecipe(receipedata);
    }

    return (
        <>
            <main>
                <form action={handleSubmit}>
                    <input className="input" type="text" placeholder="e.g. oregano" aria-label="Add ingredient" name="ingredient" />
                    <button>Add ingredient</button>
                </form>
                {ingredientData.length > 0 && <IngredientsList ingredients={ingredientData} getRecipe={getRecipeData} />}
                {recipe && <Recipe data={recipe}/>}
            </main>
        </>
    )
}