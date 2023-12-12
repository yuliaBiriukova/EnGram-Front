import {Link, Typography} from "@mui/material";
import React from "react";
import {Link as RouterLink} from "react-router-dom";
import {LogoType} from "./LogoType";

const logoStyle = {
    color: '#1B8DF7',
    fontFamily: 'Montserrat',
    fontSize: 32,
    fontWeight: 800,
}

const headerLogo = {
    color: '#1B8DF7',
}

const footerLogo = {
    color: '#666666',
}

const linkStyle = {
    textDecoration: 'none',
}

interface ILogoProps {
    type: LogoType,
}

export const Logo = ( { type } : ILogoProps ) => {

    let logoTypeStyle;

    switch (type) {
        case LogoType.Header: {
            logoTypeStyle = {
                ...logoStyle,
                ...headerLogo,
            }
            break;
        }
        case LogoType.Footer: {
            logoTypeStyle = {
                ...logoStyle,
                ...footerLogo,
            }
            break;
        }
    }

    return (
        <Link component={RouterLink} to='/' sx={linkStyle}>
            <Typography sx={logoTypeStyle}>EnGram</Typography>
        </Link>
    );
}