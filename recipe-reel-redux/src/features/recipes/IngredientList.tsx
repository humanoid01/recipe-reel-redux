import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Ingredient } from '../../types/types';

interface IngredientListProps {
  ingredients: Ingredient[];
}

export const IngredientList = ({ ingredients }: IngredientListProps) => {
  if (ingredients.length === 0)
    return (
      <Typography variant='h6' sx={{ fontWeight: 'bold', mb: 1 }}>
        Ingredients: No ingredients
      </Typography>
    );

  return (
    <>
      <Typography variant='h6' sx={{ fontWeight: 'bold', mb: 1 }}>
        Ingredients:
      </Typography>

      <List aria-label='Ingredients list'>
        {ingredients.map(ingredient => (
          <ListItem key={ingredient.foodId} disablePadding>
            <ListItemText primary={ingredient.text} />
          </ListItem>
        ))}
      </List>
    </>
  );
};
