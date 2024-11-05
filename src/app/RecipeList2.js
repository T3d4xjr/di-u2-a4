import { recipes } from './recipes.js';
import Recipe from './Recipe.js';

export default function RecipeList2() {
  return (
    <div>
      <h1>Recetas</h1>
      {recipes.map(recipe => (
        <Recipe
          key={recipe.id} 
          name={recipe.name}
          ingredients={recipe.ingredients}
        />
        
      ))}
    </div>
  );
}
