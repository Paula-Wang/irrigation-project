import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
    palette: {
      primary: {
        main: red[500],
      },
    },
  });

type ThemeProps = {
  children: React.ReactNode;
};

export const Theme = ({ children }: ThemeProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
