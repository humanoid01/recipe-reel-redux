import { Grid } from '@mui/material';
import { Response } from '../../types/types';
import { memo } from 'react';
import { RecipeCard } from './RecipeCard';

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
