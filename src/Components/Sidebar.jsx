import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Stack } from "@mui/system";
import Name from "./keyword";
// import AddCircleIcon from "@mui/icons-material/AddCircle";
import axios from "axios";

export default function TemporaryDrawer({ videos, setVideos }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setopen] = useState(false);
  const toggleOpen = () => {
    setopen(!open);
  };

  const handleSubmit = async (event) => {
    if (searchTerm === "") {
      alert("空文字は入力できません。");
    } else {
      const searchUrl = `https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${process.env.REACT_APP_API_KEY}&part=snippet&type=video&eventType=completed&maxResults=8`;
      const response = await axios.get(searchUrl);
      const videoData = response.data.items.map((item) => {
        return {
          id: item.id.videoId,
          url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.high.url,
        };
      });
      setVideos([
        ...videos,
        {
          keyword: searchTerm,
          details: videoData,
        },
      ]);
    }
    setSearchTerm("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Enterキーによる改行を無効化する
      handleSubmit(searchTerm);
    }
  };

  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleOpen}
        sx={{ mr: 2 }}
      >
        <MenuIcon fontSize="large" />
      </IconButton>
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleOpen}
        PaperProps={{
          style: { width: "20%", minWidth: "220px", maxWidth: "300px" },
        }}
      >
        <Typography variant="h6" textAlign={"center"} mt={2}>
          登録チャンネル
        </Typography>
        <Stack direction={"row"} p={1} justifyContent="center">
          <TextField
            fullWidth
            id="standard-basic"
            label="入力"
            variant="standard"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            onKeyPress={handleKeyPress}
          />
          {/* <IconButton color="secondary" onClick={handleSubmit}>
            <AddCircleIcon fontSize="large" />
          </IconButton> */}
        </Stack>
        <ul style={{ listStyle: "none" }}>
          {videos.map((item, index) => {
            return (
              <li key={index}>
                <Name
                  content={item.keyword}
                  index={index}
                  todos={videos}
                  setTodos={setVideos}
                />
              </li>
            );
          })}
        </ul>
      </Drawer>
    </div>
  );
}
