import { articleFormReducer } from './articleForm';
import { authReducer } from './authSlice';
import { clipWriteReducer } from './clipWriteForm';
import { fcmReducer } from './fcmSlice';

export const reducers = {
  auth: authReducer,
  fcm: fcmReducer,
  clipWrite: clipWriteReducer,
  articleForm: articleFormReducer,
};
