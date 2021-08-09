import { createTheme } from '@material-ui/core';

export const lightTheme = createTheme({
  overrides: {
    MuiTypography: {
      h3: {
        color: '#333333',
      }
    },
    MuiSvgIcon: {
      root: {
        color: '#333333',
      }
    },
    MuiButton: {
      contained: {
        backgroundColor: '#333333',
        "&:hover": {
          backgroundColor: '#929292',
        }
      },
      label: {
        fontWeight: 'bold',
        color: 'white',
      },
      startIcon: {
        "& .MuiSvgIcon-root": {
          color: 'white',
        }
      },
    },
    MuiSwitch: {
      root: {
        padding: '7px',
      },
      colorSecondary: {
        "&$checked": {
          color: "white"
        },
        '&$checked + $track': {
          opacity: '1',
          backgroundColor: "#333333",
        },
      },
      track: {
        backgroundColor: "#333333",
        borderRadius: '12px',
      }
    }
  }
});
