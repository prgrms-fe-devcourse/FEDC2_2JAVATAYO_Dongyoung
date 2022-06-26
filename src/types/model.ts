export interface IUser {
  coverImage?: string; // 커버 이미지
  image?: string; // 프로필 이미지
  role: string;
  emailVerified: boolean; // 사용되지 않음
  banned: boolean; // 사용되지 않음
  isOnline: boolean;
  posts: IPost[];
  likes: ILike[];
  comments: string[];
  followers: IFollow[];
  following: IFollow[];
  notifications: INotification[];
  messages: IMessage[];
  _id: string;
  fullName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface IChannel {
  authRequired: boolean; // 사용되지 않음
  posts: string[];
  _id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface IPost {
  likes: ILike[];
  comments: IComment[];
  _id: string;
  image?: string;
  imagePublicId?: string;
  title: string;
  channel: IChannel;
  author: IUser;
  createdAt: string;
  updatedAt: string;
}

export interface ILike {
  _id: string;
  user: string; // 사용자 id;
  post: string; // 포스트 id;
  createdAt: string;
  updatedAt: string;
}

export interface IComment {
  _id: string;
  comment: string;
  author: IUser;
  post: string; // 포스트 id;
  createdAt: string;
  updatedAt: string;
}

export interface INotification {
  seen: boolean;
  _id: string;
  author: IUser;
  user: IUser | string;
  post?: string; // 포스트 id
  follow?: string; // 사용자 id
  comment?: IComment;
  message?: string; // 메시지 id
  createdAt: string;
  updatedAt: string;
}

export interface IFollow {
  _id: string;
  user: string; // 사용자 id
  follower: string; // 사용자 id
  createdAt: string;
  updatedAt: string;
}

export interface IConversation {
  _id: string[];
  message: string;
  sender: IUser;
  receiver: IUser;
  seen: boolean;
  createdAt: string;
}

export interface IMessage {
  _id: string;
  message: string;
  sender: IUser;
  receiver: IUser;
  seen: boolean;
  createdAt: string;
  updatedAt: string;
}
