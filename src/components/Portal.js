import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Stack from '@mui/material/Stack';
import React from 'react'
import certificate from "../assets/001-certificate.png"
import group from "../assets/002-group.png"
import world from "../assets/003-world.png"

function Portal() {
    return (
        <>
            <Box
                sx={{
                    height: "371px",
                    width: "1920px",
                    backgroundColor: "#F7F8FB",
                    mt: "84px"
                }}>
                <Typography
                    sx={{
                        textAlign: "center",
                        fontSize: "40px",
                        fontWeight: "bold",
                        fontFamily: "FSAlbert Regular",
                        width: "951px",
                        height: "45px",
                        color: "#232B76",
                        ml: "485px",
                        paddingTop: "23px"
                    }}>
                    WHAT IS VISTREAM WEBINAR PORTAL
                </Typography>
                <Typography
                    sx={{
                        textAlign: "center",
                        fontSize: "31px",
                        fontFamily: "FSAlbert Regular",
                        width: "951px",
                        height: "123px",
                        color: "#232B76",
                        ml: "485px",
                        mt: "35px"
                    }}>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.
                </Typography>
                <Box sx={{ width: "436px", border: "5px solid #042164", m: "35px auto" }} />
            </Box>
            <Box sx={{ height: "371px", width: "1920px", backgroundColor: "##FFFFFF", color: "#232B76" }}>
                <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justifyContent="center" spacing={1}>
                            <img
                                width="64px"
                                height="58px"
                                style={{ margin: "117px 0px 0px 257px" }}
                                src={certificate}
                                alt="certificate"
                            />
                            <Grid item xs={3} sx={{ fontFamily: "FSAlbert Regular", m: "104px 0px 0px 0px" }}>
                                <Stack direction="row" spacing={2}>
                                    <Box
                                        sx={{
                                            width: "74px",
                                            height: "74px",
                                            backgroundColor: "#E2F3FC",
                                            borderRadius: "50px"
                                        }}
                                    />
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            width: "314px",
                                            height: "74px",
                                            backgroundColor: "none",
                                            textAlign: "left",
                                            pt: "25px",
                                            fontSize: "30px",
                                            fontWeight: "bold"
                                        }}>
                                        Certified Speakers
                                    </Box>
                                </Stack>
                                <Box
                                    sx={{
                                        width: "328px",
                                        height: "74px",
                                        backgroundColor: "none",
                                        textAlign: "left",
                                        pt: "20px",
                                        ml: "23px",
                                        color: "#666666",
                                        fontSize: "18px"
                                    }}>
                                    Eabore etsu dolore magn aliqua enim ad minim veniam quis nostrud exercitas tion ullamco ipsum laboris.
                                </Box>
                            </Grid>
                            <img
                                width="64px"
                                height="58px"
                                style={{ margin: "117px 0px 0px 0px" }}
                                src={group}
                                alt="certificate"
                            />
                            <Grid sx={{ fontFamily: "FSAlbert Regular", m: "104px 0px 0px 0px" }} item xs={3}>
                                <Stack direction="row" spacing={2}>
                                    <Box
                                        sx={{
                                            width: "74px",
                                            height: "74px",
                                            backgroundColor: "#E2F3FC",
                                            borderRadius: "50px"
                                        }}
                                    />
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            width: "314px",
                                            height: "74px",
                                            backgroundColor: "none",
                                            textAlign: "left",
                                            pt: "25px",
                                            fontSize: "30px",
                                            fontWeight: "bold"
                                        }}>
                                        Connecting People
                                    </Box>
                                </Stack>
                                <Box
                                    sx={{
                                        width: "328px",
                                        height: "74px",
                                        backgroundColor: "none",
                                        textAlign: "left",
                                        pt: "20px",
                                        ml: "23px",
                                        color: "#666666",
                                        fontSize: "18px"
                                    }}>
                                    Eabore etsu dolore magn aliqua enim ad minim veniam quis nostrud exercitas tion ullamco ipsum laboris.
                                </Box>
                            </Grid>
                            <img
                                width="64px"
                                height="58px"
                                style={{ margin: "117px 0px 0px 0px" }}
                                src={world}
                                alt="certificate"
                            />
                            <Grid sx={{ fontFamily: "FSAlbert Regular", m: "104px 0px 0px 0px" }} item xs={3}>
                                <Stack direction="row" spacing={2}>
                                    <Box
                                        sx={{
                                            width: "74px",
                                            height: "74px",
                                            backgroundColor: "#E2F3FC",
                                            borderRadius: "50px"
                                        }}
                                    />
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            width: "314px",
                                            height: "74px",
                                            backgroundColor: "none",
                                            textAlign: "left",
                                            pt: "25px",
                                            fontSize: "30px",
                                            fontWeight: "bold"
                                        }}>
                                        Latest Updates
                                    </Box>
                                </Stack>
                                <Box
                                    sx={{
                                        width: "328px",
                                        height: "74px",
                                        backgroundColor: "none",
                                        textAlign: "left",
                                        pt: "20px",
                                        ml: "23px",
                                        color: "#666666",
                                        fontSize: "18px"
                                    }}>
                                    Eabore etsu dolore magn aliqua enim ad minim veniam quis nostrud exercitas tion ullamco ipsum laboris.
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Portal
