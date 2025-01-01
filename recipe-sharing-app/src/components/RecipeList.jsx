import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      {filteredRecipes.length === 0 ? (
        <p>No recipes match your search.</p>
      ) : (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id} style={{ marginBottom: '20px' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            {/* Link to the individual recipe details */}
            <Link to={`/recipe/${recipe.id}`}>View Details</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
