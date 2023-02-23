import { Button, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
import Todo from "./Todo";
import Contents from "./Contents";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const TodoList = () => {
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
      alert("空文字列は追加できません。");
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
  return (
    <div>
      <Stack direction={"row"} p={1} justifyContent="center">
        <TextField
          id="standard-basic"
          label="入力"
          variant="standard"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <Button color="primary" onClick={handleAddTodo}>
          <AddCircleIcon fontSize="large" />
        </Button>
      </Stack>
      <ul style={{ listStyle: "none" }}>
        {todos.map((item, index) => {
          return (
            <li key={index}>
              <Todo
                content={item.content}
                index={index}
                todos={todos}
                setTodos={setTodos}
              />
              <Contents content={item.content}></Contents>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
