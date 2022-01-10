import { createTheme } from '@mui/material/styles';
import { enUS, esES } from '@mui/material/locale';

const mdTheme = createTheme(
  {
    palette: {
      primary: {
        main: '#2290f9',
      },
      secondary: {
        main: '#F2636F',
      },
    },
    shape: {
      borderRadius: 20,
    },
    spacing: 8,

    components: {
      MuiTab: {
        styleOverrides: {
          root: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
        },
      },
      MuiTabs: {
        styleOverrides: {
          scrollButtons: {
            borderRadius: 20,
          },
        },
      },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            borderRadius: 20,
          },
        },
      },
      MuiListItem: {
        styleOverrides: {
          root: {
            borderRadius: 20,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 20,
            minHeight: 38,
            marginLeft: 5,
            textTransform: 'none',
          },
        },
      },
    },
  },
  esES
);

export default mdTheme;
