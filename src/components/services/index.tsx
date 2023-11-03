/* eslint-disable @next/next/no-img-element */
"use client";

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

const Services = () => {
  const cardData = [
    {
      src: "/icons/service/service1.svg",
      title: "Restaurants",
      description: "A more recently with desktop softy like aldus page maker.",
    },
    {
      src: "/icons/service/service2.svg",
      title: "Airports",
      description: "A more recently with desktop softy like aldus page maker.",
    },
    {
      src: "/icons/service/service3.svg",
      title: "Hospitals",
      description: "A more recently with desktop softy like aldus page maker.",
    },
    {
      src: "/icons/service/service4.svg",
      title: "Beaches",
      description: "A more recently with desktop softy like aldus page maker.",
    },
    {
      src: "/icons/service/service5.svg",
      title: "Shopping Malls",
      description: "A more recently with desktop softy like aldus page maker.",
    },
    {
      src: "/icons/service/service6.svg",
      title: "Wedding Parties",
      description: "A more recently with desktop softy like aldus page maker.",
    },
  ];
  return (
    <Box
      sx={{
        bgcolor: (theme) => theme.palette.background.default,
        padding: "55px 53px",
        textAlign: "center",
      }}
    >
      <Stack direction="column" alignItems="center" spacing={2}>
        <Typography
          sx={{
            fontSize: 40,
            fontWeight: 600,
            color: "#444444",
          }}
        >
          Our Services
        </Typography>
        <Image src="/icons/breakIcon.svg" width={43} height={22} alt="logo" />

        <Typography
          sx={{
            fontSize: "15px",
            color: "#777777",
          }}
        >
          Lorem Ipsum passages, and more recently with desktop publishing
          software like aldus pageMaker including versions.
        </Typography>
      </Stack>
      <Grid container spacing={4} p={4}>
        {cardData.map((card) => (
          <Grid item xs={12} sm={6} md={4} key={card?.title}>
            <Card
              sx={{
                maxWidth: 416,
                height: 321,
                backgroundColor: "#fff",
              }}
            >
              <CardMedia
                title=""
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "#f8f8f8",
                  border: "10px solid #fff",
                  padding: "25px",
                }}
                component="div"
              >
                <img
                  src={card?.src}
                  alt=""
                  style={{
                    objectFit: "contain",
                    height: "100%",
                    width: "100%",
                    maxWidth: "76px",
                    maxHeight: "76px",
                  }}
                />
              </CardMedia>
              <CardContent sx={{ p: "0 16px" }}>
                <Typography gutterBottom fontWeight={600} textAlign="center">
                  {card.title}
                </Typography>
                <Typography
                  gutterBottom
                  color="#868686"
                  fontWeight={400}
                  textAlign="center"
                >
                  {card?.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
