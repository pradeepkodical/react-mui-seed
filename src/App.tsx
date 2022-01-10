import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import AppRoutes from './AppRoutes';
import CustomTheme from './CustomTheme';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <ThemeProvider theme={CustomTheme}>
      <BrowserRouter>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          {loggedIn ? <AppRoutes /> : <></>}
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
