import { createMuiTheme } from '@material-ui/core';

const defaultTheme = createMuiTheme();

export const MUItheme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },
        a: {
          textDecoration: 'none',
          color: defaultTheme.palette.text.primary,
        },
        code: {
          fontFamily:
            "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
        },
      },
    },
  },
  palette: {
    type: 'dark',
  },
});
