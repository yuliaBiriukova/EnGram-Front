import {FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography} from "@mui/material";
import React from "react";

const radioButtonStyle = {
    padding: '0 8px',
}

const formControlLabelStyle = {
    marginBottom: 1
}

export const RadioSelectTask = () => {
    const [value, setValue] = React.useState('');

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };

    const radioButton = <Radio size='small' sx={radioButtonStyle}/>;

    return (
        <Grid item container direction='column' rowSpacing={2}>
            <Grid item>
                <Typography variant='body1'>
                    1. I ... a book every day.
                </Typography>
            </Grid>
            <Grid item>
                <FormControl variant="standard">
                    <RadioGroup
                        aria-labelledby="demo-error-radios"
                        name="quiz"
                        value={value}
                        onChange={handleRadioChange}
                    >
                        <FormControlLabel value="1" control={radioButton} label="to read" sx={formControlLabelStyle}/>
                        <FormControlLabel value="2" control={radioButton} label="read" sx={formControlLabelStyle}/>
                        <FormControlLabel value="3" control={radioButton} label="reads" sx={formControlLabelStyle}/>
                    </RadioGroup>
                </FormControl>
            </Grid>
        </Grid>
    );
}