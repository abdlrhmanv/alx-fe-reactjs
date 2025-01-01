import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../components/recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId); // Remove the recipe from the Zustand store
    navigate('/'); // Redirect to the homepage (or another appropriate route)
  };

  return (
    <button
      onClick={handleDelete}
      style={{
        marginTop: '20px',
        padding: '10px',
        backgroundColor: '#dc3545',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
