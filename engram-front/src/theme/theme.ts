import {createTheme} from "@mui/material";

export const theme = createTheme({
    palette: {
        common: {
            white: '#fff',
            black: '#1A1A1A',
        },
        primary: {
            main: '#1B8DF7',
            light: '#ECF6FF',
            dark: '#065AA8',
        },
    },
    typography: {
        fontFamily: 'Inter',
        h1: {
            fontSize: 48,
            fontWeight: 600,
            lineHeight: 'normal',
            margin: 0,
            color: '#FCFCFC',
        },
        h2: {
            fontSize: 32,
            fontWeight: 600,
            lineHeight: 'normal',
            margin: 0,
            color: "#1A1A1A",
        },
        h3: {
            fontSize: 24,
            fontWeight: 500,
            lineHeight: 'normal',
            margin: 0,
            color: "#1A1A1A",
        },
        h4: {
            fontSize: 18,
            fontWeight: 500,
            lineHeight: 'normal',
            margin: 0,
            color: "#1A1A1A",
        },
        h5: {
            fontSize: 16,
            fontWeight: 500,
            lineHeight: 'normal',
            margin: 0,
        },
        subtitle1: {
            fontSize: 16,
            fontWeight: 400,
            lineHeight: 'normal',
            margin: 0,
        },
        subtitle2: {
            fontSize: 18,
            fontWeight: 400,
            lineHeight: 'normal',
            margin: 0,
        },
        body1: {
            fontSize: 16,
            fontWeight: 400,
            lineHeight: '140%',
            margin: 0,
            color: "#1A1A1A",
        },
        body2: {
            fontSize: 18,
            fontWeight: 500,
            lineHeight: '140%',
            margin: 0,
            color: "#1A1A1A",
        }
    },
    components: {
        MuiLink: {
            styleOverrides: {
                root: {
                    textDecoration: 'none',
                    color: '#1A1A1A',
                    '&:hover': {
                        color: '#1B8DF7',
                    },
                },
            },
        },
    },
});