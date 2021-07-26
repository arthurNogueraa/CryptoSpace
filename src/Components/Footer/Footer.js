import { Grid, div } from '@material-ui/core';
import React from 'react';
const Footer = () => {
    return (
        <Grid item xs={12}className="footer">
            <div variant="div" className="footer-content">ce site est la proprieté d'A. Noguera<br></br>
            contact: @ arthur.nogueraa@gmail.com <br></br>
            LinkedIn /arthurnogueraa</div>
        </Grid>
    );
}

export default Footer;
