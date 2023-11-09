import { articleFormReducer } from './articleForm';
import { clipWriteReducer } from './clipWriteForm';

export const reducers = {
  clipWrite: clipWriteReducer,
  articleForm: articleFormReducer,
};
