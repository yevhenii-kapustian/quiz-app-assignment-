'use client'

import questions from "@/data/data"
import { useState } from "react"
import OptionList from "../OptionList"
import NextButton from "../NextButton"

const Question = () => {
  const [questionNumber, setQuestionNumber] = useState<number>(0)
  const [correctCount, setCorrectCount] = useState<number>(0)
  const [wrongCount, setWrongCount] = useState<number>(0)
  const [userAnswer, setUserAnswer] = useState<string>("")
  const [isFinished, setIsFinished] = useState<boolean>(false)

  const updatedQuestions = questions[questionNumber]

  const handleClick = (option: string) => {
    setUserAnswer(option)

     if (option === updatedQuestions.correctAnswer) {
      setCorrectCount(prev => prev + 1)
    } else {
      setWrongCount(prev => prev + 1)
    }
  }

  const handleNextQuestion = () => {
    setUserAnswer("")
    setQuestionNumber(prev => prev + 1)
  }

  const handleFinish = () => {
      setIsFinished(true)
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

      {userAnswer && questionNumber < questions.length - 1 ? (
        <NextButton changeQuestion={handleNextQuestion} />
      ): userAnswer && questionNumber === questions.length - 1 ? (
        <button onClick={handleFinish}>Finish</button>
      ):
        ""
      }

      {isFinished && <div>
        <h5 data-testid="results">Final Results:</h5>
        <p data-testid="right-answers">Right: {correctCount}</p>
        <p data-testid="wrong-answers">Wrong: {wrongCount}</p>
      </div> }
      
    </div>
  )
}

export default Question
