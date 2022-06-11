import * as S from "./style";
interface ButtonInterface {
  width: number;
  height: number;
  radius: number;
  fontColor: string;
  backgroundColor: string;
  borderColor: string;
  label: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const Button: React.FC<ButtonInterface> = (props) => {
  return(
    <S.Button
      width={props.width}
      height={props.height}
      radius={props.radius}
      fontColor={props.fontColor}
      backgroundColor={props.backgroundColor}
      borderColor={props.borderColor}
      onClick={props.onClick}
    >
      {props.label}
    </S.Button>
  )
}

export default Button;