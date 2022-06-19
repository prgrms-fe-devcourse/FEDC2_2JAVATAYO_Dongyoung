import {
  useState,
  useEffect,
  createContext,
  useContext,
  useReducer
} from "react";
import storage from "../utils/storage";
import { authAPI } from "../utils/apis";

interface AuthProviderInterface {
  children: React.ReactNode;
}

const initialUser = { isLoggedIn: false };
const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);
const reducer = (state, { type, payload }) => {
  switch (type) {
    case "INIT": {
      return {
        ...state,
        ...payload,
        isLoggedIn: true
      };
    }
    case "LOGIN": {
      return {
        ...state,
        ...payload,
        isLoggedIn: true
      };
    }
    case "LOGOUT": {
      return {
        ...payload
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
  const [initData, setInitData] = useState({});
  const token = storage.getItem("TOKEN", "");
  useEffect(() => {
    const getInit = async () => {
      const response = await authAPI.checkAuthUser();
      setInitData(response.data);
    };
    getInit();

    if (token !== "") dispatch({ type: "INIT", payload: initData });
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
    <AuthContext.Provider value={{ userInfo, onLogin, onLogOut, onUpdate }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
