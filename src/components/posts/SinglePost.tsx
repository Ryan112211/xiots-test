"use client";

import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  data: any;
}

const SinglePost = ({ data }: Props) => {
  const router = useRouter();
  return (
    <Card sx={{ p: 2, background: "#fff", minHeight: "432px" }}>
      <CardHeader
        sx={{
          fontWeight: 600,
          borderBottom: "1px solid #E5E5E5",
        }}
        title={
          <Stack direction="row" alignItems="center" spacing={2}>
            <IconButton aria-label="back" onClick={() => router.back()}>
              <Image
                src="/icons/actions/backIcon.svg"
                width={24}
                height={24}
                alt="logo"
              />
            </IconButton>
            <Typography
              sx={{
                fontSize: 20,
                fontWeight: 700,
                color: "#111111",
              }}
              gutterBottom
            >
              Posts
            </Typography>
          </Stack>
        }
      />
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {data?.title}
        </Typography>
        <Typography variant="body2">{data?.body}</Typography>
      </CardContent>
    </Card>
  );
};

export default SinglePost;
