import React from 'react'
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Teaser() {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    const handleClickAway = () => {
        setOpen(false);
    };

    const styles = {
        position: 'absolute',
        top: 50,
        right: 0,
        left: -120,
        zIndex: 1,
        border: '1px solid',
        p: 1,
        bgcolor: 'background.paper',
        width: '300px',
        height: '100wv',
    };


    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <Box sx={{ position: 'relative' }}>
                <Button type="button" onClick={handleClick} sx={{
                    fontFamily: "FSAlbert Regular",
                    my: 2,
                    color: '#232B76',
                    display: 'block',
                    fontSize: "14px",
                }}>
                    TEASER
                </Button>
                {open ? (
                    <Box sx={styles}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque soluta odio culpa velit sed! Ipsa a doloribus laboriosam. Illum, adipisci accusantium! Facilis, eos neque. Libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, saepe.
                    </Box>
                ) : null}
            </Box>
        </ClickAwayListener>
    )
}

export default Teaser
