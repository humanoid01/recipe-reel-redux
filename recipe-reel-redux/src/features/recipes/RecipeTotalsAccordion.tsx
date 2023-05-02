import { useState } from 'react';
import { Collapse, Grid, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ExpandMore } from '../../components/ExpandMore/ExpandMore';
import { RecipeIngredientInput } from './RecipeIngredientInput';
import { TotalDaily, TotalItem } from '../../types/types';

interface RecipeTotalsAccordionProps {
  totals: TotalDaily;
  onChange: (name: string, value: TotalItem) => void;
  label: string;
}

export const RecipeTotalsAccordion = ({
  totals,
  onChange,
  label,
}: RecipeTotalsAccordionProps) => {
  const [expand, setExpand] = useState<boolean>(false);

  return (
    <>
      <Typography>
        {label}
        <ExpandMore
          expand={expand}
          aria-expanded={expand}
          aria-label='show-more'
          onClick={() => setExpand(!expand)}>
          <ExpandMoreIcon />
        </ExpandMore>
      </Typography>

      <Collapse in={expand} unmountOnExit>
        <Grid container spacing={1}>
          {Object.entries(totals).map(([name, value], i) => (
            <Grid item xs={12} sm={12} md={6} key={name}>
              <RecipeIngredientInput
                name={name}
                value={value}
                onChange={onChange}
              />
            </Grid>
          ))}
        </Grid>
      </Collapse>
    </>
  );
};
