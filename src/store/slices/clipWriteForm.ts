import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  listSearchKeyword: '',
  roomsInput: {},
};

const clipWriteSlice = createSlice({
  name: 'clipWrite',
  initialState,
  reducers: {
    setChatRoomSearchInput: (state, action) => {
      state.listSearchKeyword = action.payload;
    },
  },
});

export const clipWriteReducer = clipWriteSlice.reducer;
export const clipWriteActions = clipWriteSlice.actions;
