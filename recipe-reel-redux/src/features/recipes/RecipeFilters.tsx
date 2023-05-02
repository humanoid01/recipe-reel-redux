import { Box, TextField, useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';

interface RecipeFiltersProps {
  calories: string;
  query: string;
  onCaloriesChange: (calories: string) => void;
  onQueryChange: (query: string) => void;
}

interface Cals {
  minCalories: number | string;
  maxCalories: number | string;
}

export const RecipesFilters = ({
  calories,
  query,
  onCaloriesChange,
  onQueryChange,
}: RecipeFiltersProps) => {
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const [cals, setCals] = useState<Cals>({
    minCalories: calories.split('-')[0] ?? '',
    maxCalories: calories.split('-')[1] ?? '',
  });

  const handleMinCalories = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (Number(value) < 1 && value !== '') return;

    setCals(prevCals => ({
      ...prevCals,
      minCalories: value,
    }));

    const maxCalories = cals.maxCalories === '' ? '' : Number(cals.maxCalories);
    if (maxCalories === '' && value === '') {
      onCaloriesChange('');
      return;
    }
    onCaloriesChange(`${value}-${maxCalories}`);
  };

  const handleMaxCalories = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (Number(value) < 1 && value !== '') return;
    setCals(prevCals => ({
      ...prevCals,
      maxCalories: value,
    }));

    const minCalories = cals.minCalories === '' ? '' : Number(cals.minCalories);
    if (minCalories === '' && value === '') {
      onCaloriesChange('');
      return;
    }
    onCaloriesChange(`${minCalories}-${value}`);
  };

  return (
    <Box
      justifyContent='center'
      display={'flex'}
      flexDirection={isSmUp ? 'row' : 'column'}
      gap={2}
      margin={3}>
      <TextField
        variant='outlined'
        onChange={e => onQueryChange(e.target.value)}
        value={query}
        label='Search recipes by name'
      />
      <TextField
        type='number'
        label='Min calories per serving (100g)'
        value={cals.minCalories}
        onChange={handleMinCalories}
      />
      <TextField
        type='number'
        label='Max calories per serving (100g)'
        value={cals.maxCalories}
        onChange={handleMaxCalories}
      />
    </Box>
  );
};
