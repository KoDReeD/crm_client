import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todo/slices/todoSlice'
import authSlice from '../features/auth/slices/authSlice'

export default configureStore({
    reducer: {
        todos: todoReducer,
        auth: authSlice
    }
})
