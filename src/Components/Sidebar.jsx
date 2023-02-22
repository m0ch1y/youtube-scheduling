import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Typography } from "@mui/material";
import TodoList from "./TodoList";

export default function TemporaryDrawer() {
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
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleOpen}
        PaperProps={{ style: { width: "20%" } }}
      >
        <Typography variant="h6" textAlign={"center"} mt={2}>
          登録チャンネル
        </Typography>
        <TodoList />
      </Drawer>
    </div>
  );
}
