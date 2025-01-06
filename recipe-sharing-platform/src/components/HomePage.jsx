import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {

        fetch('/data.json')
        .then((response) => response.json())
        .then((data) => setRecipes(data))
        .catch((error) => console.error('Error loading data:', error));
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-center mb-6">Recipe Collection</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
             {recipes.map((recipe) => (
              <Link
              to={`/recipe/${recipe.id}`}
              key={recipe.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold mb-2">{recipe.title}</h2>
                  <p className="text-gray-600">{recipe.summary}</p>
                </div>
                </Link>
              ))}
        </div>
    </div>
  );
}

export default HomePage;