import { useParams } from "react-router";

const Profile: React.FC = () => {
  const { id } = useParams<Record<string, string>>();

  console.log(id);
  return <div>Profile</div>;
};
export default Profile;
