'use client'

import questions from "@/data/data"
import { useState } from "react"
import OptionButton from "../OptionButton"

const Question = () => {
    const [questionNumber, setQuestionNumber] = useState<number>(0)
    const [userAnswer, setUserAnswer] = useState<string[]>([])
    const [showResults, setShowResults] = useState(false);

    const updatedQuestions = questions[questionNumber]

    if (showResults) {
        const rightCount = userAnswer.filter((item, index) => item === questions[index].correctAnswer).length
        const wrongCount = questions.length - rightCount

        return(
            <div>
                <h3></h3>
            </div>
        )
    }


    return(
        <div>
            <h2>Question: {questionNumber + 1} of {questions.length}</h2>
            <h3>{updatedQuestions.question}</h3>
            <div>
                {updatedQuestions.options.map((option, index) => (
                    <OptionButton key={index}
                                    option={option}
                                    userAnswer={userAnswer}
                                    rightAnswer={updatedQuestions.correctAnswer}
                                    handleClick={() => handleClick(option)}
                                    />
            ))}
            </div>
        </div>
    )
}

export default Question