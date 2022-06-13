import * as S from "./style";
interface ButtonInterface {
  buttonType?: string;
  width?: string;
  height?: string;
  isRound?: boolean;
  isDisabled?: boolean;
  label?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonInterface> = ({
  buttonType,
  width,
  height,
  isRound,
  onClick,
  isDisabled,
  label
}) => {
  return (
    <S.Button
      buttonType={buttonType}
      width={width}
      height={height}
      isRound={isRound}
      onClick={onClick ? onClick : null}
      disabled={isDisabled}
    >
      {label}
    </S.Button>
  );
};

Button.defaultProps = {
  buttonType: "red",
  width: "100%",
  height: "40",
  isRound: false,
  isDisabled: false,
  label: "Button"
};

export default Button;
