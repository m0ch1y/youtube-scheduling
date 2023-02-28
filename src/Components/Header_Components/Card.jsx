import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Popover from "../Popover";

export default function ActionAreaCard({ title, thumbnail, url }) {
  return (
    <Card
      style={{ display: "inline-block" }}
      sx={{ minWidth: 300, maxWidth: 300, borderRadius: "20px" }}
    >
      <CardActionArea href={url} target="_blank" rel="noopener">
        <CardMedia
          component="img"
          height="120"
          image={thumbnail}
          sx={{ height: "168px" }}
        />
      </CardActionArea>
      <Popover title={title} videoId={url.split("=")[1]} />
    </Card>
  );
}
