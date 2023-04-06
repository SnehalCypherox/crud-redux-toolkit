import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    // { id: 1, name: 'John', email: 'john@example.com' },
    // { id: 2, name: 'abc', email: 'abc@example.com' },
];

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
        editUser: (state, action) => {
            const { id, email, name } = action.payload;
            const existingUser = state.find(user => user.id === id)
            if (existingUser) {
                existingUser.name = name;
                existingUser.email = email;
            }
        },
        deleteUsers(state, action) {
            const {id} = action.payload;
            const existingUser = state.find(user => user.id === id)
            if (existingUser) {
                return state.filter(user => user.id !== id)
            }
        },
        removeUser(state, action) {
            state.splice(action.payload)
        },
    }
});

export const { addUser, editUser, removeUser, deleteUsers } = userSlice.actions
export default userSlice.reducer