import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserData } from "../types/types";

const initialState: UserData[] = [];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    receiveUsers: (_, action: PayloadAction<UserData[]>) => action.payload,
  },
});

export const { receiveUsers } = usersSlice.actions;

export const usersReducer = usersSlice.reducer;
