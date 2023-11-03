import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import CustomButton from "../button/CustomButton";

interface IProps {
  open: boolean;
  // eslint-disable-next-line no-unused-vars
  setOpen: (arg0: boolean) => void;
  title: string;
  content: string;
  handleConfirm: () => void;
}

const ConfirmationModal = ({
  open,
  setOpen,
  title,
  content,
  handleConfirm,
}: IProps) => (
  <Box>
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{
        "& .MuiDialog-paper": {
          width: "400px",
          height: "260px",
          background: (theme) => theme.palette.background.default,
        },
      }}
    >
      <DialogTitle
        sx={{
          fontWeight: 700,
          fontSize: 18,
        }}
        id="alert-dialog-title"
      >
        <Stack direction="column" alignItems="flex-start">
          <Image
            src="/icons/modal/delete.svg"
            width={48}
            height={48}
            alt="logo"
          />
          <Typography sx={{ fontWeight: 700, fontSize: 18 }}>
            {title}
          </Typography>
        </Stack>
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          sx={{
            color: "#475467",
            fontSize: "14",
          }}
          id="alert-dialog-description"
        >
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CustomButton
          variant="contained"
          onClick={() => setOpen(false)}
          sx={{
            background: "transparent",
            color: "#344054",
            border: "1px solid #D0D5DD",
            borderRadius: "50px",
            minWidth: 170,
          }}
          autoFocus
        >
          Cancel
        </CustomButton>
        <CustomButton
          variant="contained"
          onClick={handleConfirm}
          sx={{
            background: "#E97369",
            color: "#fff",
            border: "1px solid #E97369  ",
            borderRadius: "50px",
            minWidth: 170,
          }}
        >
          Delete
        </CustomButton>
      </DialogActions>
    </Dialog>
  </Box>
);

export default ConfirmationModal;
