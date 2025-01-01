import React from 'react';
import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(recipeId);
  };

  return (
    <button
      onClick={handleDelete}
      style={{ marginTop: '20px', padding: '10px', backgroundColor: '#dc3545', color: '#fff', border: 'none' }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
