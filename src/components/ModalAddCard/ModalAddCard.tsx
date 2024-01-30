import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { DialogContentText } from "@mui/material";

interface ModalProps {
  open: boolean;
  onClose: () => void; 
}

const ModalAddCard: React.FC<ModalProps> = ({ open, onClose }) => {
  const [close, setClose] = useState(true);

  useEffect(() => {
    setClose(!open);
  }, [open]);

  const handleClose = () => {
    setClose(true); 
    onClose(); 
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose} 
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle id="draggable-dialog-title">
          Create To do List Card
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="error" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" color="success" onClick={handleClose}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ModalAddCard;
