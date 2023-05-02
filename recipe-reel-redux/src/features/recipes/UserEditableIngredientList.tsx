import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

import { ExpandMore } from '../../components/ExpandMore/ExpandMore';
import { Ingredient } from '../../types/types';
import { useState } from 'react';

interface MyRecipesIngredientLinesProps {
  ingredients: Ingredient[];
  setIngredients: (ingredients: Ingredient[]) => void;
  label: string;
}

export const UserEditableIngredientList = ({
  ingredients,
  setIngredients,
  label,
}: MyRecipesIngredientLinesProps) => {
  const [expand, setExpand] = useState<boolean>(false);

  const handleIngredientChange = (value: string, i: number) => {
    const newIngredients = [...ingredients];
    const updatedIngredient = { ...newIngredients[i], text: value };

    newIngredients[i] = updatedIngredient;
    setIngredients(newIngredients);
  };

  const handleRemoveIngredient = (index: number) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };

  const handleAddIngredient = () => {
    setIngredients([
      ...ingredients,
      {
        text: '',
        foodId: generateIngredientId(),
      },
    ]);
  };

  const generateIngredientId = () => {
    let newId =
      Date.now().toString() + Math.ceil(Math.random() * 1000000).toString();
    const existingIds = ingredients.map(element => element.foodId);

    while (existingIds.includes(newId)) {
      newId =
        Date.now().toString() + Math.ceil(Math.random() * 1000000).toString();
    }

    return newId;
  };

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
        {!ingredients?.length && (
          <IconButton onClick={() => handleAddIngredient()}>
            <ControlPointIcon />
          </IconButton>
        )}
        {ingredients.map((ingredient, i) => (
          <Box
            key={ingredient.foodId}
            p={0.7}
            display='flex'
            justifyContent={'center'}>
            <TextField
              value={ingredient.text}
              size='small'
              label={`Ingredient ${i + 1}`}
              onChange={e => handleIngredientChange(e.target.value, i)}
            />
            <Box minWidth={'100px'} display={'flex'}>
              <IconButton onClick={() => handleRemoveIngredient(i)}>
                <RemoveCircleOutlineIcon />
              </IconButton>
              {i === ingredients.length - 1 && (
                <IconButton onClick={() => handleAddIngredient()}>
                  <ControlPointIcon />
                </IconButton>
              )}
            </Box>
          </Box>
        ))}
      </Collapse>
    </>
  );
};
