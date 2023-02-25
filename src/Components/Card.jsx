import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Stack } from "@mui/system";

export default function ActionAreaCard({title,thumbnail,url,startTime}) {
  return (
    <Card sx={{ maxWidth: 245 }}>
      <CardActionArea href={url} target="_blank" rel="noopener">
          <Stack ml={1} direction={"row"} spacing={1}>
            <YouTubeIcon fontSize="large" sx={{ color: "red" }} />
          <Typography
            className="text-left"
            gutterBottom
            variant="h7"
            component="div"
            pt={0.6}
          >
            {startTime}
          </Typography>
          </Stack>
        <CardMedia
          component="img"
          height="140"
          image={thumbnail}
        />
        <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {title}
            </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
