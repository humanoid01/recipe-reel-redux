import { Recipe } from '../../types/types';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material';

import noImage from '../../assets/no-image.jpg';

import { RecipeCardContent } from './RecipeCardContent';
import { RecipeCardActions } from './RecipeCardActions';
import { RecipeCardCollapse } from './RecipeCardCollapse';

interface RecipeSingleProps {
  recipe: Recipe;
  editable?: boolean;
}

export const RecipeCard = ({ recipe, editable }: RecipeSingleProps) => {
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const maxCardTitleWidth = isSmUp ? '230px' : '280px';
  return (
    <Card
      sx={{
        width: { xs: '250px', sm: '280px' },
        margin: 2,
        padding: 2,
        position: 'relative',
      }}>
      <CardHeader
        title={recipe.label}
        subheader={recipe.source ? recipe.source : 'No subheader'}
        titleTypographyProps={{
          flex: '1 1 auto',
          width: maxCardTitleWidth,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      />
      <CardMedia
        image={recipe.image ? recipe.image : noImage}
        component='img'
        height={200}
        alt={recipe.label}
        loading='lazy'
      />

      <RecipeCardContent recipe={recipe} />
      <RecipeCardActions recipe={recipe} editable={editable} />
      <RecipeCardCollapse recipe={recipe} />
    </Card>
  );
};
