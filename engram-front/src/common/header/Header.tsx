import React, {useState} from "react";
import {Grid, IconButton, Link, Typography} from "@mui/material";
import {Logo} from "../logo/Logo";
import {LogoType} from "../logo/LogoType";
import {Link as RouterLink} from "react-router-dom";
import {ReactComponent as SearchIcon} from '../../images/icons/search-black.svg';
import {InputField} from "../input/InputField";

const headerStyle = {
    position: 'fixed',
    height: 72,
    backgroundColor: '#FCFCFC',
    boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.06)',
    width: '100%',
}

const innerHeaderStyle = {
    width: '100%',
    maxWidth: 1440,
    px: '120px',
}

export const Header = () => {
    const [isSearchFieldVisible, setSearchFieldVisible] = useState(false);

    const handleSearchIconClick = () => {
        setSearchFieldVisible(true);
    };

    const handleSearchFieldBlur = () => {
        setSearchFieldVisible(false);
    };

    return (
        <Grid container justifyContent='center' sx={headerStyle} >
            <Grid item container alignItems='center' sx={innerHeaderStyle} wrap='nowrap'>
                <Grid item marginRight='80px'>
                    <Logo type={LogoType.Header}/>
                </Grid>
                <Grid item container justifyContent='space-between' alignItems='center'>
                    <Grid item container columnSpacing='24px' width='auto'>
                        <Grid item>
                            <Link component={RouterLink} to='/grammar'>
                                <Typography variant='subtitle2'>Граматика</Typography>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link component={RouterLink} to='/results'>
                                <Typography variant='subtitle2'>Мої результати</Typography>
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid item container width='auto' alignItems='center' columnSpacing='24px'>
                        <Grid item>
                            {isSearchFieldVisible ? (
                                <InputField
                                    placeholder="Пошук"
                                    onBlur={handleSearchFieldBlur}
                                    autoFocus
                                    InputProps={{
                                        endAdornment: (
                                            <IconButton size='small'>
                                                <SearchIcon />
                                            </IconButton>
                                        ),
                                        sx: { backgroundColor: 'white' }
                                    }}
                                />
                            ) : (
                                <IconButton size='small' onClick={handleSearchIconClick}>
                                    <SearchIcon />
                                </IconButton>
                            )}
                        </Grid>
                        <Grid item>
                            <Link component={RouterLink} to='/'>
                                <Typography variant='subtitle2'>Вийти</Typography>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}