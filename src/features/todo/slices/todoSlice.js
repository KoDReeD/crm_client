import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    // набор методов
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: Date.now(),
                text: action.payload.text.trim(),
                completed: false
            })
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id != action.payload.id);
        },
        toffleCompleteTodo(state, action) {
            // нахожу в тудушку которую изменяю
            const toggleTodo = state.todos.find(todo => todo.id === action.payload.id);
            // через proxie заботиться о том, чтобы иммутабильно
            toggleTodo.completed = !toggleTodo.completed;
        }
    },
});

//actions создаются автоматически, просто достаю через деструктуризацию
export const { addTodo, removeTodo, toffleCompleteTodo } = todoSlice.actions;

export default todoSlice.reducer;