import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Perks = () => {
  const perks = [
    {
      title: "Best Price Guaranteed",
      description: "A more recently with desktopsofty like aldus page maker.",
      src: "perksMoney.svg",
    },
    {
      title: "24/7 Customer Care",
      description: "A more recently with desktopsofty like aldus page maker.",
      src: "perksCare.svg",
    },
    {
      title: "Home Pickups",
      description: "A more recently with desktopsofty like aldus page maker.",
      src: "perksHome.svg",
    },
    {
      title: "Easy Bookings",
      description: "A more recently with desktopsofty like aldus page maker.",
      src: "perksBooking.svg",
    },
  ];
  return (
    <Grid
      container
      spacing={2}
      padding="55px 53px"
      sx={{
        borderBottom: "1px solid #0000001A",
      }}
    >
      {perks.map((perk) => (
        <Grid item xs={12} sm={6} md={3} key={perk?.title}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Image
              src={`/icons/perks/${perk?.src}`}
              width={64}
              height={64}
              alt="logo"
            />
            <Stack direction="column" alignItems="flex-start">
              <Typography
                sx={{
                  fontSize: 18,
                  color: "#444444",
                  fontWeight: 500,
                }}
              >
                {perk?.title}
              </Typography>
              <Typography
                sx={{
                  color: "#777777",
                  textAlign: "left",
                }}
              >
                {perk?.description}
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
};

export default Perks;
