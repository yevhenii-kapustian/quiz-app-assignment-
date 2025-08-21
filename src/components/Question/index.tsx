'use client'

import questions from "@/data/data"
import { useState } from "react"
import OptionButton from "../OptionButton"
import OptionList from "../OptionList"
import NextButton from "../NextButton"

const Question = () => {
  const [questionNumber, setQuestionNumber] = useState<number>(0)
  const [userAnswer, setUserAnswer] = useState<string>("")

  const updatedQuestions = questions[questionNumber]

  const handleClick = (option: string) => {
    setUserAnswer(option)
  }

  const handleNextQuestion = () => {
    setUserAnswer("")
    setQuestionNumber(prev => prev + 1)
  }

  return (
    <div>
      <h2>{`Question ${questionNumber + 1} of ${questions.length}`}</h2>
      <h3>{updatedQuestions.question}</h3>
      <div>
         <OptionList
          handleClick={handleClick}
          userAnswer={userAnswer}
          rightAnswer={updatedQuestions.correctAnswer}
          questionNumber={questionNumber}
        />
      </div>

      {userAnswer && questionNumber < questions.length - 1 && (
        <NextButton changeQuestion={handleNextQuestion} />
      )}
    </div>
  )
}

export default Question
