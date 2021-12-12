import * as React from 'react';
import { styled } from '@mui/styles';
import Box from '@mui/material/Box';
import backgroundimage from '../assets/Group_1671.svg';
import { Card, Grid, ImageList, ImageListItem, Typography } from '@mui/material';
import login from '../assets/Group_1669.svg';
import register from '../assets/Group_1670.svg';

const MyBox = styled(Box)({
    background: "transparent",
    backgroundImage: `url(${backgroundimage})`,
    opacity: 1,
    height: 721,
    padding: '0 30px',
    textAlign: "left",
});


const d = new Date();
const webinarDate = new Date(2022, 2, 25,13)
const zamanFark = Math.abs(webinarDate.getTime() - d.getTime());
const gunFark = Math.floor(zamanFark / (1000 * 3600 * 24));
const saatFark = Math.floor((zamanFark / (1000 * 3600 * 24) - gunFark) * 24);
const dakikaFark = Math.floor(((zamanFark / (1000 * 3600 * 24) - gunFark) * 24 - saatFark) * 60)
const saniyeFark = Math.floor((((zamanFark / (1000 * 3600 * 24) - gunFark) * 24 - saatFark) * 60 - dakikaFark) * 60)

export default function Main() {
    return (
        <MyBox>
            <Grid container sx={{ width: "1920px" }}>
                <Grid item pl={"210px"} pt={"124px"} sx={{ width: "1222px" }}>
                    <Typography
                        sx={{
                            fontFamily: "FSAlbert Regular",
                            fontSize: "21px",
                            fontWeight: "bold",
                            width: "494px",
                            height: "24px",
                            mb: "9px"
                        }}
                        color="#042164">
                        NEXT WEBINAR
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: "FSAlbert Regular",
                            fontSize: "40px",
                            fontStyle: "italic",
                            fontWeight: "bold",
                            width: "846px",
                            height: "107px",
                            mb: "12px"
                        }}
                        color="#FFFFFF">
                        EVENT NAME it amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: "FSAlbert Regular",
                            fontSize: "36px",
                            fontWeight: "bold",
                            width: "711px",
                            height: "84px",
                            mb: "26px"
                        }}
                        color="#232B76">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: "FSAlbert Regular",
                            fontSize: "30px",
                            fontStyle: "regular",
                            width: "846px",
                            height: "34px",
                            mb: "56px"
                        }}
                        color="#FFFFFF">
                        Wednesday, 25 February 2022, 01:00 pm
                    </Typography>
                    <Grid container >
                        <Grid item marginRight="12px" textAlign="center">
                            <Typography color="#FFFFFF" margin="11px 11px 0" sx={{ position: "absolute", zIndex: 1 }}>
                                <Typography variant="h4" sx={{ fontSize: "37px", fontFamily: "FSAlbert Regular" }} >
                                    {gunFark}
                                    <Typography sx={{ fontSize: "19px", fontFamily: "FSAlbert Regular" }}>Days</Typography>
                                </Typography>
                            </Typography>
                            <Card
                                sx={{
                                    width: "85px",
                                    height: "94px",
                                    backgroundColor: "#232B76",
                                    opacity: "0.3"
                                }}>
                            </Card>
                        </Grid>
                        <Grid item marginRight="12px" textAlign="center">
                            <Typography color="#FFFFFF" margin="11px 20px 0" sx={{ position: "absolute", zIndex: 1 }}>
                                <Typography variant="h4" sx={{ fontSize: "37px", fontFamily: "FSAlbert Regular" }} >
                                    {saatFark}
                                    <Typography sx={{ fontSize: "19px", fontFamily: "FSAlbert Regular" }}>Hours</Typography>
                                </Typography>
                            </Typography>
                            <Card
                                sx={{
                                    width: "85px",
                                    height: "94px",
                                    backgroundColor: "#232B76",
                                    opacity: "0.3"
                                }}>
                            </Card>
                        </Grid>
                        <Grid item marginRight="12px" textAlign="center">
                            <Typography color="#FFFFFF" margin="11px 11px 0" sx={{ position: "absolute", zIndex: 1 }}>
                                <Typography variant="h4" sx={{ fontSize: "37px", fontFamily: "FSAlbert Regular" }} >
                                    {dakikaFark}
                                    <Typography sx={{ fontSize: "19px", fontFamily: "FSAlbert Regular" }}>Minutes</Typography>
                                </Typography>
                            </Typography>
                            <Card
                                sx={{
                                    width: "85px",
                                    height: "94px",
                                    backgroundColor: "#232B76",
                                    opacity: "0.3"
                                }}>
                            </Card>
                        </Grid>
                        <Grid item marginRight="12px" textAlign="center">
                            <Typography color="#FFFFFF" margin="11px 11px 0" sx={{ position: "absolute", zIndex: 1 }}>
                                <Typography variant="h4" sx={{ fontSize: "37px", fontFamily: "FSAlbert Regular" }} >
                                    {saniyeFark}
                                    <Typography sx={{ fontSize: "19px", fontFamily: "FSAlbert Regular" }}>Seconds</Typography>
                                </Typography>
                            </Typography>
                            <Card
                                sx={{
                                    width: "85px",
                                    height: "94px",
                                    backgroundColor: "#232B76",
                                    opacity: "0.3"
                                }}>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sx={{}}>
                    <ImageList cols={1}>
                        <ImageListItem sx={{ width: "320px", height: "50px", mt: "264px", mr: "378px" }}>
                            <img
                                src={login}
                                alt="login"
                            />
                        </ImageListItem>
                        <ImageListItem sx={{ width: "320px", height: "50px" }}>
                            <img
                                src={register}
                                alt="register"
                            />
                        </ImageListItem>
                    </ImageList>
                </Grid>
            </Grid>
        </MyBox>
    )
}