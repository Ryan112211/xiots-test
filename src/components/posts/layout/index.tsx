"use client";

import UserCard from "@/components/common/cards/UserCard";
import { Box, Grid } from "@mui/material";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const Posts = ({ children }: Props) => {
  return (
    <Box
      sx={{
        bgcolor: (theme) => theme.palette.background.default,
        padding: {
          xs: 4,

          md: "133px 125px",
          lg: "133px 125px",
        },
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={2}>
          <UserCard />
        </Grid>
        <Grid item xs={12} md={10}>
          {children}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Posts;
