import questions from "@/data/data"

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
            <button key={index}
                    onClick={() => !userAnswer && handleClick(item)}
                    disabled={userAnswer ? true : false}
            >
                {item}
            </button>
        ))}
        </>
    )
}

export default OptionList