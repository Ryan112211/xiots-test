import React from "react";
import { Button, ButtonProps } from "@mui/material";

interface GenericButtonProps extends ButtonProps {}

const CustomButton: React.FC<GenericButtonProps> = ({
  children,
  sx = {},
  ...rest
}) => {
  const { backgroundColor, background } = sx as any;
  const dynamicBackgroundColor = backgroundColor || background;

  return (
    <Button
      disableElevation
      disableFocusRipple
      disableRipple
      sx={{
        "&.MuiButtonBase-root:hover": {
          backgroundColor:
            dynamicBackgroundColor || ((theme) => theme.palette.primary.main),
          borderColor: (theme) =>
            dynamicBackgroundColor || theme.palette.primary.main,
        },

        ...sx,
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
