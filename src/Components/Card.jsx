import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Popup from "./Title_popup";

export default function ActionAreaCard({ title, thumbnail, url }) {
  return (
    <Card
      style={{ display: "inline-block" }}
      sx={{ minWidth: 300, maxWidth: 300 }}
    >
      <CardActionArea href={url} target="_blank" rel="noopener">
        <CardMedia component="img" height="120" image={thumbnail} />
      </CardActionArea>
      <Popup title={title} />
    </Card>
  );
}
