import CardActionArea from '@mui/material/CardActionArea/CardActionArea';
import CardContent from '@mui/material/CardContent/CardContent';
import Typography from '@mui/material/Typography/Typography';
import Link from '@mui/material/Link/Link';

import { Recipe } from '../../types/types';

interface RecipeCardContentProps {
  recipe: Recipe;
}

export const RecipeCardContent = ({ recipe }: RecipeCardContentProps) => {
  return (
    <CardContent
      sx={{ minHeight: 180, maxHeight: 180 }}
      aria-label='Recipe properties'>
      <Typography variant='body2'>
        Diet type: {recipe.dietLabels.join(', ') || 'No data'}
      </Typography>
      <Typography variant='body2'>Meal type: {recipe.mealType}</Typography>
      <Typography variant='body2'>
        Cuisine type: {recipe.cuisineType}
      </Typography>
      <Typography variant='body2'>
        Cautions: {recipe.cautions.join(', ') || 'No data'}
      </Typography>
      <Typography variant='body2'>
        Calories: {`${recipe.calories ? Math.round(recipe.calories) : 0} kcal`}
      </Typography>
      <Typography variant='body2'>
        Time: {recipe.totalTime ? recipe.totalTime + ' minutes' : 'No data'}
      </Typography>
      {recipe.url ? (
        <CardActionArea>
          <Link
            rel='noopener noreferrer'
            href={recipe.url}
            target='_blank'
            aria-label={`External link to recipe: ${recipe.url}`}>
            Link to full recipe
          </Link>
        </CardActionArea>
      ) : (
        <Typography>No link found </Typography>
      )}
    </CardContent>
  );
};
