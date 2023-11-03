"use client";

import React from "react";
import { Grid, Typography, Link, Box, Stack } from "@mui/material";
import Image from "next/image";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
        padding: "55px 53px",
      }}
    >
      <Grid container spacing={8}>
        <Grid item xs={12} sm={4}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              color: (theme) => theme.palette.common.white,
            }}
          >
            Logo
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{
              color: "#7A8793",
            }}
          >
            Search for will uncover many web sites variables onto of passages of
            lorem ipsum available but the majority the words all predefined
            humour to met chunks recently with desktop.
          </Typography>
          <Stack direction="row" spacing={2} mt={2}>
            <Image
              src="/icons/social/facebook.svg"
              width={30}
              height={30}
              alt="facebook"
            />
            <Image
              src="/icons/social/twitter.svg"
              width={30}
              height={30}
              alt="facebook"
            />
            <Image
              src="/icons/social/linkedin.svg"
              width={30}
              height={30}
              alt="facebook"
            />
            <Image
              src="/icons/social/instagram.svg"
              width={30}
              height={30}
              alt="facebook"
            />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              color: (theme) => theme.palette.common.white,
            }}
          >
            Quick Links
          </Typography>
          <Stack
            direction="column"
            spacing={2}
            mt={2}
            sx={{
              "& li": {
                listStyleType: "none",
                "& img": {
                  marginRight: "10px",
                },
              },
            }}
          >
            <li>
              <Image
                src="/icons/quickLinks/box.svg"
                width={16}
                height={16}
                alt="box"
              />
              <Link
                href="#"
                variant="body2"
                sx={{
                  color: "#7A8793",
                  textDecoration: "none",
                }}
              >
                About Us
              </Link>
            </li>
            <li>
              <Image
                src="/icons/quickLinks/box.svg"
                width={16}
                height={16}
                alt="box"
              />
              <Link
                href="#"
                variant="body2"
                sx={{
                  color: "#7A8793",
                  textDecoration: "none",
                }}
              >
                About Us
              </Link>
            </li>
            <li>
              <Image
                src="/icons/quickLinks/box.svg"
                width={16}
                height={16}
                alt="box"
              />
              <Link
                href="#"
                variant="body2"
                sx={{
                  color: "#7A8793",
                  textDecoration: "none",
                }}
              >
                About Us
              </Link>
            </li>
            <li>
              <Image
                src="/icons/quickLinks/box.svg"
                width={16}
                height={16}
                alt="box"
              />
              <Link
                href="#"
                variant="body2"
                sx={{
                  color: "#7A8793",
                  textDecoration: "none",
                }}
              >
                About Us
              </Link>
            </li>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              color: (theme) => theme.palette.common.white,
            }}
          >
            Contact Info
          </Typography>
          <Stack
            direction="column"
            spacing={2}
            mt={2}
            sx={{
              "& li": {
                listStyleType: "none",
                "& img": {
                  marginRight: "10px",
                },
              },
            }}
          >
            <li>
              <Image
                src="/icons/social/address.svg"
                width={16}
                height={16}
                alt="box"
              />
              <Link
                href="#"
                variant="body2"
                sx={{
                  color: "#7A8793",
                  textDecoration: "none",
                }}
              >
                About Us
              </Link>
            </li>
            <li>
              <Image
                src="/icons/social/mail.svg"
                width={16}
                height={16}
                alt="box"
              />
              <Link
                href="#"
                variant="body2"
                sx={{
                  color: "#7A8793",
                  textDecoration: "none",
                }}
              >
                About Us
              </Link>
            </li>
            <li>
              <Image
                src="/icons/social/contact.svg"
                width={16}
                height={16}
                alt="box"
              />
              <Link
                href="#"
                variant="body2"
                sx={{
                  color: "#7A8793",
                  textDecoration: "none",
                }}
              >
                About Us
              </Link>
            </li>
            <li>
              <Image
                src="/icons/social/web.svg"
                width={16}
                height={16}
                alt="box"
              />
              <Link
                href="#"
                variant="body2"
                sx={{
                  color: "#7A8793",
                  textDecoration: "none",
                }}
              >
                About Us
              </Link>
            </li>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
