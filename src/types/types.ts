export interface UserData {
  id: number;
  username: string;
  avatar: string;
}

export interface CommentsData {
  id: number;
  createdAt: Date;
  text: string;
  user: number;
  comments: CommentsData[];
}
