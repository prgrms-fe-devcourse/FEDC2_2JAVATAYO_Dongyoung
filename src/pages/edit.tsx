import { useParams } from "react-router";
const Edit: React.FC = () => {
  const { id } = useParams<Record<string, string>>();

  console.log(id);

  return <div>{id}Edit</div>;
};
export default Edit;
