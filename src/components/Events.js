import React from 'react'
import { Box, Typography } from '@mui/material'
import Slider from './Slider'

function Events() {
    return (
        <Box
            id="events"
            sx={{
                height: "665px",
                width: "1920px",
                backgroundColor: "#F7F8FB"
            }}>
            <Typography
                sx={{
                    textAlign: "center",
                    fontSize: "40px",
                    fontWeight: "bold",
                    fontFamily: "FSAlbert Regular",
                    width: "711px",
                    height: "45px",
                    color: "#042164",
                    ml: "605px",
                    p: "78px 0px 75px",
                }}>
                UPCOMING EVENTS
            </Typography>
            <Slider />
        </Box>
    )
}

export default Events
