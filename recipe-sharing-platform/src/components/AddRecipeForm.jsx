import React, { useState } from "react";

function AddRecipeForm() {
    const [title, setTitle] = useState("");
    const [ingredients, setIngrediants] = useState("");
    const [steps, setSteps] = useState("");
    const [error, setError] =useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!title || !ingredients || !steps) {
            setError("Please add at least two ingredients, spearated by commas.");
            return;
        }
        setError("");
        console.log("Recipe Submitted:", { title, ingredients, steps});

        setTitle("");
        setIngrediants("");
        setSteps("");
    };
    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-center text-blue-800">Add a New Recipe</h2>
          {error && <p className="text-red-600 mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="title">
                Recipe Title
              </label>
              <input
                type="text"
                id="title"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="ingredients">
                Ingredients (separate by commas)
              </label>
              <textarea
                id="ingredients"
                rows="3"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="steps">
                Preparation Steps
              </label>
              <textarea
                id="steps"
                rows="5"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={steps}
                onChange={(e) => setSteps(e.target.value)}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
            >
              Submit Recipe
            </button>
          </form>
        </div>
      );
}
export default AddRecipeForm;