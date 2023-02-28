import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Stack } from "@mui/system";
import Name from "./keyword";
import Api_call from "../Api";

export default function TemporaryDrawer({ videos, setVideos }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setopen] = useState(false);
  const toggleOpen = () => {
    setopen(!open);
  };

  const handleSubmit = () => {
    if (searchTerm === "") {
      alert("空文字は入力できません。");
    } else if (videos.length === 10) {
      alert("10個までしか登録しないでください。");
    } else {
      Api_call(videos, setVideos, searchTerm);
      setSearchTerm("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Enterキーによる改行を無効化する
      handleSubmit();
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
            label="チャンネル名を入力"
            variant="standard"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            onKeyPress={handleKeyPress}
          />
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
