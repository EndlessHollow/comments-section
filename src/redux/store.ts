import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./users-slice";
import { commentsReducer } from "./comments-slice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    comments: commentsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
