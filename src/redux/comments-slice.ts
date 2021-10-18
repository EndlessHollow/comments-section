import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AddCommentData {
  commentId: string;
  commentData: CommentsData;
}

import { CommentsData } from "../types/types";

const initialState: CommentsData[] = [];

let result: CommentsData;

const getCommentById = (state: CommentsData[], id: string): void => {
  for (const comment of state) {
    if (comment.id === id) {
      result = comment;
    } else {
      if (comment.comments.length) {
        getCommentById(comment.comments, id);
      }
    }
  }
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    receiveComments: (_, action: PayloadAction<CommentsData[]>) =>
      action.payload,
    addComment: (state, action: PayloadAction<AddCommentData>) => {
      getCommentById(state, action.payload.commentId);
      result.comments.push(action.payload.commentData);
    },
  },
});

export const { receiveComments, addComment } = commentsSlice.actions;

export const commentsReducer = commentsSlice.reducer;
