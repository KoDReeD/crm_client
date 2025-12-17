import { useState } from "react"

export const useTodos = (initialTodos = []) => {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState("");

    const addTodo = () => {
        if (!text.trim().length) return;

        setTodos([
            ...todos,
            {
                id: Date.now(),
                text: text.trim(),
                completed: false
            }
        ])

        setText('');
    };

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const toggleTodo = (id) => {
        setTodos(todo => todo.id === id
            ? { ...todo, completed: !todo.completed }
            : todo
        )
    };

    return {
        todos,
        text,
        setText,
        addTodo,
        removeTodo,
        toggleTodo
    }
}