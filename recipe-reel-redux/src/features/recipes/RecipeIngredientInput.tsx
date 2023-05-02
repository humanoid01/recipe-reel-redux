import TextField from '@mui/material/TextField/TextField';
import Select from '@mui/material/Select/Select';
import MenuItem from '@mui/material/MenuItem/MenuItem';
import Box from '@mui/material/Box/Box';
import { TotalItem } from '../../types/types';
import { memo } from 'react';
interface RecipeIngredientInputProps {
  name: string;
  value: TotalItem;
  onChange: (name: string, value: TotalItem) => void;
}

export const RecipeIngredientInput = memo(function RecipeIngredientInput({
  name,
  value,
  onChange,
}: RecipeIngredientInputProps) {
  const { label, quantity, unit } = value;
  const handleQuantityChange = (quantity: number) => {
    if (quantity < 0) return;

    onChange(name, {
      label,
      quantity,
      unit,
    });
  };

  return (
    <Box p={1} display='flex' justifyContent={'center'} gap={0.3}>
      <TextField disabled variant='outlined' size='small' value={label} />
      <TextField
        label='Provide quantity'
        type='number'
        size='small'
        variant='outlined'
        value={quantity ? quantity : ''}
        sx={{ width: '120px' }}
        onChange={e => handleQuantityChange(Number(e.target.value))}>
        {quantity}
      </TextField>
      <Select
        size='small'
        label='Units'
        value={unit}
        onChange={e =>
          onChange(name, {
            label,
            quantity,
            unit: e.target.value,
          })
        }>
        <MenuItem value='g'>g</MenuItem>
        <MenuItem value='mg'>mg</MenuItem>
        <MenuItem value='µg'>µg</MenuItem>
        <MenuItem value='kcal'>kcal</MenuItem>
      </Select>
    </Box>
  );
});
