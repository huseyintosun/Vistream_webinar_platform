import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import image1 from '../assets/1.png';
import image2 from '../assets/2.png';
import image3 from '../assets/3.png';
import image4 from '../assets/4.png';
import image5 from '../assets/5.png';
import image6 from '../assets/6.png';
import image7 from '../assets/7.png';
import image8 from '../assets/8.png';


const dataList = [
    {
        img: image1,
        index: 1,
    },
    {
        img: image2,
        index: 2,
    },
    {
        img: image3,
        index: 3,
    },
    {
        img: image4,
        index: 4,
    },
    {
        img: image5,
        index: 5,
    },
    {
        img: image6,
        index: 6,
    },
    {
        img: image7,
        index: 7,
    },
    {
        img: image8,
        index: 8,
    },
]
function Speakers() {
    const [changeColor, setChangeColor] = React.useState(true)
    return (
        <Box
            sx={{
                fontFamily: "FSAlbert Regular",
                width: "1366px",
                height: "864px",
                ml: "277px",
                mt: "63px"
            }}
        >
            <Typography
                sx={{
                    fontFamily: "FSAlbert Regular",
                    fontSize: "40px",
                    fontWeight: "bold",
                    color: "#042164"
                }}>
                SPEAKERS
            </Typography>
            <Grid container cols={2}>
                <Button
                    style={changeColor ? {
                        backgroundColor: "#232B76",
                        color: "#FFFFFF",
                    } : {
                        backgroundColor: "#FFFFFF",
                        color: "#232B76",
                    }}
                    sx={{
                        fontFamily: "FSAlbert Regular",
                        border: "2px solid #232B76",
                        borderRadius: "25px",
                        width: "290px",
                        height: "50px",
                        ml: "376px",
                        fontSize: "17px",
                        color: "#FFFFFF",
                        fontWeight: "bold",
                        "&:hover": {
                            backgroundColor: "#232B76"
                        }
                    }}
                    onClick={() => setChangeColor(!changeColor)}>
                    <p>
                        Wednesday, 25 February 2022
                    </p>
                </Button>
                <Button
                    style={changeColor ? {
                        backgroundColor: "#FFFFFF",
                        color: "#232B76",
                    } : {
                        backgroundColor: "#232B76",
                        color: "#FFFFFF",
                    }}
                    sx={{
                        fontFamily: "FSAlbert Regular",
                        backgroundColor: "#FFFFFF",
                        border: "2px solid #232B76",
                        borderRadius: "25px",
                        width: "290px",
                        height: "50px",
                        ml: "35px",
                        fontSize: "17px",
                        color: "#232B76",
                        fontWeight: "bold",
                        mb: "64px"
                    }}
                    onClick={() => setChangeColor(!changeColor)}>
                    <p>
                        Wednesday, 25 March 2022
                    </p>
                </Button>
            </Grid>


            <Grid container spacing={{ xs: 2, md: 9 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {changeColor ? dataList.slice().sort().map((img) => (
                    <Grid justifyContent="center" item xs={2} sm={3} md={3} key={img?.index}>
                        <Card sx={{ width: "280px", height: "302px", mr: "92px", boxShadow: "none" }}>
                            <CardMedia
                                sx={{ width: "150px", height: "150px", ml: "65px" }}
                                component="img"
                                image={img?.img}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography
                                    sx={{
                                        fontFamily: "FSAlbert Regular",
                                        fontSize: "21px",
                                        fontWeight: "bold",
                                        color: "#042164",
                                        mb: "5px"
                                    }}>
                                    Dr. Name Surname
                                </Typography>
                                <Typography
                                    variant="p"
                                    sx={{
                                        fontFamily: "FSAlbert Regular",
                                        width: "280px",
                                        height: "53px",
                                        fontSize: "15px",
                                        color: "#333333"
                                    }}>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
                                </Typography>
                                <CardActions
                                    sx={{
                                        fontFamily: "FSAlbert Regular",
                                        backgroundColor: "#232B76",
                                        borderRadius: "16px",
                                        width: "95px",
                                        mt: "10px",
                                        fontSize: "15px",
                                        color: "#FFFFFF",
                                        fontWeight: "bold",
                                        justifyContent: "center",
                                        m: "10px auto"
                                    }}>
                                    See Bio
                                </CardActions>
                            </CardContent>
                        </Card>
                    </Grid>
                )) : dataList.slice().reverse().map((img) => (
                    <Grid justifyContent="center" item xs={2} sm={3} md={3} key={img?.index}>
                        <Card sx={{ width: "280px", height: "302px", mr: "92px", boxShadow: "none" }}>
                            <CardMedia
                                sx={{ width: "150px", height: "150px", ml: "65px" }}
                                component="img"
                                image={img?.img}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography
                                    sx={{
                                        fontFamily: "FSAlbert Regular",
                                        fontSize: "21px",
                                        fontWeight: "bold",
                                        color: "#042164",
                                        mb: "5px"
                                    }}>
                                    Dr. Name Surname
                                </Typography>
                                <Typography
                                    variant="p"
                                    sx={{
                                        fontFamily: "FSAlbert Regular",
                                        width: "280px",
                                        height: "53px",
                                        fontSize: "15px",
                                        color: "#333333"
                                    }}>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
                                </Typography>
                                <CardActions
                                    sx={{
                                        fontFamily: "FSAlbert Regular",
                                        backgroundColor: "#232B76",
                                        borderRadius: "16px",
                                        width: "95px",
                                        mt: "10px",
                                        fontSize: "15px",
                                        color: "#FFFFFF",
                                        fontWeight: "bold",
                                        justifyContent: "center",
                                        m: "10px auto"
                                    }}>
                                    See Bio
                                </CardActions>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default Speakers