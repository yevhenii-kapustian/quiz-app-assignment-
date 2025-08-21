import questions from "@/data/data"
import OptionButton from "../OptionButton"

type OptionListTypes = {
    handleClick: (answer:string) => void,
    userAnswer: string | null,
    rightAnswer: string,
    questionNumber: number
}

const OptionList = ({handleClick, userAnswer, rightAnswer, questionNumber}:OptionListTypes) => {
    const updatedOptions = questions[questionNumber].options

    return(
        <> 
        {updatedOptions.map((item, index) => (
            <OptionButton
                key={index}
                option={item}
                userAnswer={userAnswer}
                rightAnswer={rightAnswer}
                handleClick={() => handleClick(item)}
            />
        ))}
        </>
    )
}

export default OptionList