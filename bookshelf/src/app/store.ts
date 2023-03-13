import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import bookshelfReducer from '../features/bookshelfSlice';
import { Middleware } from 'redux';


const localStorageMiddleware: Middleware = ({ getState }) => {
  return next => action => {
    const result = next(action);
    localStorage.setItem('booklist', JSON.stringify(getState()));
    return result;
  };
};

const loadStore = () => {
    const savedBookshelf = (localStorage.getItem('booklist'));
    return savedBookshelf === null ? {} : JSON.parse(savedBookshelf);
};

export const store = configureStore({
  reducer: {
    bookshelf: bookshelfReducer,
  },
  preloadedState: loadStore(),
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(localStorageMiddleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;