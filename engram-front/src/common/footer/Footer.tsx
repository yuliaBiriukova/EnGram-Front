import {Grid, Typography} from "@mui/material";
import { Logo } from "../logo/Logo";
import {LogoType} from "../logo/LogoType";
import React from "react";

const footerStyle = {
    height: 72,
    backgroundColor: '#FCFCFC',
    borderTop: '1px solid #E3E3E3',
    width: '100%',
    marginTop: '64px',
}

const innerFooterStyle = {
    width: '100%',
    maxWidth: 1440,
    px: '120px',
}

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Grid container justifyContent='center' sx={footerStyle} >
            <Grid item container alignItems='center' justifyContent='space-between' sx={innerFooterStyle}>
                <Grid item>
                    <Logo type={LogoType.Footer}/>
                </Grid>
                <Grid item>
                    <Typography variant='subtitle1' color='#666666'>&copy; {currentYear} EnGram. All Rights Reserved.</Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}