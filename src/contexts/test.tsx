import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer
} from "react";
// import { authAPI } from "../utils/apis";
// import storage from "../utils/storage";
// interface AuthInterface {
//   children: React.ReactNode;
//   initialUser: any;
// }

// const initialAuth = {
//   isLoggedIn: false,
//   userInfo: {}
// };

// const AuthContext = createContext(null);
// export const useAuthContext = () => useContext(AuthContext);

// // const reducer = (state, action) => {
// //   switch (action.type) {
// //     case "INIT": {
// //       const token = storage.getItem("TOKEN", "");
// //       if (token) {
// //         authAPI.checkAuthUser().then((res) => {
// //           state.isLoggedIn = true;
// //           state.userInfo = res.data;
// //         });
// //     }
// //     // case "ADD_CONTENT": {
// //     //   return [action.payload, ...state];
// //     // }
// //     // case "DELETE_CONTENT": {
// //     //   const payload = action.payload;
// //     //   return state.filter((item) => item._id !== payload.id);
// //     // }
// //     default: {
// //       console.error("Wrong type");
// //       break;
// //     }
// //   }
// // };

// const AuthProvider: React.FC<AuthInterface> = ({
//   children,
//   initialUser
//   // initialUser //{email: 'dldl', password: 'dkld'}
// }) => {
//   // const [authInfo, dispatch] = useReducer(reducer, initialAuth);
//   // const checkInit = () => {
//   //   dispatch({ type: "INIT" });
//   // };
//   //   // useEffect(() => {
//   //   //   dispatch({ type: "INIT", payload: initialAuth });
//   //   // }, []);
//   //   //[Init]
//   //   //1. 토큰이 있는지 확인한다
//   const checkInit = () => {
//     const token = storage.getItem("TOKEN", "");
//     if (token) {
//       initialAuth.isLoggedIn = true;
//       authAPI.checkAuthUser().then((res) => {
//         initialAuth.userInfo = res.data;
//         console.log(initialAuth);
//       });
//     } else {
//       initialAuth.isLoggedIn = false;
//     }
//   };

//   const handleLogOut = () => {
//     initialAuth.isLoggedIn = false;
//     storage.removeItem("TOKEN");
//   };
//   // [Login]
//   const handleLogin = async (initialUser) => {
//     await authAPI
//       .signIn({
//         email: initialUser.email,
//         password: initialUser.password
//       })
//       .then((res) => {
//         const { user, token } = res.data;
//         storage.setItem("TOKEN", token);
//         storage.setItem("_ID", user._id);
//         initialAuth.userInfo = user;
//       });
//   };
//   return (
//     <AuthContext.Provider
//       value={{
//         checkInit,
//         handleLogin
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;
