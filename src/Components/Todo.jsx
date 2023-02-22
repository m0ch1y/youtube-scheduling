import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Typography } from "@mui/material";
import { Stack } from "@mui/system";

const Todo = ({ content, index, todos, setTodos }) => {
  const handleTodoDelete = () => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <Stack direction="row" spacing={3} justifyContent="right" mr={4}>
      <Typography pt={0.8} variant="h7">
        {content}
      </Typography>
      <IconButton onClick={handleTodoDelete} variant="outlined">
        <DeleteIcon sx={{ color: "red" }} />
      </IconButton>
    </Stack>
  );
};

export default Todo;
