import { Box, Dialog, DialogTitle, CardActions } from '@mui/material';
import { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addFavorite, deleteFavorite, deleteRecipe } from './recipesSlice';
import { Recipe } from '../../types/types';
import { UserRecipeModal } from './UserRecipeModal';

interface RecipeCardActionsProps {
  recipe: Recipe;
  editable?: boolean;
}

export const RecipeCardActions = ({
  recipe,
  editable,
}: RecipeCardActionsProps) => {
  const favorites = useAppSelector(state => state.recipes.favorites);
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  return (
    <CardActions disableSpacing>
      <Box display={'flex'} flexDirection={'column'}>
        <Box display={'flex'} justifyContent={'start'}>
          <IconButton
            onClick={() =>
              dispatch(
                addFavorite({
                  key: recipe.uri,
                  value: recipe,
                })
              )
            }
            aria-label='add to favorites'>
            <FavoriteIcon
              color={favorites[recipe.uri] ? 'error' : 'disabled'}
            />
          </IconButton>
          {favorites[recipe.uri] && (
            <IconButton
              onClick={() => dispatch(deleteFavorite(recipe.uri))}
              aria-label='delete from favorites'>
              <HeartBrokenIcon color={'error'} />
            </IconButton>
          )}
          {editable && (
            <IconButton
              onClick={() => dispatch(deleteRecipe(recipe.uri))}
              aria-label='delete user recipe'>
              <DeleteIcon />
            </IconButton>
          )}
          {editable && (
            <IconButton
              onClick={() => setOpen(true)}
              aria-label='Edit user recipe'>
              <EditIcon />
            </IconButton>
          )}
        </Box>
      </Box>
      <Dialog
        open={open}
        sx={{
          position: 'absolute',
          overflow: 'scroll',
          height: '100%',
        }}
        onClose={() => setOpen(false)}>
        <DialogTitle>Edit recipe</DialogTitle>
        <UserRecipeModal id={recipe.uri} handleClose={handleClose} />
      </Dialog>
    </CardActions>
  );
};
