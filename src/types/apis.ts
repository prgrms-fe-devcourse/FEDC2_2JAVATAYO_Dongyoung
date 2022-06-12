export interface ISignIn {
  email: string;
  password: string;
}

export interface ISignUp {
  email: string;
  fullName: string;
  password: string;
}

export interface IChangInfo {
  fullName: string;
  userName: string;
}

export interface IUserPostList {
  offset: number;
  limit: number;
}

export interface ICreateComment {
  comment: string;
  postId: string;
}

export interface ICreateNotification {
  notificationType: string;
  notificationTypeId: string;
  userId: string;
  postId?: string;
}
