import React, { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents default form submission behavior (e.g., page refresh)

    if (title.trim() && description.trim()) {
      // Only update if fields are valid
      updateRecipe({ ...recipe, title, description }); // Update the recipe in the Zustand store
      alert('Recipe updated successfully!'); // Optional feedback for the user
    } else {
      alert('Both fields are required!'); // Optional validation feedback
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
      <label>
        <strong>Title:</strong>
      </label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter title"
        required
        style={{ display: 'block', margin: '10px 0', padding: '5px', width: '100%' }}
      />
      <label>
        <strong>Description:</strong>
      </label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter description"
        required
        style={{ display: 'block', margin: '10px 0', padding: '5px', width: '100%' }}
      />
      <button
        type="submit"
        style={{
          padding: '10px',
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Save Changes
      </button>
    </form>
  );
};

export default EditRecipeForm;
