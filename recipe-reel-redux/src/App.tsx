import Grid from '@mui/material/Grid';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Route, Routes } from 'react-router';
import { SearchPage } from './features/recipes/SearchPage';

function App() {
  return (
    <Grid container spacing={2}>
      <Grid item sx={{ minWidth: 200, maxWidth: 200 }}>
        <Sidebar />
      </Grid>
      <Grid xs={12} item>
        <Routes>
          <Route path='/' element={<SearchPage />} />
        </Routes>
      </Grid>
    </Grid>
  );
}

export default App;
