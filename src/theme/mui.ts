import { createTheme, Theme, ThemeOptions } from '@material-ui/core';
import { PaletteOptions } from '@material-ui/core/styles/createPalette';

declare module '@material-ui/core/styles/createTheme' {
  interface Theme {
    sizes: {
      toolbar: {
        height: number;
      };
      infobar: {
        height: number;
      };
    };
  }

  interface ThemeOptions {
    sizes?: {
      toolbar?: {
        height?: number;
      };
      infobar?: {
        height?: number;
      };
    };
  }
}

const defaultTheme = createTheme();

const overrides = {
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
};

const palette: PaletteOptions = {
  type: 'dark',
};

const createMyTheme = (options: ThemeOptions): Theme =>
  createTheme({
    sizes: {
      infobar: {
        height: 3.75,
      },
      toolbar: {
        height: 2.5,
      },
    },
    ...options,
  });

export const MUItheme = createMyTheme({ palette, overrides });
