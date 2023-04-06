import { configureStore } from '@reduxjs/toolkit'
import UserSlice from './slices/UserSlice'

export const store = configureStore({
  reducer: {
    users: UserSlice
  },
  preloadedState: loadFromLocalStorage()
});

function saveToLocalStorage(state) {

  try {
      const serialState = JSON.stringify(state)
      localStorage.setItem("reduxStore", serialState)
  } catch (e) {
      console.warn(e);
  }
}

function loadFromLocalStorage() {

  try {
      const serialisedState = localStorage.getItem("reduxStore");
      if (serialisedState === null) return undefined;
      return JSON.parse(serialisedState);
  } catch (e) {
      console.warn(e);
      return undefined;
  }
}

store.subscribe(() => saveToLocalStorage(store.getState()));