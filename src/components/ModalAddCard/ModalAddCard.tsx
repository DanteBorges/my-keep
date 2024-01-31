import { StyledDialog, StyledDialogTitle } from "./styles";
import React, { useEffect, useState } from "react";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { Grid, TextField } from "@mui/material";
import axios from "axios";

interface ModalProps {
  open: boolean;
  typeCard: string;
  onClose: () => void;
  
}

interface Task {
  name: string;
  status: string;
  hours: number;
  minutes: number;
}

const initialTaskState: Task = {
  name: "",
  status: "", 
  hours: 0,
  minutes: 0,
};

const ModalAddCard: React.FC<ModalProps> = ({ open, onClose, typeCard }) => {
  const [close, setClose] = useState(true);
  const [task, setTask] = useState<Task>(initialTaskState);

  useEffect(() => {
    setClose(!open);
    setTask((prevTask) => ({ ...prevTask, status: typeCard }));
  }, [open, typeCard]);

  const handleClose = () => {
    setClose(true);
    onClose();
  };

  const handleChange = (field: keyof Task, value: string | number) => {
    setTask((prevTask) => ({ ...prevTask, [field]: value }));
  };

  const handleSave = async () => {
    try {
      await axios.post("http://localhost:3001/tasks", task);
      setTask(initialTaskState);
      handleClose();
      
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <>
      <StyledDialog
        open={open}
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title"
      >
        <StyledDialogTitle>Create {typeCard}</StyledDialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            value={task.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          <TextField
            margin="dense"
            id="status"
            label="Status"
            type="text"
            fullWidth
            disabled
            value={task.status}
          />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                margin="dense"
                id="hours"
                label="Hours"
                type="number"
                fullWidth
                value={task.hours}
                onChange={(e) => handleChange("hours", e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                margin="dense"
                id="minutes"
                label="Minutes"
                type="number"
                fullWidth
                value={task.minutes}
                onChange={(e) => handleChange("minutes", e.target.value)}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="error" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" color="success" onClick={handleSave}>
            Save
          </Button>
        </DialogActions>
      </StyledDialog>
    </>
  );
};

export default ModalAddCard;
