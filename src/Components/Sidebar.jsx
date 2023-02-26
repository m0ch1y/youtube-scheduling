import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { useEffect } from "react";
import Name from "./keyword";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export default function TemporaryDrawer() {
  const data = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState(data);

  useEffect(() => {
    const json = JSON.stringify(todos);
    localStorage.setItem("todos", json);
  }, [todos]);

  const handleAddTodo = () => {
    if (inputText === "") {
      alert("空文字列は入力できません。");
    } else {
      setTodos([
        ...todos,
        {
          content: inputText,
        },
      ]);
    }
    setInputText("");
  };

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
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          />
          <IconButton color="secondary" onClick={handleAddTodo}>
            <AddCircleIcon fontSize="large" />
          </IconButton>
        </Stack>
        <ul style={{ listStyle: "none" }}>
          {todos.map((item, index) => {
            return (
              <li key={index}>
                <Name
                  content={item.content}
                  index={index}
                  todos={todos}
                  setTodos={setTodos}
                />
              </li>
            );
          })}
        </ul>
      </Drawer>
    </div>
  );
}
