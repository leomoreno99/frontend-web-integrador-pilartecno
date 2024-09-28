import { createTheme } from '@mui/material/styles';

// Tema claro
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#398290',
    },
    background: {
      default: '#f3f3f5',
    },
    appBar: {
        background: '#f3f3f5', // Fondo del AppBar en modo claro
        color: '#398290',
      },
  },
});

// Tema oscuro
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    background: {
      default: '#121212',
    },
    appBar: {
        background: '#121212', // Fondo del AppBar en modo oscuro
        color: '#ffffff', // Color del texto en modo oscuro
      },
  },
});
