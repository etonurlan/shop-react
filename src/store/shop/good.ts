import { createSlice } from "@reduxjs/toolkit";

export const goodSlice = createSlice({
    name: "good",
    initialState: { value: { id: 0 } },
    reducers: {
        getGoodId: (state, action) => {
            state.value = action.payload
        },
    },
})


export const { getGoodId } = goodSlice.actions

export default goodSlice.reducer