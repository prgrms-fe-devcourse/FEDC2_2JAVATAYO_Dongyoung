import { createContext, useContext, useReducer } from "react";
interface UserProviderInterface {
  children: React.ReactNode;
}
const initialUser = {
  coverImage: null,
  image: null,
  posts: null,
  likes: null,
  comments: null,
  followers: null,
  following: null,
  notifications: null,
  messages: null,
  _id: null,
  fullName: null,
  email: null,
  createdAt: null,
  updatedAt: null,
  token: null,
  isLoggedIn: false
};

const UserContext = createContext(null);
export const useUser = () => useContext(UserContext);

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "saveLoginInfo": {
      return {
        coverImage: payload.userData.coverImage,
        image: payload.userData.image,
        posts: payload.userData.posts,
        likes: payload.userData.likes,
        comments: payload.userData.comments,
        followers: payload.userData.followers,
        following: payload.userData.following,
        notifications: payload.userData.notifications,
        messages: payload.userData.messages,
        _id: payload.userData._id,
        fullName: payload.userData.fullName,
        email: payload.userData.email,
        createdAt: payload.userData.createdAt,
        updatedAt: payload.userData.updatedAt,
        token: payload.token,
        isLoggedIn: true
      };
    }
    default: {
      return alert("userContext 에러");
    }
  }
};

const UserProvider: React.FC<UserProviderInterface> = ({ children }) => {
  const [userInfo, dispatch] = useReducer(reducer, initialUser);
  const onSaveUserInfo = ({ userData, token }) => {
    dispatch({ type: "saveLoginInfo", payload: { userData, token } });
  };
  return (
    <UserContext.Provider value={{ userInfo, onSaveUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
