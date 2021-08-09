import { createTheme } from '@material-ui/core';

export const darkTheme = createTheme({
  overrides: {
    MuiTypography: {
      h3: {
        color: 'white',
      }
    },
    MuiSvgIcon: {
      root: {
        color: 'white',
      }
    },
    MuiButton: {
      contained: {
        backgroundColor: 'white',
        "&:hover": {
          backgroundColor: '#bbbbbb',
        }
      },
      label: {
        fontWeight: 'bold',
        color: '#333333',
      },
      startIcon: {
        "& .MuiSvgIcon-root": {
          color: '#333333',
        }
      },
    },
    MuiSwitch: {
      root: {
        padding: '7px',
      },
      track: {
        backgroundColor: "silver",
        borderRadius: '12px',
      }
    }
  }
});
