import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import GradeTwoToneIcon from '@mui/icons-material/GradeTwoTone';

import { useAppSelector } from '../../app/hooks';
import { RecipeCard } from './RecipeCard';
import { useNavigate } from 'react-router';
import { useState } from 'react';

export const FavoriteItemList = () => {
  const favoriteRecipes = useAppSelector(state => state.recipes.favorites);
  const [filter, setFilter] = useState('');
  const favoriteItemList = Object.values(favoriteRecipes);
  const filteredRecipes = favoriteItemList.filter(recipe =>
    recipe.label.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <Typography variant='h5' sx={{ m: 2 }} textAlign='center'>
        Favorite Recipes
      </Typography>

      {favoriteItemList.length === 0 ? (
        <EmptyFavoriteItemMessage />
      ) : (
        <Box display='flex' justifyContent='center'>
          <TextField
            value={filter}
            onChange={e => setFilter(e.target.value)}
            label='Search favorite recipes...'
          />
        </Box>
      )}

      <Box p={2} display='flex' justifyContent='center' flexWrap='wrap'>
        {filteredRecipes.map(favorite => (
          <RecipeCard key={favorite.label} recipe={favorite} />
        ))}
      </Box>
    </>
  );
};

const EmptyFavoriteItemMessage = () => {
  const navigate = useNavigate();

  return (
    <Box display='flex' justifyContent='center' flexDirection='column'>
      <Typography sx={{ mt: 7 }} textAlign='center'>
        Add your first item to favorites!
      </Typography>
      <Button
        sx={{ width: 'fit-content', alignSelf: 'center', mt: 2 }}
        endIcon={<GradeTwoToneIcon />}
        onClick={() => navigate('/')}>
        Search for the new favorite recipe!
      </Button>
    </Box>
  );
};
