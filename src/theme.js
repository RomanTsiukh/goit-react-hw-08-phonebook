import { createTheme } from '@mui/material';

export const theme = createTheme({
  colors: {
    bodyBgColor: 'green',
    firstBgColor: '#5cb3ed',
    accent: 'green',
    hoverBgColor: '#795ced',
    thirdDgColor: 'rgb(114, 185, 229)',
  },
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '24px',
    xl: '32px',
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  borders: {
    none: 'none',
    normal: '1px solid',
  },
  radii: {
    none: '0',
    sm: '4px',
    md: '8px',
    lg: '16px',
    round: '50%',
  },
  transition: {
    color: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    all: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
});
