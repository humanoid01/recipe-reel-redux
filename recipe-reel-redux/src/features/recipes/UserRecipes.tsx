import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import RestaurantTwoToneIcon from '@mui/icons-material/RestaurantTwoTone';

import { addRecipe } from './recipesSlice';
import { RecipeTotalsAccordion } from './RecipeTotalsAccordion';
import { UserEditableIngredientList } from './UserEditableIngredientList';
import { Ingredient, TotalItem, TotalNutrients } from '../../types/types';
import { useAppDispatch } from '../../app/hooks';
import { useState, useCallback } from 'react';

export const UserRecipes = () => {
  const [recipeName, setRecipeName] = useState<string>('');
  const [totalNutrients, setTotalNutrients] =
    useState<TotalNutrients>(totalNutrientsInit);
  const [source, setSource] = useState<string>('');
  const [url, setUrl] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [dietLabels, setDietLabels] = useState<string[]>([]);
  const [cautions, setCautions] = useState<string[]>([]);
  const [cuisineType, setCuisineType] = useState<string[]>([]);
  const [mealType, setMealType] = useState<string[]>([]);
  const [calories, setCalories] = useState<number>(0);
  const [totalTime, setTotalTime] = useState<number>(0);
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  const handleTotalNutrients = useCallback((name: string, value: TotalItem) => {
    setTotalNutrients(prev => ({ ...prev, [name]: value }));
  }, []);

  const dispatch = useAppDispatch();

  return (
    <>
      <Box
        display={'flex'}
        gap={1.5}
        flexWrap={'wrap'}
        justifyContent={'center'}
        mt={4}>
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
        <Grid container sx={{ textAlign: 'center' }}>
          <Grid item xs={12} sm>
            <RecipeTotalsAccordion
              label='Nutrients'
              totals={totalNutrients}
              onChange={handleTotalNutrients}
            />
          </Grid>
          <Grid item xs sm={4} justifyItems={'center'}>
            <UserEditableIngredientList
              ingredients={ingredients}
              setIngredients={setIngredients}
              label='Ingredients'
            />
          </Grid>
        </Grid>
      </Box>

      <Divider />
      <Box display={'flex'} justifyContent={'center'} margin={3}>
        <Button
          endIcon={<RestaurantTwoToneIcon />}
          variant='contained'
          onClick={() => {
            if (!recipeName) return alert('Please enter a recipe name');
            dispatch(
              addRecipe({
                label: recipeName,
                totalNutrients,
                ingredients,
                source,
                url,
                image,
                dietLabels,
                cautions,
                cuisineType,
                mealType,
                calories,
                totalTime,
              })
            );
          }}>
          Add Recipe
        </Button>
      </Box>
    </>
  );
};

const totalNutrientsInit = {
  CA: { label: 'Calcium', quantity: 0, unit: '' },
  CHOCDF: { label: 'Carbs', quantity: 0, unit: '' },
  CHOLE: { label: 'Cholesterol', quantity: 0, unit: '' },
  ENERC_KCAL: { label: 'Calories', quantity: 0, unit: '' },
  FAMS: { label: 'Monounsaturated', quantity: 0, unit: '' },
  FAPU: { label: 'Polyunsaturated', quantity: 0, unit: '' },
  FASAT: { label: 'Saturated', quantity: 0, unit: '' },
  FAT: { label: 'Fat', quantity: 0, unit: '' },
  FATRN: { label: 'Trans', quantity: 0, unit: '' },
  FE: { label: 'Iron', quantity: 0, unit: '' },
  FIBTG: { label: 'Fiber', quantity: 0, unit: '' },
  FOLDFE: { label: 'Folate', quantity: 0, unit: '' },
  FOLFD: { label: 'Folic Acid', quantity: 0, unit: '' },
  K: { label: 'Potassium', quantity: 0, unit: '' },
  MG: { label: 'Magnesium', quantity: 0, unit: '' },
  NA: { label: 'Sodium', quantity: 0, unit: '' },
  NIA: { label: 'Niacin', quantity: 0, unit: '' },
  P: { label: 'Phosphorus', quantity: 0, unit: '' },
  PROCNT: { label: 'Protein', quantity: 0, unit: '' },
  RIBF: { label: 'Riboflavin', quantity: 0, unit: '' },
  SUGAR: { label: 'Sugar', quantity: 0, unit: '' },
  THIA: { label: 'Thiamin', quantity: 0, unit: '' },
  TOCPHA: { label: 'Vitamin E', quantity: 0, unit: '' },
  VITA_RAE: { label: 'Vitamin A', quantity: 0, unit: '' },
  VITB6A: { label: 'Vitamin B6', quantity: 0, unit: '' },
  VITB12: { label: 'Vitamin B12', quantity: 0, unit: '' },
  VITC: { label: 'Vitamin C', quantity: 0, unit: '' },
  VITD: { label: 'Vitamin D', quantity: 0, unit: '' },
  VITK1: { label: 'Vitamin K', quantity: 0, unit: '' },
  WATER: { label: 'Water', quantity: 0, unit: '' },
  ZN: { label: 'Zinc', quantity: 0, unit: '' },
};
