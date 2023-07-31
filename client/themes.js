import { createTheme } from '@mui/material/styles';
import { indigo, pink } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: indigo,
    secondary: pink,
  }
});