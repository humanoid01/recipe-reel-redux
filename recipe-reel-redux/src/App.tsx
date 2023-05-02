import Grid from '@mui/material/Grid';
import { Sidebar } from './components/Sidebar/Sidebar';

function App() {
  return (
    <Grid container spacing={2}>
      <Grid item sx={{ minWidth: 200, maxWidth: 200 }}>
        <Sidebar />
      </Grid>
      <Grid xs={12} item></Grid>
    </Grid>
  );
}

export default App;
