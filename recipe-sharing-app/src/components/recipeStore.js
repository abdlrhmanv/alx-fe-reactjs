import create from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [], // Full list of recipes
  searchTerm: '', // The current search term
  filteredRecipes: [], // Filtered results based on the search term
  addRecipe: (recipe) => set((state) => ({ recipes: [...state.recipes, recipe] })),
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),
  setSearchTerm: (term) =>
    set((state) => {
      const searchTerm = term.toLowerCase();
      return {
        searchTerm: term,
        filteredRecipes: state.recipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(searchTerm)
        ),
      };
    }),
}));
