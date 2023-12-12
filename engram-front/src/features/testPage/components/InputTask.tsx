import {Grid, Typography} from "@mui/material";
import React from "react";
import {InputField} from "../../../common/input/InputField";


const inputStyle = {
    width: 480,
}

export const InputTask = () => {
    return (
        <Grid item container direction='column' rowSpacing={2}>
            <Grid item>
                <Typography variant='body1'>
                    2. Мої батьки не розмовляють французькою.
                </Typography>
            </Grid>
            <Grid item>
                <InputField
                    placeholder="Введіть переклад"
                    sx={inputStyle}
                />
            </Grid>
        </Grid>
    );
}