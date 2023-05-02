import { useNavigate } from 'react-router';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
export const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <Box textAlign={'center'} margin={5}>
      <Typography> Page not found. </Typography>
      <Button onClick={() => navigate('/')}> Return to main page </Button>
    </Box>
  );
};
