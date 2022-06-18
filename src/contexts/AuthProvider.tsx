import useHandlers from "./useHandlers";
import { createContext, useContext } from "react";
interface AuthInterface {
  children: React.ReactNode;
}

const AuthContext = createContext(null);
export const useAuthContext = () => useContext(AuthContext);

const AuthProvider: React.FC<AuthInterface> = ({ children }) => {
  const { handleInit, handleSignIn, handleSignUp, handleLogOut } =
    useHandlers();

  const onInit = async () => {
    const userData = await handleInit();
    console.log(userData);
  };

  //{ email: "puh0128@gmail.com", password: "1234" };
  const onLogin = async () => {
    const data = await handleSignIn({
      email: "knk@gmail.com",
      password: "1234"
    });
    console.log(data);
    return data;
  };

  const onSignUp = async (data) => {
    const res = await handleSignUp(data);
    console.log(res);
  };
  return (
    <AuthContext.Provider value={{ onInit, onLogin, handleLogOut, onSignUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
