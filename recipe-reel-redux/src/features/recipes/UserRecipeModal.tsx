import Box from '@mui/material/Box/Box';
import TextField from '@mui/material/TextField/TextField';
import Grid from '@mui/material/Grid/Grid';
import Divider from '@mui/material/Divider/Divider';
import Button from '@mui/material/Button';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

import { editRecipe } from './recipesSlice';
import { RecipeTotalsAccordion } from './RecipeTotalsAccordion';
import { UserEditableIngredientList } from './UserEditableIngredientList';

import { useCallback, useState } from 'react';
import { Ingredient, TotalItem, TotalNutrients } from '../../types/types';
import { DialogContent } from '@mui/material';

interface UserRecipeModalProps {
  id: string;
  handleClose: () => void;
}

export const UserRecipeModal = ({ id, handleClose }: UserRecipeModalProps) => {
  const dispatch = useAppDispatch();
  const selectedRecipe = useAppSelector(state => state.recipes.userRecipes[id]);
  const [recipeName, setRecipeName] = useState<string>(selectedRecipe.label);
  const [totalNutrients, setTotalNutrients] = useState<TotalNutrients>(
    selectedRecipe.totalNutrients
  );
  const [source, setSource] = useState<string | undefined>(
    selectedRecipe.source
  );
  const [url, setUrl] = useState<string>(
    selectedRecipe.url ? selectedRecipe.url : ''
  );
  const [image, setImage] = useState<string | undefined>(selectedRecipe.image);
  const [dietLabels, setDietLabels] = useState<string[]>(
    selectedRecipe.dietLabels
  );

  const [cautions, setCautions] = useState<string[]>(selectedRecipe.cautions);
  const [cuisineType, setCuisineType] = useState<string[]>(
    selectedRecipe.cuisineType
  );
  const [mealType, setMealType] = useState<string[]>(selectedRecipe.mealType);
  const [calories, setCalories] = useState<number | undefined>(
    selectedRecipe.calories
  );
  const [totalTime, setTotalTime] = useState<number | undefined>(
    selectedRecipe.totalTime
  );
  const [ingredients, setIngredients] = useState<Ingredient[]>(
    selectedRecipe.ingredients
  );
  const handleTotalNutrients = useCallback((name: string, value: TotalItem) => {
    setTotalNutrients(prev => ({ ...prev, [name]: value }));
  }, []);

  return (
    <DialogContent>
      <Box display={'flex'} gap={1} flexWrap={'wrap'} marginTop={4}>
        <TextField
          label={'Recipe Name'}
          value={recipeName}
          size='small'
          onChange={e => setRecipeName(e.target.value)}
        />
        <TextField
          label={'Source'}
          value={source}
          size='small'
          onChange={e => setSource(e.target.value)}
        />
        <TextField
          label={'Recipe Source URL'}
          value={url}
          size='small'
          onChange={e => setUrl(e.target.value)}
        />
        <TextField
          label={'Image URL'}
          value={image}
          size='small'
          onChange={e => setImage(e.target.value)}
        />
        <TextField
          label={'Diet Labels'}
          value={dietLabels.join(',')}
          size='small'
          onChange={e => setDietLabels(e.target.value.split(','))}
        />
        <TextField
          label={'Cautions'}
          value={cautions.join(',')}
          size='small'
          onChange={e => setCautions(e.target.value.split(','))}
        />
        <TextField
          label={'Cuisine Type'}
          value={cuisineType.join(',')}
          size='small'
          onChange={e => setCuisineType(e.target.value.split(','))}
        />
        <TextField
          label={'Meal Type'}
          value={mealType}
          size='small'
          onChange={e => setMealType(e.target.value.split(','))}
        />
        <TextField
          label={'Calories'}
          value={calories}
          size='small'
          onChange={e => setCalories(Number(e.target.value))}
        />
        <TextField
          label={'Preparation Time (in minutes)'}
          value={totalTime}
          size='small'
          onChange={e => setTotalTime(Number(e.target.value))}
        />
      </Box>
      <Box display={'flex'} justifyContent={'center'}>
        <Grid container justifyItems='center'>
          <Grid item sm={4}>
            <UserEditableIngredientList
              ingredients={ingredients}
              setIngredients={setIngredients}
              label='Ingredients'
            />
          </Grid>

          <Grid item sm={8}>
            <RecipeTotalsAccordion
              label='Nutrient Totals'
              totals={totalNutrients}
              onChange={handleTotalNutrients}
            />
          </Grid>
        </Grid>
      </Box>

      <Divider />

      <Box display={'flex'} justifyContent={'flex-end'} marginTop={2}>
        <Button
          onClick={() => {
            if (!recipeName) return alert('Please enter a recipe name');
            const recipe = {
              label: recipeName,
              uri: id,
              source,
              url,
              image,
              dietLabels,
              cautions,
              cuisineType,
              mealType,
              calories,
              totalTime,
              ingredients,
              totalNutrients,
            };

            dispatch(editRecipe({ key: id, value: { ...recipe } }));

            handleClose();
          }}>
          Save
        </Button>
      </Box>
    </DialogContent>
  );
};
