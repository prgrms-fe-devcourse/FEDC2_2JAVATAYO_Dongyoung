import { useEffect, createContext, useContext, useReducer } from "react";
import storage from "../utils/storage";
import { authAPI } from "../utils/apis";

interface AuthProviderInterface {
  children: React.ReactNode;
}

const initialUser = {};
const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);
const reducer = (state, { type, payload }) => {
  switch (type) {
    case "INIT": {
      return {
        ...payload,
        isLoggedIn: true
      };
    }
    case "LOGIN": {
      return {
        ...payload,
        isLoggedIn: true
      };
    }
    case "LOGOUT": {
      return {
        ...payload,
        isLoggedIn: false
      };
    }
    case "UPDATE_USER_INFO": {
      return {
        ...state,
        ...payload,
        isLoggedIn: true
      };
    }
    default: {
      return alert("userContext 에러");
    }
  }
};

const AuthProvider: React.FC<AuthProviderInterface> = ({ children }) => {
  const [userInfo, dispatch] = useReducer(reducer, initialUser);
  const token = storage.getItem("TOKEN", "");

  useEffect(() => {
    const getInit = async () => {
      const { data } = await authAPI.checkAuthUser();
      if (token === "") dispatch({ type: "LOGOUT", payload: {} });
      else await dispatch({ type: "INIT", payload: data });
    };
    getInit();
  }, []);

  const onLogin = (user) => {
    dispatch({ type: "LOGIN", payload: user });
  };
  const onLogOut = () => {
    storage.removeItem("TOKEN");
    dispatch({ type: "LOGOUT", payload: initialUser });
  };
  const onUpdate = (newInfo) => {
    dispatch({ type: "UPDATE_USER_INFO", payload: newInfo });
  };

  return (
    <AuthContext.Provider value={{ userInfo, onLogin, onLogOut, onUpdate }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
