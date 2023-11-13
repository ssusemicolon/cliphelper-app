import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type AuthStoreType = {
  isSigned: boolean;
  userId: number;
};

const initialState = {
  isSigned: false,
  userId: 0,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSigned: (state, action: PayloadAction<AuthStoreType>) => {
      const { isSigned, userId } = action.payload;
      state.isSigned = isSigned;
      state.userId = userId;
    },
  },
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
