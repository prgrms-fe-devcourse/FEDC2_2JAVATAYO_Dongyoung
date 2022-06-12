import * as S from "./style";
interface ButtonInterface {
  buttonType: string;
  width: string;
  height: string;
  isRound: boolean;
  isDisabled: boolean;
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonInterface> = (props) => {
  return (
    <S.Button
      buttonType={props.buttonType}
      width={props.width}
      height={props.height}
      isRound={props.isRound}
      onClick={props.onClick ? props.onClick : null}
      disabled={props.isDisabled}
    >
      {props.label}
    </S.Button>
  );
};

Button.defaultProps = {
  buttonType: "red",
  width: "100%",
  height: "40",
  isRound: false,
  isDisabled: false
};

export default Button;
