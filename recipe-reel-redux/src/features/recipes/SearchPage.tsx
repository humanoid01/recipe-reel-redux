import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import { useGetRecipesQuery } from './recipesApi';
import { RecipesFilters } from './RecipeFilters';
import { RecipeList } from './RecipeList';
import { LinearProgress } from '@mui/material';
import { useDebounce, useSearchQuery } from '../../app/hooks';
import { isFetchBaseQueryError } from '../../utils/isFetchBaseQueryError';

export const SearchPage = () => {
  const [query, setQuery] = useSearchQuery('q');
  const [calories, setCalories] = useSearchQuery('calories');
  const debouncedQuery = useDebounce(query, 1000);
  const debouncedCalories = useDebounce(calories, 1000);

  const { data, error, isLoading } = useGetRecipesQuery({
    query: debouncedQuery,
    calories: debouncedCalories,
  });

  const handleQueryChange = (query: string) => {
    setQuery(query);
  };

  const handleCaloriesChange = (calories: string) => {
    setCalories(calories);
  };
  if (isLoading) return <LinearProgress />;
  if (isFetchBaseQueryError(error))
    return (
      <>
        <RecipesFilters
          calories={calories}
          query={query}
          onCaloriesChange={handleCaloriesChange}
          onQueryChange={handleQueryChange}
        />

        <Typography textAlign='center'> {error.data[0].error}</Typography>
      </>
    );
  if (!data?.hits.length)
    return (
      <>
        <RecipesFilters
          calories={calories}
          query={query}
          onCaloriesChange={handleCaloriesChange}
          onQueryChange={handleQueryChange}
        />
        <Typography textAlign='center'>
          {query ? 'No recipes found.' : 'Write something to search...'}
        </Typography>
      </>
    );

  return (
    <Box>
      <RecipesFilters
        calories={calories}
        query={query}
        onCaloriesChange={handleCaloriesChange}
        onQueryChange={handleQueryChange}
      />
      <Divider />
      <RecipeList data={data} />
    </Box>
  );
};
