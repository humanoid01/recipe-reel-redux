import { Box, Button, Typography } from '@mui/material';
import { useAppSelector } from '../../app/hooks';
import { RecipeCard } from './RecipeCard';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import { useNavigate } from 'react-router';

export const UserRecipeList = () => {
  const userRecipes = useAppSelector(state => state.recipes.userRecipes);
  const userRecipeList = Object.entries(userRecipes);
  return (
    <Box p={2} display='flex' justifyContent='center' flexWrap='wrap'>
      {userRecipeList.length === 0 ? (
        <EmptyRecipeListMessage />
      ) : (
        userRecipeList.map(([recipeName, recipe]) => {
          return (
            <RecipeCard key={recipeName} recipe={recipe} editable={true} />
          );
        })
      )}
    </Box>
  );
};

const EmptyRecipeListMessage = () => {
  const navigate = useNavigate();

  return (
    <Box marginTop={7}>
      <Typography textAlign='center' gutterBottom>
        Looks like this section is empty...
      </Typography>
      <Button
        endIcon={<AddCircleOutlineSharpIcon />}
        onClick={() => navigate('/create-recipe')}
        size='large'
        variant='outlined'>
        Add your first recipe!
      </Button>
    </Box>
  );
};
