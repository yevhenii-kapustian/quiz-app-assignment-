type OptionButtonProps = {
  option: string,
  handleClick: () => void,
  userAnswer: string | null,
  rightAnswer: string
}

const OptionButton = ({ option, handleClick, userAnswer, rightAnswer }: OptionButtonProps) => {
    const isDisabled = userAnswer ? true : false;

  return (
    <button
      data-testid="option-button"
      onClick={() => !isDisabled && handleClick()}
      disabled={isDisabled}
      className={
        userAnswer && option === rightAnswer ? "right" :
        userAnswer && option === userAnswer ? "wrong" : ""
      }
    >
      {option}
    </button>
  )
}

export default OptionButton;
