import * as S from "./style";

interface ButtonInterface {
  buttonType?: string;
  width?: string;
  height?: string;
  isRound?: boolean;
  isDisabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

const Button: React.FC<ButtonInterface> = ({
  children,
  buttonType,
  width,
  height,
  isRound,
  onClick,
  isDisabled,
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
      {children}
    </S.Button>
  );
};

Button.defaultProps = {
  buttonType: "red",
  width: "100%",
  height: "40",
  isRound: false,
  isDisabled: false,
};

export default Button;
