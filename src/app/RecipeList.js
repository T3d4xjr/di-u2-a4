import { recipes } from './recipes.js';

export default function RecipeList() {
  const listItems = recipes.map(recipe =>
    <li key={recipe.id}>
      <h2>{recipe.name}</h2>
      <ul>
       {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </li>
  );
  return (
    <div>
      <h1>Recetas</h1>
       <li>{listItems}</li>
    </div>
  );
}
