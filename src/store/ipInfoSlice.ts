import ipService from '@/services/ipService';
import { IipInfo } from '@/types/ipInfo';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface IinitialState {
    isLoading: boolean;
    ipInfo: IipInfo | null;
}

const initialState: IinitialState = {
    isLoading: false,
    ipInfo: null,
};

export const getIpInfo = createAsyncThunk('ip/getInfo', async (ip: string) => {
    const response = await ipService.getIpInfo(ip);

    if (response.status === 200) {
        return response.data?.data;
    }
    return null;
});

export const ipInfoSlice = createSlice({
    name: 'ip',
    initialState,
    reducers: {
        resetState(state) {
            state.ipInfo = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getIpInfo.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getIpInfo.fulfilled, (state, { payload }) => {
            state.ipInfo = payload;
            state.isLoading = false;
        });
    },
});

export const { resetState } = ipInfoSlice.actions;

export default ipInfoSlice.reducer;
