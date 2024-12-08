// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice';  // Adjust path if necessary
import themeReducer from './themeSlice';  // Adjust path if necessary

export const store = configureStore({
    reducer: {
        auth: authReducer,
        theme: themeReducer
    }
});