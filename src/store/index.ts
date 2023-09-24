import { configureStore } from '@reduxjs/toolkit';

import ipSlice from './ipInfoSlice';

export const store = configureStore({
    reducer: {
        ip: ipSlice,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
