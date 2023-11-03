import InfoCards from "@/components/info/InfoCards";
import InfoPhoneCard from "@/components/info/InfoPhoneCard";
import { Grid } from "@mui/material";
import Image from "next/image";
import React from "react";

const InfoHeader = () => {
  const infoData = [
    {
      src: "/icons/info/infoAddress.svg",
      title: "Address",
      description: "England",
    },
    {
      src: "/icons/info/infoEmail.svg",
      title: "EmailUs",
      description: "abc@gmail.com",
    },
  ];
  return (
    <Grid
      container
      spacing={2}
      sx={{
        padding: 2,
        alignItems: "center",
      }}
    >
      <Grid item xs={12} sm={2}>
        <Image src="/icons/logo.svg" width={98} height={24} alt="logo" />
      </Grid>

      {infoData.map((info) => (
        <Grid item xs={12} sm={3} md={4} key={info?.title}>
          <InfoCards {...info} key={info.title} />
        </Grid>
      ))}
      <InfoPhoneCard />
    </Grid>
  );
};

export default InfoHeader;
