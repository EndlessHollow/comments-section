import { UserData } from "../../types/types";

export const assignUserToComment = (users: UserData[], commentUserId: string) =>
  users.find((user) => user.id === commentUserId);
