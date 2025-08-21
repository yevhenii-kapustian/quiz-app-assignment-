type OptionButtonProps = {
    option: string,
    handleClick: () => void,
    userAnswer: string | null,
    rightAnswer: string
}

const OptionButton = ({option, handleClick, userAnswer, rightAnswer}:OptionButtonProps) => {
    return(
        <button data-testid="option-button" 
                className={
                    userAnswer && option === rightAnswer ? "right" 
                    : userAnswer && option === userAnswer ? "wrong" 
                    : ""
                } 
                onClick={handleClick}>{option}</button>
    )
}

export default OptionButton