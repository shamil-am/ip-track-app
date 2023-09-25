import userService from '@/services/userService';
import { IUserProfileData } from '@/types/user';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface IinitialState {
    isLoading: boolean;
    userData: IUserProfileData | null;
}

const initialState: IinitialState = {
    isLoading: false,
    userData: null,
};

export const getUserData = createAsyncThunk('user/getData', async () => {
    const response = await userService.getProfileData();

    if (response.status === 200) {
        return response.data?.data;
    }
    return null;
});

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        removeUser: (state) => {
            state.userData = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getUserData.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getUserData.fulfilled, (state, { payload }) => {
            state.userData = payload;
            state.isLoading = false;
        });
    },
});

export const { removeUser } = userSlice.actions;

export default userSlice.reducer;
