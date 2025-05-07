export default function IngredientsList({ingredients, getRecipe, ref}) {
    return (
        <section className="ingredient-sec">
            <h2>Ingredients on hand:</h2>
            <ul>
                {ingredients.map(a => <li key={a}>{a}</li>)}
            </ul>
            {ingredients.length > 3 && <div className="get-receipe-container">
                <div ref={ref}>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={getRecipe}>Get a recipe</button>
            </div>}
        </section>
    )
}