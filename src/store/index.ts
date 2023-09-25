import { configureStore } from '@reduxjs/toolkit';

import ipSlice from './ipInfoSlice';
import userSlice from './userSlice';

export const store = configureStore({
    reducer: {
        ip: ipSlice,
        user: userSlice,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
