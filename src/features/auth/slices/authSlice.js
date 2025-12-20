import { createSlice } from "@reduxjs/toolkit";

const MOCK_USERS = [
    { id: 1, email: 'admin@test.com', password: '123456', name: 'Анна', role: 'admin' },
    { id: 2, email: 'user@test.com', password: '123456', name: 'Иван', role: 'user' }
];

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: null,
        isAuth: false,
        error: null
    },
    reducers: {
        login(state, action) {
            console.log('authSlice: login');

            var user = MOCK_USERS.find(x =>
                x.email.toLowerCase() === action.payload.email.toLowerCase() &&
                x.password === action.payload.password);

            if (!user) {
                state.error = 'Неверный email или пароль';
                return;
            }

            state.user = user;
            state.token = "myToken";
            state.isAuth = true;
            state.error = null;
        },
        // выход из системы
        logout(state) {
            state.user = null;
            state.token = null;
            state.isAuth = false;
            state.error = null;
        },
        resetError(state) {
            state.error = null;
        }
    }
})

export const { login, logout, resetError } = authSlice.actions;

export default authSlice.reducer;