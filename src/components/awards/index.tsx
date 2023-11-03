/* eslint-disable @next/next/no-img-element */
"use client";

import { Grid, Stack, Theme, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import CustomButton from "../common/button/CustomButton";
import Image from "next/image";

const AwardSection = () => {
  const awardCards = [
    {
      src: "/icons/awards/awardHappy.svg",
    },
    {
      src: "/icons/awards/awardLuxury.svg",
    },
    {
      src: "/icons/awards/awardDriver.svg",
    },
  ];
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  const isTablet = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  return (
    <Grid
      container
      padding="55px 53px"
      mt={1}
      spacing={4}
      sx={{
        background: (theme) => theme.palette.background.default,
        height: "100%",
        alignItems: "center",
      }}
    >
      <Grid item xs={12} md={8}>
        <Stack
          direction="column"
          alignItems={isMobile ? "center" : "flex-start"}
          spacing={2}
        >
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 700,

              color: "#212529",
            }}
          >
            Like always. Like never before.
          </Typography>
          <Typography
            sx={{
              fontSize: "28px",
              fontWeight: 700,
              color: "#444444",
            }}
          >
            Hand-Made Website for Your Business
          </Typography>
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: 400,
              color: "#777777",
            }}
          >
            By automating processes and tasks, businesses can reduce costs and
            improve productivity. Additionally, custom software tailored to the
            specific needs of a business can give them a significant advantage
            over their competitors.
          </Typography>
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: 400,
              color: "#777777",
            }}
          >
            Our software development agency has a team of experienced and
            skilled professionalswho can create custom software solutions for
            your business. We understand the unique requirements of each
            business and create tailor-made solutions that can help them achieve
            their goals.
          </Typography>
          <CustomButton
            variant="contained"
            endIcon={
              <Image
                src="/icons/awards/arrowRight.svg"
                width={16}
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
            Get a Quote
          </CustomButton>
          <Stack
            spacing={4}
            paddingTop={4}
            direction={isMobile ? "column" : "row"}
          >
            {awardCards.map((awardCard) => (
              <Image
                key={awardCard.src}
                src={awardCard.src}
                width={152}
                height={126}
                alt="logo"
              />
            ))}
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12} md={4}>
        <img
          src="/icons/awards/awardImageRight.png"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
          alt="logo"
        />
      </Grid>
    </Grid>
  );
};

export default AwardSection;
