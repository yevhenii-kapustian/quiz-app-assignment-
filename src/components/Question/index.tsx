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
    <div className="mt-5 m-auto p-5 w-2/5 text-[#444444] bg-[#FFB897] rounded-2xl max-sm:w-full">
      <h2 className="text-center">{`Question ${questionNumber + 1} of ${questions.length}`}</h2>
      <h3 className="text-xl font-extrabold text-center">{updatedQuestions.question}</h3>
      <div className="mt-3 w-full flex flex-col items-start gap-3">
         <OptionList
          handleClick={handleClick}
          userAnswer={userAnswer}
          rightAnswer={updatedQuestions.correctAnswer}
          questionNumber={questionNumber}
        />
      </div>

      {userAnswer && questionNumber < questions.length - 1 ? (
        <div className="mt-3 flex justify-start font-bold">
          <NextButton changeQuestion={handleNextQuestion} />
        </div>
      ): userAnswer && questionNumber === questions.length - 1 ? (
        <div className="mt-3 flex justify-center font-bold">
          <button className="px-5 py-2 bg-[#F7F7F7] rounded-2xl cursor-pointer" onClick={handleFinish}>Finish</button>
        </div>
      ):
        ""
      }

      {isFinished && <div className="mt-5 flex flex-col items-center">
        <h5 data-testid="results" className="font-bold">Final Results:</h5>
        <p data-testid="right-answers">Right: {correctCount}</p>
        <p data-testid="wrong-answers">Wrong: {wrongCount}</p>
      </div> }
      
    </div>
  )
}

export default Question
