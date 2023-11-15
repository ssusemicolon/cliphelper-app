import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type FcmStoreType = {
  token: string;
  deviceType: string;
};

const initialState = {
  token: '',
  deviceType: '',
};

const fcmSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setFcm: (state, action: PayloadAction<FcmStoreType>) => {
      const { token, deviceType } = action.payload;
      state.token = token;
      state.deviceType = deviceType;
    },
  },
});

export const fcmReducer = fcmSlice.reducer;
export const fcmActions = fcmSlice.actions;
