import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';

import { ExpandMoreButton } from '../../components/ExpandMore/ExpandMore';
import { IngredientList } from './IngredientList';
import { NutrientList } from './NutrientList';
import { Recipe } from '../../types/types';

import { useState } from 'react';

interface RecipeCardButtonsProps {
  recipe: Recipe;
}

export const RecipeCardCollapse = ({ recipe }: RecipeCardButtonsProps) => {
  const [expandIngredients, setExpandIngredients] = useState(false);
  const [expandNutrients, setExpandNutrients] = useState(false);

  return (
    <>
      <Box ml={2} display='flex'>
        <Typography variant='body2'>
          <span> Ingredients: </span>
          <ExpandMoreButton
            expand={expandIngredients}
            onExpandChange={setExpandIngredients}
            aria-label='show more ingredients'
          />
        </Typography>
        <Typography variant='body2'>
          <span aria-label='Nutrients'> Nutrients: </span>
          <ExpandMoreButton
            expand={expandNutrients}
            onExpandChange={setExpandNutrients}
            aria-label='show more nutrients'
          />
        </Typography>
      </Box>

      <Collapse in={expandIngredients} timeout='auto' unmountOnExit>
        <IngredientList ingredients={recipe.ingredients} />
      </Collapse>
      <Collapse in={expandNutrients} timeout='auto' unmountOnExit>
        <NutrientList nutrients={recipe.totalNutrients} />
      </Collapse>
    </>
  );
};
