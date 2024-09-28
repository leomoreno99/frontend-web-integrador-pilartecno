import React, { createContext, useState, useMemo, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './Theme';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export function ThemeProvider({ children }) {
  const storedMode = localStorage.getItem('themeMode') || 'light';
  const [mode, setMode] = useState('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        const newMode = mode === 'light' ? 'dark' : 'light';
        setMode(newMode);
        // Guarda el nuevo modo en localStorage
        localStorage.setItem('themeMode', newMode);
      },
    }),
    [mode]
  );

  const theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode]);
  useEffect(() => {
    // Para asegurarnos de que el modo sea el correcto al iniciar
    setMode(storedMode);
  }, [storedMode]);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ColorModeContext.Provider>
  );
}
