/* eslint-disable @next/next/no-img-element */
"use client";

import {
  Box,
  Grid,
  Stack,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { use } from "react";
import CustomButton from "../button/CustomButton";
import Image from "next/image";

const HomeHero = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url(/icons/hero/homeHeroBg.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "870px",
      }}
    >
      <Grid
        container
        padding="0 75px"
        sx={{
          background: "#182734CC",
          height: "100%",
          alignItems: "center",
        }}
      >
        <Grid item xs={12} md={6}>
          <Stack direction="column" alignItems="flex-start" spacing={2}>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: 400,

                color: "#EAEAEA",
              }}
            >
              Free changes for life.
            </Typography>
            <Typography
              sx={{
                fontSize: "53px",
                fontWeight: 900,
                color: (theme) => theme.palette.common.white,
              }}
            >
              Hand-Made Website for Your Business
            </Typography>
            <CustomButton
              variant="contained"
              startIcon={
                <Image
                  src="/icons/hero/bookCall.svg"
                  width={14}
                  height={16}
                  alt="logo"
                />
              }
              sx={{
                backgroundColor: "#FECE01",
                color: "#fff",
                fontWeight: 600,
                minWidth: 180,
                borderRadius: "8px",
                minHeight: 54,

                textTransform: "capitalize",
              }}
            >
              Book Call
            </CustomButton>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="/icons/hero/heroMainImage.png"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            alt="logo"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeHero;
