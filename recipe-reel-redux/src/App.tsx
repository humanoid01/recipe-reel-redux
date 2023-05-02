import { Grid } from '@mui/material';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Route, Routes } from 'react-router';
import { UserRecipes } from './features/recipes/UserRecipes';
import { UserRecipeList } from './features/recipes/UserRecipeList';
import { SearchPage } from './features/recipes/SearchPage';
import { ErrorPage } from './components/ErrorPage/ErrorPage';

function App() {
  return (
    <Grid container spacing={2}>
      <Grid item sx={{ minWidth: 200, maxWidth: 200 }}>
        <Sidebar />
      </Grid>
      <Grid xs={12} sm md item>
        <Routes>
          <Route path='/' element={<SearchPage />} />
          <Route path='my-recipes' element={<UserRecipeList />} />
          <Route path='create-recipe' element={<UserRecipes />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Grid>
    </Grid>
  );
}

export default App;
