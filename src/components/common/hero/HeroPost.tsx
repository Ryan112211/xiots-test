"use client";

import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const HeroPost = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url(/icons/hero/heroBg.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "355px",
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        padding={4}
        sx={{
          background: "#182734CC",
          height: "100%",
          textAlign: "center",
        }}
      >
        <Grid item xs={12}>
          <Typography
            sx={{
              fontSize: "50px",
              fontWeight: 600,
              textTransform: "uppercase",
              color: (theme) => theme.palette.common.white,
            }}
          >
            Posts
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: 500,
              color: (theme) => theme.palette.common.white,
            }}
          >
            Home » Posts
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroPost;
