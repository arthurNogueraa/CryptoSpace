import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import NavTabs from './Navbar';
const Header = () => {
    return (
        <Grid container spacing={0}>
        <Grid item xs={12}className="header">
            <Container variant="div" className="header-title">Crypto Space</Container> </Grid>
        <Grid item xs={12}> <NavTabs ></NavTabs></Grid>
       
        </Grid>
    );
}

export default Header;
