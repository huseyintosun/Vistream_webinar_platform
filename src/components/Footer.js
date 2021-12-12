import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import vistream from '../assets/Group_1659.svg';
import { Typography } from '@mui/material';


const Footer = () => {
    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: "white",
                height: "123px",
                justifyContent: "center",
                fontFamily: "FSAlbert Regular"
            }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Paper variant="" sx={{ width: "207px", height: "51px" }}>
                        <img src={vistream} alt="vistream" />
                    </Paper>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Typography
                            sx={{
                                fontFamily: "FSAlbert Regular",
                                color: '#333333',
                                display: 'block',
                                m: "62px auto 43px 1023px",
                                fontSize: "16px",
                                width: "270px",
                                height: "18px",
                                textAlign: "right"
                            }}>
                            Footer Note
                        </Typography>

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Footer;
