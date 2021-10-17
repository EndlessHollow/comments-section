import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CommentsData } from "../types/types";

const initialState: CommentsData[] = [];

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    receiveComments: (_, action: PayloadAction<CommentsData[]>) =>
      action.payload,
  },
});

export const { receiveComments } = commentsSlice.actions;

export const commentsReducer = commentsSlice.reducer;
