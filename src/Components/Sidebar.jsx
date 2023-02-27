import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Stack } from "@mui/system";
import Name from "./keyword";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export default function TemporaryDrawer({ handleSubmit, videos, setVideos }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setopen] = useState(false);
  const toggleOpen = () => {
    setopen(!open);
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
        PaperProps={{ style: { width: "22%" } }}
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
          />
          <IconButton
            color="secondary"
            onClick={() => {
              handleSubmit(searchTerm);
            }}
          >
            <AddCircleIcon fontSize="large" />
          </IconButton>
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
