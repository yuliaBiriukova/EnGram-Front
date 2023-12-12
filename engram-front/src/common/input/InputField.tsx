import {TextField, TextFieldProps} from "@mui/material";

export function InputField(props: TextFieldProps) {
    const { sx, ...other } = props;

    const defaultSx = {
        '& .MuiInputBase-root': {
            padding: '0 0 0 0'
        },
        '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #E5E6E6',
            borderRadius: '8px',
        },
        '& .MuiInputBase-input': {
            color: '#1A1A1A',
            background: 'white',
            typography: 'body1',
            wordWrap: 'break-word',
            padding: '8px 16px',
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #5F626D',
        },
        ...sx,
    };

    return <TextField {...other} sx={defaultSx} />;
}