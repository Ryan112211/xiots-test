import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    backgroundColor: theme.palette.background.default,
    padding: "20px 30px",
  },
  "& .MuiDialogActions-root": {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle
      fontWeight={700}
      fontSize={21}
      sx={{
        m: 0,
        p: "30px 30px 16px",
        background: (theme) => theme.palette.background.default,
      }}
      {...other}
    >
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <Image
            src="/icons/actions/close.svg"
            width={20}
            height={20}
            alt="logo"
          />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

interface IProps {
  open: boolean;
  // eslint-disable-next-line no-unused-vars
  setOpen: (arg0: boolean) => void;
  children: React.ReactNode;
  title: React.ReactNode | string;

  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
}

export default function ModalComponent({
  open,
  setOpen,
  children,
  title,

  maxWidth = "md",
}: IProps) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <BootstrapDialog
      fullWidth
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      maxWidth={maxWidth}
    >
      <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        {title}
      </BootstrapDialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </BootstrapDialog>
  );
}
