import { Button, Card, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import CustomButton from "../button/CustomButton";

const UserCard = () => {
  return (
    <Card
      sx={{
        bgcolor: "#fff",
        minHeight: "432px",
        maxWidth: "276px",
      }}
    >
      <Stack direction="column" alignItems="center">
        <Stack
          p={2}
          direction="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <Typography
            sx={{
              fontSize: 18,
              fontWeight: 700,
              color: "#111111",
            }}
          >
            Rehan
          </Typography>
          <Typography
            sx={{
              fontSize: 16,
              fontWeight: 400,
              color: "#757F95",
            }}
          >
            john@example.com
          </Typography>
        </Stack>
        <CustomButton
          variant="contained"
          startIcon={
            <Image
              src="/icons/button/postIcon.svg"
              width={16}
              height={16}
              alt="logo"
            />
          }
          sx={{
            backgroundColor: "#FECE01",
            color: "#fff",
            fontWeight: 600,
            minWidth: 236,
            borderRadius: "8px",

            justifyContent: "flex-start",
            textTransform: "capitalize",
          }}
        >
          Posts
        </CustomButton>
      </Stack>
    </Card>
  );
};

export default UserCard;
