/* eslint-disable @next/next/no-img-element */
"use client";

import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Booking = () => {
  const cardData = [
    {
      src: "/icons/booking/1.svg",
    },
    {
      src: "/icons/booking/2.svg",
    },
    {
      src: "/icons/booking/3.svg",
    },
  ];
  return (
    <Box
      sx={{
        backgroundImage: "url(/icons/booking/bookingBg.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",

        height: "100%",
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        padding="55px 53px"
        sx={{
          background: "#182734CC",
          height: "100%",
          textAlign: "center",
        }}
      >
        <Stack direction="column" alignItems="center" spacing={2}>
          <Typography
            sx={{
              fontSize: 40,
              fontWeight: 600,
              color: "#fff",
            }}
          >
            Deals on Booking
          </Typography>
          <Image src="/icons/breakIcon.svg" width={43} height={22} alt="logo" />

          <Typography
            sx={{
              fontSize: "15px",
              color: "#fff",
            }}
          >
            Lorem Ipsum passages, and more recently with desktop publishing
            software and applications like aldus pageMaker which has different
            variations.
          </Typography>
        </Stack>
        <Grid container spacing={4} p={4}>
          {cardData.map((card) => (
            <Grid item xs={12} sm={6} md={4} key={card?.src}>
              <img
                src={card?.src}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  maxWidth: "316px",
                  maxHeight: "316px",
                }}
                alt="logo"
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Booking;
