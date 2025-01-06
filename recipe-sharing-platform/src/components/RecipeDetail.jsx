import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function RecipeDetail() {
    const { id } = useParams();
    const [recipe, setRecipes] = useState(null);

    useEffect(() => {
        fetch('/data.json')
        .then((response) => response.json())
        .then((data) => {
            const recipeData = data.find((item) => item.id === parseInt(id));
            setRecipes(recipeData);
        })
        .catch((error) => console.error('Error fetching recipe:', error));
    }, [id]);

    if (!recipe) {
        return <div className="text-center mt-10">Loading recipe details...</div>
    }

    return (
        <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-md">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <h1 className="text-2xl font-bold mb-4">{recipe.title}</h1>
        <p className="text-gray-600 mb-4">{recipe.summary}</p>
      </div>
    );
  }
  
  export default RecipeDetail;