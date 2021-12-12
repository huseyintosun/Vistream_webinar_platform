import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function OverviewModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button sx={{
                fontFamily: "FSAlbert Regular",
                my: 2,
                color: '#232B76',
                display: 'block',
                fontSize: "14px",
            }} onClick={handleOpen}>OVERWIEW</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h3" component="h2">
                        Next Webinar
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eius dignissimos autem assumenda blanditiis natus aliquid suscipit laboriosam perferendis non reprehenderit quam dolorem totam enim deleniti error fugiat, et unde? Minus ea eos repellat reprehenderit ab commodi tempora quis totam error! Blanditiis, ipsam perspiciatis eaque a tempora ipsa quia odio nisi facere, impedit quod perferendis sequi fugit molestiae minima repudiandae accusantium! Illum minus, quisquam ut unde similique nobis, nulla nesciunt, voluptate earum et saepe velit. Ipsum, quas iure praesentium quibusdam consequatur eum iusto, dolorum veritatis excepturi laborum aspernatur voluptatum architecto modi corrupti, exercitationem dolores et. Quaerat sint dignissimos repudiandae blanditiis!
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
