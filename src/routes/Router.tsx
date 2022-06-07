import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "../pages/404";
import Create from "../pages/create";
import Detail from "../pages/detail";
import Edit from "../pages/edit";
import Home from "../pages/home";
import Profile from "../pages/profile";
import Result from "../pages/result";
import SignIn from "../pages/signIn";
import SignUp from "../pages/signUp";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/create" element={<Create />} />
        <Route path="/detail/*" element={<Detail />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/edit/*" element={<Edit />} />
        <Route path="/result/*" element={<Result />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
