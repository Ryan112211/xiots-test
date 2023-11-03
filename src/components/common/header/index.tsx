"use client";

import { Box } from "@mui/material";
import React from "react";
import InfoHeader from "./InfoHeader";
import NavHeader from "./NavHeader";

const Header = () => {
  return (
    <Box
      sx={{
        bgcolor: (theme) => theme.palette.background.default,
      }}
    >
      <InfoHeader />
      <NavHeader />
    </Box>
  );
};

export default Header;
