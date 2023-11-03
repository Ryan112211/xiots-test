import { Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const InfoCards = ({ src, title, description }: Props) => {
  return (
    <Stack spacing={2} direction="row" alignItems="center">
      <Image src={src} width={45} height={45} alt="logo" />

      <Stack>
        <Typography
          sx={{
            fontSize: 18,
            color: "#FECE01",
            fontWeight: 600,
          }}
        >
          {title}
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </Stack>
    </Stack>
  );
};

export default InfoCards;
