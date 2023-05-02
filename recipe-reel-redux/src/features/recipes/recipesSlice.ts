import { createSlice } from '@reduxjs/toolkit';
import { Recipe } from '../../types/types';

interface RecipesState {
  userRecipes: { [key: string]: Recipe };
  favorites: { [key: string]: Recipe };
}
const initialState: RecipesState = { userRecipes: {}, favorites: {} };
const generateUniqueRecipeKey = (userRecipeList: string[]): number => {
  let id = 1;
  if (userRecipeList.length === 0) return id;
  userRecipeList.forEach(elementId => (id = Math.max(id, Number(elementId))));
  return id + 1;
};

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    addRecipe: (state, action) => {
      return {
        userRecipes: {
          ...state.userRecipes,
          [generateUniqueRecipeKey(Object.keys(state.userRecipes))]: {
            ...action.payload,
            uri: generateUniqueRecipeKey(Object.keys(state.userRecipes)),
          },
        },
        favorites: state.favorites,
      };
    },
  },
});

export const { addRecipe } = recipesSlice.actions;
export default recipesSlice.reducer;
