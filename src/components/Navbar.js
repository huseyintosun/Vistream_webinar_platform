import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import vistream from '../assets/Group_1478.svg';
import { Link } from '@mui/material';
import OverviewModal from './OverviewModal';
import Teaser from './Teaser';

const pages = ['HOME', 'SESSIONS', 'OVERVIEW', "SCHEDULE", "TEASER", "UPCOMING EVENTS"];


const Navbar = () => {

    return (
        <AppBar
            position="sticky"
            sx={{
                backgroundColor: "white",
                height: "100px",
                justifyContent: "center",
                fontFamily: "FSAlbert Regular",
            }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Paper variant="" sx={{ mr: "110px" }}>
                        <img src={vistream} alt="vistream" />
                    </Paper>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                sx={{
                                    fontFamily: "FSAlbert Regular",
                                    my: 2,
                                    color: '#232B76',
                                    display: 'block',
                                    mr: "39px",
                                    fontSize: "14px",
                                }}>
                                {page === "HOME" ? <Link
                                    sx={{
                                        textDecoration: "none",
                                        color: '#232B76',
                                    }}
                                    onClick={(e) => {
                                        let id = null;
                                        let pos = e.pageY;
                                        clearInterval(id);
                                        id = setInterval(frame, 5);
                                        function frame() {
                                            if (pos >= 0 & pos <= 10) {
                                                clearInterval(id);
                                            } else {
                                                pos -= 10;
                                                window.scrollTo(0, pos)
                                            }
                                        }
                                    }}
                                >{page}</Link> : page === "UPCOMING EVENTS" ?
                                    <Link
                                        onClick={(e) => {
                                            let id = null;
                                            let pos = e.pageY;
                                            clearInterval(id);
                                            id = setInterval(frame, 5);
                                            function frame() {
                                                if (pos >= 2500 & pos <= 2510) {
                                                    clearInterval(id);
                                                } else {
                                                    pos += 10;
                                                    window.scrollTo(0, pos)
                                                }
                                            }
                                        }}
                                        sx={{
                                            textDecoration: "none",
                                            color: '#232B76',
                                        }}>
                                        {page}
                                    </Link> : page === "TEASER" ? <Teaser /> : page === "OVERVIEW" ? <OverviewModal /> : page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
};
export default Navbar;
