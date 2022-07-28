import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import {Box} from '@mui/material'
import './Home.css';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#ffffff" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "rgb(209,49,224)", fontWeight: "bold" }}>Seja bem vinde!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "rgb(209,49,224)", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "rgb(209,49,224)", backgroundColor: "#ffff", color: "rgb(209,49,224)" }}>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img className='img' src="https://cdn-icons-png.flaticon.com/512/4445/4445693.png" alt="" width="300px" height="300px"/>
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "rgb(209,49,224)" }}>
                </Grid>
            </Grid>
        </>
    );
}
export default Home;
