import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface unauthorizedState {
    showUnauthorized: boolean;
}

const initialState: unauthorizedState = {
    showUnauthorized: false
}

export const unauthorizedSlice = createSlice({
    name: 'unauthorized',
    initialState,
    reducers: {
        setShowUnauthorized: (state, action: PayloadAction<boolean>) => {
            state.showUnauthorized = action.payload
        },
    }
})

export const unauthorizedActions = unauthorizedSlice.actions

export const unauthorizedReducer = unauthorizedSlice.reducer