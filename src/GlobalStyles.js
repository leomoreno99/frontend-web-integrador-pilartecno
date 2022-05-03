
export const globalStyles = {
  palette: {
    type: 'light',
    primary: {
      main: '#398290',
    },
    secondary: {
      main: '#f34461',
    },
    background: {
      default: '#f3f3f5',
    },
    success: {
      main: '#f3f3f5',
    },
    text: {
      disabled: 'rgba(0, 0, 0, 0.54)',
      secondary: 'rgba(0, 0, 0, 0.87)',
      primary: '#398290',
    },
  },
  typography: {
    fontFamily: 'Inter',
    fontSize: 14,
    h1: {
      fontSize: '6rem',
    },
    h2: {
      fontWeight: 700,
    },
    button: {
      fontWeight: 800,
      lineHeight: 2,
    },
  },
  shape: {
    borderRadius: 6,
  },
  spacing: 8,
  overrides: {
    MuiAppBar: {
      colorInherit: {
        backgroundColor: 'success',
        color: 'secondary',
      },
    },
  },
  props: {
    MuiAppBar: {
      color: 'inherit',
    },
  },
};