import { createTheme } from '@mui/material/styles';

const theme = (darkMode = false) =>
  createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#1976d2',
      },
    },
    typography: {
      fontFamily: "'Poppins', sans-serif",
    },
  });

export default theme;