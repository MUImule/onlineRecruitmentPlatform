import { createTheme } from '@mui/material/styles';
import { green, grey, lightBlue } from '@mui/material/colors';

// export const theme = createTheme({
//     palette: {
//         primary: {
//             main: green[900] // Change to a darker shade of green
//         },
//         secondary: {
//             main: lightBlue[800],
//             midNightBlue: "#003366"
//         }
//     }
// });

export const themeColors = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                // palette values for light mode
                primary: {
                    main: green[500], // Change to a darker shade of green
                    white: "#fff"
                },
                secondary: {
                    main: green[800],
                    midNightBlue: "#003366"
                },
            }
            : {
                // palette values for dark mode
                primary: {
                    main: green[500], // Change to a darker shade of green
                    white: "#003366"
                },
                secondary: {
                    main: lightBlue[800],
                    midNightBlue: "#2196f3"
                },
                background: {
                    default: "#1e1e1e",
                },
                text: {
                    primary: '#fff',
                    secondary: grey[500],
                },
            }),
    },
});
