import { useUser } from "../contexts/UserProvider";
import { authAPI } from "../utils/apis";
const SignIn: React.FC = () => {
  const { userInfo, onLogin, onLogOut, onUpdate } = useUser();
  const user = {
    coverImage: undefined,
    email: "puh0128@gmail.com",
    fullName: "유현gmail",
    username: "유현gmail",
    _id: "62a0c89ac882bf3a287f9024"
  };
  const newInfo = {
    image:
      "https://res.cloudinary.com/learnprogrammers/image/upload/v1655057923/user/3048881e-e044-4797-9f01-02377a186055.jpg",
    isCover: false
  };
  return (
    <div>
      <button onClick={() => console.log(userInfo)}>Init</button>
      <button onClick={() => onLogin(user)}>Sign In</button>
      <button>Sign up</button>
      <button onClick={onLogOut}>LogOut</button>
      <button
        onClick={() => {
          onUpdate(newInfo);
        }}
      >
        Update User
      </button>
      <button>Update Password</button>
    </div>
  );
};
export default SignIn;
