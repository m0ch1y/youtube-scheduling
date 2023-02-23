import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Stack } from "@mui/system";

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ minWidth: 300, maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://i.ytimg.com/vi/Nz5b7Mxm3bY/hq720_live.jpg?sqp=CJS-3p8G-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLdQwb8CbkAp5vQ6rtsmABn1mpFA"
        />
      </CardActionArea>
      <Stack ml={1} direction={"row"} spacing={4}>
        <YouTubeIcon fontSize="large" sx={{ color: "red" }} />
        <Typography gutterBottom variant="h6" component="div">
          title
        </Typography>
      </Stack>
    </Card>
  );
}
