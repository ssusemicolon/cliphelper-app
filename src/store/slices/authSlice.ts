import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSigned: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSigned: (state, action: PayloadAction<boolean>) => {
      state.isSigned = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
