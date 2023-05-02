import { Grid } from '@mui/material';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Route, Routes } from 'react-router';
import { UserRecipes } from './features/recipes/UserRecipes';
import { UserRecipeList } from './features/recipes/UserRecipeList';
import { SearchPage } from './features/recipes/SearchPage';

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
        </Routes>
      </Grid>
    </Grid>
  );
}

export default App;
