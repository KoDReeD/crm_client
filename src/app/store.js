import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todo/slices/todoSlice'

export default configureStore({
    reducer: {
        todos: todoReducer
    }
})
