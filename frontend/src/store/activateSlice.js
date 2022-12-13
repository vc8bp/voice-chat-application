import { createSlice } from '@reduxjs/toolkit'

const initialState= {
    name: "",
    avatar: ""
}

const ActivateSlice = createSlice({
    name: "acrivate",
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setAvatar: (state, action) => {
            state.avatar = action.payload
        }
    }
})

export const { setName, setAvatar } = ActivateSlice.actions;
export default ActivateSlice.reducer