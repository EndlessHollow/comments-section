export interface UserData {
  id: string;
  username: string;
  avatar: string;
}

export interface CommentsData {
  id: string;
  createdAt: string;
  text: string;
  user: string;
  comments: CommentsData[];
}
