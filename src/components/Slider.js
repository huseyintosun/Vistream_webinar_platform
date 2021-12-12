import React from 'react'
import { Carousel } from '@trendyol-js/react-carousel';
import { Typography, Card, CardContent, CardActions, Button } from '@mui/material';

function Slider() {
    return (
        <Carousel show={5} slide={3} swiping={true}>
            <Card sx={{ width: "300px", height: "334px" }}>
                <Typography
                    sx={{
                        backgroundColor: "#232B76",
                        color: "#FFFFFF",
                        borderRadius: "10px 10px 0px 0px",
                        padding: "25px 0px 20px",
                        fontSize: "20px",
                        fontFamily: "FSAlbert Regular"
                    }}>
                    Monday, 15 February 2020
                </Typography>
                <CardContent>
                    <Typography
                        sx={{
                            pb: "20px",
                            borderBottom: "1px solid grey",
                            color: "#042164",
                            fontSize: "1ppx",
                            fontFamily: "FSAlbert Regular",
                            width: "270px",
                            height: "69px"
                        }}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                    </Typography>
                    <Typography
                        sx={{
                            paddingTop: "23px",
                            color: "#009FE3",
                            fontFamily: "FSAlbert Regular",
                            fontSize: "18px"
                        }}>
                        Speaker Name
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        size="small"
                        sx={{
                            fontSize: "13px",
                            fontWeight: "bold",
                            fontFamily: "FSAlbert Regular",
                            ml: "14px",
                            width: "107px",
                            height: "37px",
                            borderRadius: "29px",
                            boxShadow: "0px 0px 20px #1490DF60",
                            backgroundColor: "#009FE3",
                            color: "#FFFFFF",
                            "&:hover": { backgroundColor: "#009FE3" }
                        }}>
                        REGİSTER
                    </Button>
                    <Button
                        size="small"
                        sx={{
                            fontSize: "13px",
                            fontWeight: "bold",
                            fontFamily: "FSAlbert Regular",
                            width: "145px",
                            height: "37px",
                            borderRadius: "29px",
                            boxShadow: "0px 0px 20px #1490DF60",
                            backgroundColor: "#042164",
                            color: "#FFFFFF",
                            "&:hover": { backgroundColor: "#042164" }
                        }}>
                        ADD TO CALENDER
                    </Button>
                </CardActions>
            </Card>
            <Card sx={{ width: "300px", height: "334px" }}>
                <Typography
                    sx={{
                        backgroundColor: "#232B76",
                        color: "#FFFFFF",
                        borderRadius: "10px 10px 0px 0px",
                        padding: "25px 0px 20px",
                        fontSize: "20px",
                        fontFamily: "FSAlbert Regular"
                    }}>
                    Monday, 15 February 2020
                </Typography>
                <CardContent>
                    <Typography
                        sx={{
                            pb: "20px",
                            borderBottom: "1px solid grey",
                            color: "#042164",
                            fontSize: "1ppx",
                            fontFamily: "FSAlbert Regular",
                            width: "270px",
                            height: "69px"
                        }}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                    </Typography>
                    <Typography
                        sx={{
                            paddingTop: "23px",
                            color: "#009FE3",
                            fontFamily: "FSAlbert Regular",
                            fontSize: "18px"
                        }}>
                        Speaker Name
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        size="small"
                        sx={{
                            fontSize: "13px",
                            fontWeight: "bold",
                            fontFamily: "FSAlbert Regular",
                            ml: "14px",
                            width: "107px",
                            height: "37px",
                            borderRadius: "29px",
                            boxShadow: "0px 0px 20px #1490DF60",
                            backgroundColor: "#009FE3",
                            color: "#FFFFFF",
                            "&:hover": { backgroundColor: "#009FE3" }
                        }}>
                        REGİSTER
                    </Button>
                    <Button
                        size="small"
                        sx={{
                            fontSize: "13px",
                            fontWeight: "bold",
                            fontFamily: "FSAlbert Regular",
                            width: "145px",
                            height: "37px",
                            borderRadius: "29px",
                            boxShadow: "0px 0px 20px #1490DF60",
                            backgroundColor: "#042164",
                            color: "#FFFFFF",
                            "&:hover": { backgroundColor: "#042164" }
                        }}>
                        ADD TO CALENDER
                    </Button>
                </CardActions>
            </Card>
            <Card sx={{ width: "300px", height: "334px" }}>
                <Typography
                    sx={{
                        backgroundColor: "#232B76",
                        color: "#FFFFFF",
                        borderRadius: "10px 10px 0px 0px",
                        padding: "25px 0px 20px",
                        fontSize: "20px",
                        fontFamily: "FSAlbert Regular"
                    }}>
                    Monday, 15 February 2020
                </Typography>
                <CardContent>
                    <Typography
                        sx={{
                            pb: "20px",
                            borderBottom: "1px solid grey",
                            color: "#042164",
                            fontSize: "1ppx",
                            fontFamily: "FSAlbert Regular",
                            width: "270px",
                            height: "69px"
                        }}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                    </Typography>
                    <Typography
                        sx={{
                            paddingTop: "23px",
                            color: "#009FE3",
                            fontFamily: "FSAlbert Regular",
                            fontSize: "18px"
                        }}>
                        Speaker Name
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        size="small"
                        sx={{
                            fontSize: "13px",
                            fontWeight: "bold",
                            fontFamily: "FSAlbert Regular",
                            ml: "14px",
                            width: "107px",
                            height: "37px",
                            borderRadius: "29px",
                            boxShadow: "0px 0px 20px #1490DF60",
                            backgroundColor: "#009FE3",
                            color: "#FFFFFF",
                            "&:hover": { backgroundColor: "#009FE3" }
                        }}>
                        REGİSTER
                    </Button>
                    <Button
                        size="small"
                        sx={{
                            fontSize: "13px",
                            fontWeight: "bold",
                            fontFamily: "FSAlbert Regular",
                            width: "145px",
                            height: "37px",
                            borderRadius: "29px",
                            boxShadow: "0px 0px 20px #1490DF60",
                            backgroundColor: "#042164",
                            color: "#FFFFFF",
                            "&:hover": { backgroundColor: "#042164" }
                        }}>
                        ADD TO CALENDER
                    </Button>
                </CardActions>
            </Card>
            <Card sx={{ width: "300px", height: "334px" }}>
                <Typography
                    sx={{
                        backgroundColor: "#232B76",
                        color: "#FFFFFF",
                        borderRadius: "10px 10px 0px 0px",
                        padding: "25px 0px 20px",
                        fontSize: "20px",
                        fontFamily: "FSAlbert Regular"
                    }}>
                    Monday, 15 February 2020
                </Typography>
                <CardContent>
                    <Typography
                        sx={{
                            pb: "20px",
                            borderBottom: "1px solid grey",
                            color: "#042164",
                            fontSize: "1ppx",
                            fontFamily: "FSAlbert Regular",
                            width: "270px",
                            height: "69px"
                        }}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                    </Typography>
                    <Typography
                        sx={{
                            paddingTop: "23px",
                            color: "#009FE3",
                            fontFamily: "FSAlbert Regular",
                            fontSize: "18px"
                        }}>
                        Speaker Name
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        size="small"
                        sx={{
                            fontSize: "13px",
                            fontWeight: "bold",
                            fontFamily: "FSAlbert Regular",
                            ml: "10px",
                            width: "266px",
                            height: "37px",
                            borderRadius: "29px",
                            boxShadow: "0px 0px 20px #1490DF60",
                            color: "#1490DF",
                            "&:hover": { backgroundColor: "none" }
                        }}>
                        MORE DETAILS COMING SOON
                    </Button>
                </CardActions>
            </Card>
            <Card sx={{ width: "300px", height: "334px" }}>
                <Typography
                    sx={{
                        backgroundColor: "#232B76",
                        color: "#FFFFFF",
                        borderRadius: "10px 10px 0px 0px",
                        padding: "25px 0px 20px",
                        fontSize: "20px",
                        fontFamily: "FSAlbert Regular"
                    }}>
                    Monday, 15 February 2020
                </Typography>
                <CardContent>
                    <Typography
                        sx={{
                            pb: "20px",
                            borderBottom: "1px solid grey",
                            color: "#042164",
                            fontSize: "1ppx",
                            fontFamily: "FSAlbert Regular",
                            width: "270px",
                            height: "69px"
                        }}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                    </Typography>
                    <Typography
                        sx={{
                            paddingTop: "23px",
                            color: "#009FE3",
                            fontFamily: "FSAlbert Regular",
                            fontSize: "18px"
                        }}>
                        Speaker Name
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        size="small"
                        sx={{
                            fontSize: "13px",
                            fontWeight: "bold",
                            fontFamily: "FSAlbert Regular",
                            ml: "14px",
                            width: "107px",
                            height: "37px",
                            borderRadius: "29px",
                            boxShadow: "0px 0px 20px #1490DF60",
                            backgroundColor: "#009FE3",
                            color: "#FFFFFF",
                            "&:hover": { backgroundColor: "#009FE3" }
                        }}>
                        REGİSTER
                    </Button>
                    <Button
                        size="small"
                        sx={{
                            fontSize: "13px",
                            fontWeight: "bold",
                            fontFamily: "FSAlbert Regular",
                            width: "145px",
                            height: "37px",
                            borderRadius: "29px",
                            boxShadow: "0px 0px 20px #1490DF60",
                            backgroundColor: "#042164",
                            color: "#FFFFFF",
                            "&:hover": { backgroundColor: "#042164" }
                        }}>
                        ADD TO CALENDER
                    </Button>
                </CardActions>
            </Card>
            <Card sx={{ width: "300px", height: "334px" }}>
                <Typography
                    sx={{
                        backgroundColor: "#232B76",
                        color: "#FFFFFF",
                        borderRadius: "10px 10px 0px 0px",
                        padding: "25px 0px 20px",
                        fontSize: "20px",
                        fontFamily: "FSAlbert Regular"
                    }}>
                    Monday, 15 February 2020
                </Typography>
                <CardContent>
                    <Typography
                        sx={{
                            pb: "20px",
                            borderBottom: "1px solid grey",
                            color: "#042164",
                            fontSize: "1ppx",
                            fontFamily: "FSAlbert Regular",
                            width: "270px",
                            height: "69px"
                        }}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                    </Typography>
                    <Typography
                        sx={{
                            paddingTop: "23px",
                            color: "#009FE3",
                            fontFamily: "FSAlbert Regular",
                            fontSize: "18px"
                        }}>
                        Speaker Name
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        size="small"
                        sx={{
                            fontSize: "13px",
                            fontWeight: "bold",
                            fontFamily: "FSAlbert Regular",
                            ml: "14px",
                            width: "107px",
                            height: "37px",
                            borderRadius: "29px",
                            boxShadow: "0px 0px 20px #1490DF60",
                            backgroundColor: "#009FE3",
                            color: "#FFFFFF",
                            "&:hover": { backgroundColor: "#009FE3" }
                        }}>
                        REGİSTER
                    </Button>
                    <Button
                        size="small"
                        sx={{
                            fontSize: "13px",
                            fontWeight: "bold",
                            fontFamily: "FSAlbert Regular",
                            width: "145px",
                            height: "37px",
                            borderRadius: "29px",
                            boxShadow: "0px 0px 20px #1490DF60",
                            backgroundColor: "#042164",
                            color: "#FFFFFF",
                            "&:hover": { backgroundColor: "#042164" }
                        }}>
                        ADD TO CALENDER
                    </Button>
                </CardActions>
            </Card>
            <Card sx={{ width: "300px", height: "334px" }}>
                <Typography
                    sx={{
                        backgroundColor: "#232B76",
                        color: "#FFFFFF",
                        borderRadius: "10px 10px 0px 0px",
                        padding: "25px 0px 20px",
                        fontSize: "20px",
                        fontFamily: "FSAlbert Regular"
                    }}>
                    Monday, 15 February 2020
                </Typography>
                <CardContent>
                    <Typography
                        sx={{
                            pb: "20px",
                            borderBottom: "1px solid grey",
                            color: "#042164",
                            fontSize: "1ppx",
                            fontFamily: "FSAlbert Regular",
                            width: "270px",
                            height: "69px"
                        }}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                    </Typography>
                    <Typography
                        sx={{
                            paddingTop: "23px",
                            color: "#009FE3",
                            fontFamily: "FSAlbert Regular",
                            fontSize: "18px"
                        }}>
                        Speaker Name
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        size="small"
                        sx={{
                            fontSize: "13px",
                            fontWeight: "bold",
                            fontFamily: "FSAlbert Regular",
                            ml: "14px",
                            width: "107px",
                            height: "37px",
                            borderRadius: "29px",
                            boxShadow: "0px 0px 20px #1490DF60",
                            backgroundColor: "#009FE3",
                            color: "#FFFFFF",
                            "&:hover": { backgroundColor: "#009FE3" }
                        }}>
                        REGİSTER
                    </Button>
                    <Button
                        size="small"
                        sx={{
                            fontSize: "13px",
                            fontWeight: "bold",
                            fontFamily: "FSAlbert Regular",
                            width: "145px",
                            height: "37px",
                            borderRadius: "29px",
                            boxShadow: "0px 0px 20px #1490DF60",
                            backgroundColor: "#042164",
                            color: "#FFFFFF",
                            "&:hover": { backgroundColor: "#042164" }
                        }}>
                        ADD TO CALENDER
                    </Button>
                </CardActions>
            </Card>
        </Carousel>
    )
}

export default Slider
