import Grid from '@mui/material/Grid';

import { Response } from '../../types/types';
import { RecipeCard } from './RecipeCard';

import { memo } from 'react';

interface RecipeListProps {
  data: Response;
}

export const RecipeList = memo(function RecipeList({ data }: RecipeListProps) {
  return (
    <Grid container spacing={2} justifyContent='center'>
      {data.hits.map(recipe => (
        <Grid item key={recipe.recipe.uri}>
          <RecipeCard recipe={recipe.recipe} />
        </Grid>
      ))}
    </Grid>
  );
});
