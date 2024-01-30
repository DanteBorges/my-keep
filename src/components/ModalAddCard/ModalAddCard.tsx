import { StyledDialog, StyledDialogTitle } from "./styles";
import React, { useEffect, useState } from "react";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { Grid, TextField } from "@mui/material";

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
      <StyledDialog
        open={open}
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title"
      >
        <StyledDialogTitle>Create To do List Card</StyledDialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            // value={formData.name}
            // onChange={handleChange}
          />
          <TextField
            margin="dense"
            id="status"
            label="status"
            type="text"
            fullWidth
            // value={formData.email}
            // onChange={handleChange}
          />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                margin="dense"
                id="hours"
                label="Hours"
                type="number"
                fullWidth
                // value={hours}
                // onChange={(e) => setHours(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                margin="dense"
                id="minutes"
                label="Minutes"
                type="number"
                fullWidth
                // value={minutes}
                // onChange={(e) => setMinutes(e.target.value)}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="error" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" color="success" onClick={handleClose}>
            Save
          </Button>
        </DialogActions>
      </StyledDialog>
    </>
  );
};

export default ModalAddCard;
