import {Grid} from "@mui/material";
import React from "react";
import {Outlet} from "react-router-dom";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

const mainContainerStyle = {
    minHeight: '100vh',
}

const centerContainerStyle = {
    flexDirection: 'column',
    alignItems: 'center',
}

export const MainLayout = () => {
    return (
        <Grid container justifyContent="space-between" sx={{...mainContainerStyle, ...centerContainerStyle}} >
            <Grid item container sx={centerContainerStyle}>
                <Header />
                <Outlet />
            </Grid>
            <Grid item container sx={centerContainerStyle}>
                <Footer />
            </Grid>
        </Grid>
    );
}