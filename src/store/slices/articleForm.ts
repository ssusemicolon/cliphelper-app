import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: ArticleAppendForm = {
  url: '',
  title: '',
  thumbnail: '',
  description: '',
  memo: '',
  tags: [],
};

const articleFormSlice = createSlice({
  name: 'articleForm',
  initialState,
  reducers: {
    init: (state, action: PayloadAction<ArticleAppendForm>) => {
      Object.entries(action.payload).forEach(([key, value]) => {
        state[key as keyof ArticleAppendForm] = value;
      });
      state = { ...action.payload };
    },
    changeForm: <T extends keyof ArticleAppendForm>(
      state: ArticleAppendForm,
      {
        payload: { key, value },
      }: PayloadAction<{
        key: T;
        value: ArticleAppendForm[T];
      }>,
    ) => {
      state[key] = value;
    },
  },
});

export const articleFormReducer = articleFormSlice.reducer;
export const articleFormActions = articleFormSlice.actions;
