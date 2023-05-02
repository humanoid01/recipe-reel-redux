import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Response } from '../../types/types';

interface SearchParams {
  query?: string;
  calories?: string;
}
export const recipesApi = createApi({
  reducerPath: 'recipesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.edamam.com/api',
  }),
  endpoints: builder => ({
    getRecipes: builder.query<Response, SearchParams>({
      query: ({ query = '', calories = 0 }) =>
        `recipes/v2?app_id=${process.env.REACT_APP_API_ID}&app_key=${
          process.env.REACT_APP_API_KEY
        }&type=any&q=${query}${calories ? `&calories=${calories}` : ''}`,
    }),
  }),
});

export const { useGetRecipesQuery } = recipesApi;
export default recipesApi;
