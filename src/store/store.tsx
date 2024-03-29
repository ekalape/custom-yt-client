import { Store, combineReducers, configureStore } from '@reduxjs/toolkit/react';
import searchReducer from './slices/searchSlice';
import favoriteReducer from './slices/favoriteSlice';
import sortingReducer from './slices/sortingSlice';

const reducers = combineReducers({
  search: searchReducer,
  favorites: favoriteReducer,
  sort: sortingReducer,
});

const store: Store = configureStore({ reducer: reducers });

export default store;
export type StoreStateType = ReturnType<typeof store.getState>;
