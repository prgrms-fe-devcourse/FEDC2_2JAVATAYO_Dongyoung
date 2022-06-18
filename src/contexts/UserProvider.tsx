import { useEffect, createContext, useContext, useReducer } from "react";
import storage from "../utils/storage";
import { authAPI } from "../utils/apis";

interface UserProviderInterface {
  children: React.ReactNode;
}

const initialUser = { isLoggedIn: false };
const UserContext = createContext(null);
export const useUser = () => useContext(UserContext);
const reducer = (state, { type, payload }) => {
  switch (type) {
    case "INIT": {
      return {
        ...state
      };
    }
    case "LOGIN": {
      return {
        ...state,
        ...payload
      };
    }
    case "LOGOUT": {
      return {
        ...payload
      };
    }
    case "onUpdate": {
      return {
        ...payload
      };
    }
    default: {
      return alert("userContext 에러");
    }
  }
};

const UserProvider: React.FC<UserProviderInterface> = ({ children }) => {
  const [userInfo, dispatch] = useReducer(reducer, initialUser);
  const handleInit = async () => {
    const data = await authAPI.checkAuthUser().then((res) => {
      return res.data;
    });
    return data;
  };
  useEffect(() => {
    const token = storage.getItem("TOKEN", "");

    if (token) dispatch({ type: "INIT", payload: "" });
    else dispatch({ type: "LOGOUT", payload: initialUser });
  }, []);

  const onLogin = (user) => {
    dispatch({ type: "LOGIN", payload: user });
  };
  const onLogOut = () => {
    dispatch({ type: "LOGOUT", payload: initialUser });
  };
  const onUpdate = (newInfo) => {
    dispatch({ type: "UPDATE_USER_INFO", payload: newInfo });
  };

  return (
    <UserContext.Provider value={{ userInfo, onLogin, onLogOut, onUpdate }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
