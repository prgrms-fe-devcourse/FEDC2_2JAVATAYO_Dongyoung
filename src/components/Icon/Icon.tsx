import * as S from "./style";
interface IconInterface {
  width: number;
  height: number;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onHover?: React.MouseEventHandler<HTMLDivElement>;
}
const Icon: React.FC<IconInterface> = (props) => {
  return <S.Icon>{props.children}</S.Icon>;
};
export default Icon;
