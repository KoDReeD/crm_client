import { TextField, Button, Box, List, ListItem, ListItemText, IconButton, ListItemButton, Checkbox, Divider } from "@mui/material";
import { useState } from "react";
import { CheckBox, Delete as DeleteIcon } from '@mui/icons-material';
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, toffleCompleteTodo } from "./slices/todoSlice";

const TodoFeature = () => {
    const dispatch = useDispatch();

    const todos = useSelector(state => state.todos.todos);

    const [text, setText] = useState("");

    const addTask = () => {
        dispatch(addTodo({ text }));
        setText("");
    }

    const onKeyPress = (e) => {
        if (e.key === "Enter") {
            addTask();
        }
    }

    return (
        <Box>
            {/* Форма */}
            <Box sx={{ display: 'flex', gap: 1, mx: 2 }}>
                <TextField
                    onKeyPress={onKeyPress}
                    size="small"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    variant="outlined"
                    label="Новая задача"
                    fullWidth >
                </TextField>
                <Button
                    // dispatch ожидает action
                    onClick={addTask}
                    variant="contained"
                    disabled={!text.trim()}
                >
                    Добавить
                </Button>
            </Box>
            {/* Список */}
            {todos.length === 0 ? (
                <Box sx={{ textAlign: 'center', py: 2, color: 'text.secondary' }}>
                    Задач пока нет
                </Box>
            ) : (
                <List>
                    {todos.map(todo => (
                        <ListItem
                            key={todo.id}
                            secondaryAction={
                                <IconButton onClick={() => dispatch(removeTodo({ id: todo.id }))}>
                                    <DeleteIcon color="error" />
                                </IconButton>
                            }>
                            <Checkbox
                                checked={todo.completed}
                                onChange={() => dispatch(toffleCompleteTodo({ id: todo.id }))}
                            />
                            <ListItemText sx={{ textDecoration: todo.completed ? 'line-through' : 'none' }} primary={todo.text} />
                        </ListItem>
                    ))
                    }
                </List >
            )}

            {
                todos.length > 0 && (
                    <>
                        <Divider sx={{ my: 2, borderBottomWidth: 2 }} />
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            mx: 2,
                        }}>
                            <span>Всего: {todos.length}</span>
                            <span>Выполнено: {todos.filter(todo => todo.completed).length}</span>
                        </Box>
                    </>
                )
            }

        </Box >
    );
}

export default TodoFeature;