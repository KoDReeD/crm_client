import { TextField, Button, Box, List, ListItem, ListItemText, IconButton, ListItemButton, Checkbox, Divider } from "@mui/material";
import { useState } from "react";
import { CheckBox, Delete as DeleteIcon } from '@mui/icons-material';

const TodoFeature = () => {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState("");

    const addTodo = () => {
        if (!text.trim()) return;

        setTodos([...todos, {
            id: Date.now(),
            text: text.trim(),
            completed: false
        }]);
        setText('');
    };

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id
                ? { ...todo, completed: !todo.completed }
                : todo
        ));
    };

    const onKeyPress = (e) => {
        if (e.key === "Enter") {
            addTodo();
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
                    onClick={addTodo}
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
                                <IconButton onClick={() => removeTodo(todo.id)}>
                                    <DeleteIcon color="error" />
                                </IconButton>
                            }>
                            <Checkbox
                                checked={todo.completed}
                                onChange={() => toggleTodo(todo.id)}
                            />
                            <ListItemText sx={{ textDecoration: todo.completed ? 'line-through' : 'none' }} primary={todo.text} />
                        </ListItem>
                    ))}
                </List>
            )}

            {todos.length > 0 && (
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
            )}

        </Box>
    );
}

export default TodoFeature;