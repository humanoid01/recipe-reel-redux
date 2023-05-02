import { configureStore } from '@reduxjs/toolkit';
import recipesApi from '../features/recipes/recipesApi';
import recipesSlice from '../features/recipes/recipesSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, recipesSlice);
export const store = configureStore({
  reducer: {
    [recipesApi.reducerPath]: recipesApi.reducer,
    recipes: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      recipesApi.middleware
    ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
