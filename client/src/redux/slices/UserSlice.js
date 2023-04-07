import { createSlice } from '@reduxjs/toolkit'
import axios from "axios";

// const initialState = [];

const initialState = {
    data: [],
    loading: false,
    error: null,
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        // 
        addUserStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        addUserSuccess: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        addUserFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        // 
        addUser: (state, action) => {
            state.push(action.payload)
        },

        editUser: (state, action) => {
            const { id, email, name } = action.payload;
            const existingUser = state.find((user) => user.id === id)
            if (existingUser) {
                existingUser.name = name;
                existingUser.email = email;
            }
        },
        deleteUsers(state, action) {
            const { id } = action.payload;
            const existingUser = state.find((user) => user.id === id)
            if (existingUser) {
                return state.filter((user) => user.id !== id)
            }
        },
        removeUser(state, action) {
            state.splice(action.payload)
        },
    }
});

export const { addUserStart, addUserSuccess, addUserFailure, addUser, editUser, removeUser, deleteUsers } = userSlice.actions
export default userSlice.reducer