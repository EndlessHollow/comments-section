import { UserData } from "../../types/types";

export const assignUserToComment = (users: UserData[], commentUserId: number) =>
  users.find((user) => user.id === commentUserId);
