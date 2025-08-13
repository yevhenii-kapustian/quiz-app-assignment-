import { fireEvent, render, screen } from "@testing-library/react";
import OptionList from "@/components/OptionList";
import questions from "@/data/data";

describe("That the OptionList component works correctly", () => {
    it("tests that we have 4 buttons", () => {

        render(
            <OptionList     
                handleClick = {() => {}}
                userAnswer= {null}
                rightAnswer= {questions[0].correctAnswer}
                questionNumber = {0}
            />
        )

        const button = screen.getAllByRole('button');
        expect(button).toHaveLength(4);
    })

    it("tests that the user can select a button", () => {
        const handleClick = jest.fn();
        
        render(
            <OptionList 
                handleClick = {handleClick}
                userAnswer= {null}
                rightAnswer= {questions[0].correctAnswer}
                questionNumber = {0}
            />
        );

        const button = screen.getByRole('button', {name: questions[0].options[1]})
        fireEvent.click(button);

        expect(handleClick).toHaveBeenCalledTimes(1);
    })

    it("tests that if the user answers they cannot click another button", () => {
        const handleClick = jest.fn();
        
        render(
            <OptionList 
                handleClick = {handleClick}
                userAnswer= {questions[0].options[0]}
                rightAnswer= {questions[0].correctAnswer}
                questionNumber = {0}
            />
        );

        const button = screen.getByRole('button', {name: questions[0].options[1]})
        fireEvent.click(button);

        expect(handleClick).toHaveBeenCalledTimes(0);
    })
})