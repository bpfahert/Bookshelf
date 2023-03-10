import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import bookshelfReducer from '../features/bookshelfSlice';

export const store = configureStore({
  reducer: {
    bookshelf: bookshelfReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;