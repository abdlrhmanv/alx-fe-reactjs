import React, { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({}); // Error state

  const validate = () => {
    const validationErrors = {};
    if (!title) validationErrors.title = "Recipe title is required.";
    if (!ingredients) validationErrors.ingredients = "Ingredients are required.";
    if (!steps) validationErrors.steps = "Preparation steps are required.";
    if (ingredients.split(",").length < 2) {
      validationErrors.ingredients = "Please include at least two ingredients (separated by commas).";
    }
    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    console.log({ title, ingredients, steps });
    alert("Recipe submitted successfully!");
    // Clear form
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="p-8 max-w-lg mx-auto bg-gray-100 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Add Recipe</h1>
      <form onSubmit={handleSubmit}>
        {/* Recipe Title */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full p-2 border rounded ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Ingredients (comma-separated)</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`w-full p-2 border rounded ${
              errors.ingredients ? "border-red-500" : "border-gray-300"
            }`}
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Preparation Steps */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Preparation Steps</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className={`w-full p-2 border rounded ${
              errors.steps ? "border-red-500" : "border-gray-300"
            }`}
          ></textarea>
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
