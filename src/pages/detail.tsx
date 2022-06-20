import { useParams } from "react-router";

const Detail: React.FC = () => {
  const { id } = useParams<Record<string, string>>();

  console.log(id);
  return <div>{id}Detail</div>;
};
export default Detail;
