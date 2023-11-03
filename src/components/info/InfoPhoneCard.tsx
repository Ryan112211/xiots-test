import { Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const InfoPhoneCard = () => {
  return (
    <Grid item xs={12} sm={4} md={2}>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Image
          src="/icons/info/phoneIcon.svg"
          width={45}
          height={45}
          alt="logo"
        />
        <Typography
          sx={{
            fontSize: 20,

            fontWeight: 600,
            color: "#1C2B39",
          }}
        >
          +1-234-000-2345
        </Typography>
      </Stack>
    </Grid>
  );
};

export default InfoPhoneCard;
