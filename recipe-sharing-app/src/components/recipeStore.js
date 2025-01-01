import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [], // List of all recipes
  favorites: [], // List of favorite recipe IDs
  recommendations: [], // Personalized recipe recommendations

  // Add recipe to favorites
  addFavorite: (recipeId) => set((state) => {
    if (!state.favorites.includes(recipeId)) {
      return { favorites: [...state.favorites, recipeId] };
    }
  }),

  // Remove recipe from favorites
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter(id => id !== recipeId),
  })),

  // Generate personalized recipe recommendations
  generateRecommendations: () => set((state) => {
    const recommended = state.recipes.filter((recipe) =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5 // Mock recommendation logic
    );
    return { recommendations: recommended };
  }),
}));

export default useRecipeStore;
