import { articleFormReducer } from './articleForm';
import { authReducer } from './authSlice';
import { clipWriteReducer } from './clipWriteForm';

export const reducers = {
  auth: authReducer,
  clipWrite: clipWriteReducer,
  articleForm: articleFormReducer,
};
