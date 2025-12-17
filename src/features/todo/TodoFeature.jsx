import { TextField, Button, Checkbox, List, ListItem, ListItemText, IconButton } from "@mui/material";
import { useState } from "react";
import { Delete as DeleteIcon } from '@mui/icons-material';

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

    return (
        <div>
            {/* Форма */}
            <div style={{ display: 'flex', gap: '10px', marginBottom: '2px' }}>
                <TextField
                    label="Новая задача"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    style={{ flex: 1 }}
                />
                <Button
                    variant="contained"
                    onClick={addTodo}
                    disabled={!text.trim()}
                >
                    Добавить
                </Button>
            </div>

            {/* Список */}
            {todos.length === 0 ? (
                <p style={{ textAlign: 'center', color: '#666' }}>
                    Нет задач
                </p>
            ) : (
                <List>
                    {todos.map(todo => (
                        <ListItem
                            key={todo.id}
                            style={{
                                backgroundColor: '#f5f5f5',
                                marginBottom: '8px',
                                borderRadius: '4px',
                            }}
                        >
                            <Checkbox
                                checked={todo.completed}
                                onChange={() => toggleTodo(todo.id)}
                            />
                            <ListItemText
                                primary={todo.text}
                                style={{
                                    textDecoration: todo.completed ? 'line-through' : 'none',
                                }}
                            />
                            <IconButton
                                edge="end"
                                onClick={() => removeTodo(todo.id)}
                                color="error"
                            >
                                <DeleteIcon />
                            </IconButton>
                        </ListItem>
                    ))}
                </List>
            )}
        </div>
    );
}

export default TodoFeature;