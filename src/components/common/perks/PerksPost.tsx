import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const PerksPost = () => {
  const perks = [
    {
      title: "Best Price Guaranteed",
      description: "A more recently with desktopsofty like aldus page maker.",
      src: "perksMoneyWhite.svg",
    },
    {
      title: "24/7 Customer Care",
      description: "A more recently with desktopsofty like aldus page maker.",
      src: "perksCareWhite.svg",
    },
    {
      title: "Home Pickups",
      description: "A more recently with desktopsofty like aldus page maker.",
      src: "perksHomeWhite.svg",
    },
    {
      title: "Easy Bookings",
      description: "A more recently with desktopsofty like aldus page maker.",
      src: "perksBookingWhite.svg",
    },
  ];
  return (
    <Box
      sx={{
        backgroundImage: "url(/icons/perks/perksBg.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "191px",
      }}
    >
      <Grid
        container
        spacing={2}
        height="100%"
        p={4}
        sx={{
          background: "#182734CC",
          height: "100%",
          textAlign: "center",
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
                    color: "#fff",
                    fontWeight: 500,
                  }}
                >
                  {perk?.title}
                </Typography>
                <Typography
                  sx={{
                    color: "#fff",
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
    </Box>
  );
};

export default PerksPost;
