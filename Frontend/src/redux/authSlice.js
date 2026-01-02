import { createSlice } from '@reduxjs/toolkit';

// Load initial state from localStorage or sessionStorage
const getInitialState = () => {
    // Check localStorage first (Remember Me was checked)
    const localAuth = localStorage.getItem('isAuthenticated');
    // Then check sessionStorage (Remember Me was not checked)
    const sessionAuth = sessionStorage.getItem('isAuthenticated');

    return {
        isAuthenticated: localAuth === 'true' || sessionAuth === 'true',
    };
};

const authSlice = createSlice({
    name: 'auth',
    initialState: getInitialState(),
    reducers: {
        login: (state, action) => {
            const rememberMe = action.payload;
            state.isAuthenticated = true;

            if (rememberMe) {
                // Use localStorage for persistent login
                localStorage.setItem('isAuthenticated', 'true');
                sessionStorage.removeItem('isAuthenticated');
            } else {
                // Use sessionStorage for session-only login
                sessionStorage.setItem('isAuthenticated', 'true');
                localStorage.removeItem('isAuthenticated');
            }
        },
        logout: (state) => {
            state.isAuthenticated = false;
            // Clear both storages
            localStorage.removeItem('isAuthenticated');
            sessionStorage.removeItem('isAuthenticated');
        }
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
