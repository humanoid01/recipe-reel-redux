import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { TotalNutrients } from '../../types/types';

interface NutrientListProps {
  nutrients: TotalNutrients;
}

export const NutrientList = ({ nutrients }: NutrientListProps) => {
  const nutrientValues = Object.values(nutrients);

  if (nutrientValues.length === 0)
    return (
      <Typography variant='h6' sx={{ fontWeight: 'bold', mb: 1 }}>
        Nutrients: No nutrients
      </Typography>
    );

  return (
    <>
      <Typography variant='h6' sx={{ fontWeight: 'bold', mb: 1 }}>
        Nutrients:
      </Typography>
      {nutrientValues.length === 0 && 'No nutrients'}
      <List aria-label='Nutrients list'>
        {nutrientValues.map(({ label, quantity, unit }, i) => (
          <ListItem key={label} sx={{ m: 0 }} disablePadding>
            <ListItemText>
              {label}: {quantity.toFixed(2)} {unit}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  );
};
