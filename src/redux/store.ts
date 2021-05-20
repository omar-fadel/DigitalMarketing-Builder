import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import NavigationReducer from './slice/navigation/navigation';

const rootReducer = combineReducers({
  navigation: NavigationReducer
})
export const store = configureStore({
  reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
