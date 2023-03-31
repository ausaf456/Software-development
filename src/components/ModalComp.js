import * as React from 'react';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from './Button';
import CancelIcon from '@mui/icons-material/Cancel';
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

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
const {heading,para,btnText}=props

  return (
    <div >
      <Button onClick={handleOpen}   text={btnText?btnText:"modal"} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
          <div style={{textAlign:"end"}}>

        <CancelIcon onClick={handleClose} size='18' sx={{color:"red" ,cursor:"pointer"}}/>
          </div>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          {heading}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {para}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}