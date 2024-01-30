import styled from "styled-components";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";

export const StyledDialog = styled(Dialog)`
  .MuiDialog-paper {
    background-color: #f0f0f0;
    border-radius: 10px;
    width: 26rem;
    height: 26rem;
  }
`;
export const StyledDialogTitle = styled(DialogTitle)`
  color: #0062ff;
  font-size: 16px;
  font-weight: bold;

  padding-bottom: 5px;
`;
