import { fireEvent, render, screen } from "@testing-library/react";
import Question from "@/components/Question";
import questions from "@/data/data";

describe("Tests that the question is rendered", () => {
    it("Tests that there's an H2 saying which question is the user is responding to", () => {
        render(<Question />);

        const questionNumber = screen.getByRole('heading', 
        {
            level: 2 ,
            name: /question/i
        });

        expect(questionNumber).toBeInTheDocument();
    })

    it("Tests that the question is an H3", () => {
        render(<Question />);

        const question = screen.getByRole('heading', {level: 3});
        expect(question).toBeInTheDocument();
    })

    it("Tests that the questions have 4 options", () => {
        render(<Question />);
        const buttons = screen.getAllByTestId("option-button");
        expect(buttons).toHaveLength(4);
    })

    it("tests that the right options are showed for the corresponding question", () => {
        render(<Question />);

        const question = screen.getByRole('heading', {level: 3, name: questions[0].question});
        expect(question).toBeInTheDocument();

        for(let i = 0; i <= 3; i++) {
            let option = screen.getByRole('button', {name: questions[0].options[i]})
            expect(option).toBeInTheDocument()
        }
    })

    it("tests that there's a correct answer displayed", () => {
        render(<Question />);

        const question = screen.getByRole('heading', {level: 3, name: questions[0].question});
        expect(question).toBeInTheDocument();

        const correctOption = screen.getByRole('button', {name: questions[0].correctAnswer});
        expect(correctOption).toBeInTheDocument();
    })
})
//
describe("That the next button works properly", () => {
    it("tests that there's a next button but it's not rendered on page load", () => {
        render(<Question />);

        const nextButton = screen.queryByRole('button', {name: /next/i});
        expect(nextButton).not.toBeInTheDocument();
    })    

    it("tests that the next button appears once the user has chosen an answer", () => {
        render(<Question />);

        let nextButton = screen.queryByRole('button', {name: /next/i});
        expect(nextButton).not.toBeInTheDocument();
        
        const firstOption = questions[0].options[0];
        
        const userAnswer = screen.getByRole('button', {name: firstOption })
        fireEvent.click(userAnswer);

        nextButton = screen.queryByRole('button', {name: /next/i});
        expect(nextButton).toBeInTheDocument();
    })

    it("Tests that the question number changes", () => {
        render(<Question />);
        let questionInfo = screen.getByRole('heading', 
        {
            level: 2 ,
            name: /question 1 of 5/i
        });

        expect(questionInfo).toBeInTheDocument();

        const userAnswer = screen.getByRole('button', {name: questions[0].options[0]})
        fireEvent.click(userAnswer);

        const nextButton = screen.getByRole('button', {name: /next/i});
        expect(nextButton).toBeInTheDocument();
        fireEvent.click(nextButton);

        questionInfo = screen.getByRole('heading', 
        {
            level: 2 ,
            name: /question 2 of 5/i
        });

        expect(questionInfo).toBeInTheDocument();

    })

    it("tests that the next button changes the question to the next one", () => {
        render(<Question />);

        let question = screen.getByRole('heading', {level: 3, name: questions[0].question});
        expect(question).toBeInTheDocument();

        const userAnswer = screen.getByRole('button', {name: questions[0].options[0]})
        fireEvent.click(userAnswer);

        const nextButton = screen.getByRole('button', {name: /next/i});
        expect(nextButton).toBeInTheDocument();
        fireEvent.click(nextButton);

        question = screen.getByRole('heading', {level: 3, name: questions[1].question});
        expect(question).toBeInTheDocument();
    })

    it("tests that the next button doesn't appear at the last question", () => {
        render(<Question />);

        for (let i = 0; i < questions.length - 1; i++) {
            const userAnswer = screen.getByRole('button', {name: questions[i].options[0]});
            fireEvent.click(userAnswer);

            const nextButton = screen.getByRole('button', {name: /next/i});
            fireEvent.click(nextButton);
        }

        const lastAnswer = screen.getByRole('button', {name: questions[questions.length - 1].options[0]});
        fireEvent.click(lastAnswer);

        let nextButton = screen.queryByRole('button', {name: /next/i});
        expect(nextButton).not.toBeInTheDocument();
    })
})
//
describe("That the finish button works correctly", () => {
    it("tests that the finish button is not rendered if it's not the last question", () => {
        render(<Question />);

        for (let i = 0; i < questions.length - 1; i++) {
            const userAnswer = screen.getByRole('button', {name: questions[i].options[0]});
            fireEvent.click(userAnswer);

            let nextButton = screen.getByRole('button', {name: /next/i});
            fireEvent.click(nextButton);

            const finishButton = screen.queryByRole('button', {name: /finish/i})
            expect(finishButton).not.toBeInTheDocument();
        }

        const lastAnswer = screen.getByRole('button', {name: questions[questions.length - 1].options[0]});
        fireEvent.click(lastAnswer);

        let nextButton = screen.queryByRole('button', {name: /next/i});
        expect(nextButton).not.toBeInTheDocument();
    });

    it("That the finish button appears once the user has answered to the last question", () => {
        render(<Question />);

        for (let i = 0; i < questions.length - 1; i++) {
            const userAnswer = screen.getByRole('button', {name: questions[i].options[0]});
            fireEvent.click(userAnswer);

            const nextButton = screen.getByRole('button', {name: /next/i});
            fireEvent.click(nextButton);
        }

        const lastAnswer = screen.getByRole('button', {name: questions[questions.length - 1].options[0]});
        fireEvent.click(lastAnswer);

        const finishButton = screen.queryByRole('button', {name: /finish/i})
        expect(finishButton).toBeInTheDocument();
    })
})

describe("Tests the result works properly", () => {
    it("Tests that the result doesn't show on page load", () => {
        render(<Question />);

        const result = screen.queryByTestId("result");
        expect(result).not.toBeInTheDocument();
    })

    it("Tests that the result appears after the user has clicked the finish button", () => {
        render(<Question />);

        for (let i = 0; i < questions.length - 1; i++) {
            const userAnswer = screen.getByRole('button', {name: questions[i].options[0]});
            fireEvent.click(userAnswer);

            const nextButton = screen.getByRole('button', {name: /next/i});
            fireEvent.click(nextButton);
        }

        const lastAnswer = screen.getByRole('button', {name: questions[questions.length - 1].options[0]});
        fireEvent.click(lastAnswer);

        const finishButton = screen.getByRole('button', {name: /finish/i});
        expect(finishButton).toBeInTheDocument();
        fireEvent.click(finishButton);

        const result = screen.queryByTestId("results");
        expect(result).toBeInTheDocument();
    })

    it("tests that the right answer counter works properly", () => {
        render(<Question />);

        for (let i = 0; i < questions.length - 1; i++) {
            const userAnswer = screen.getByRole('button', {name: questions[i].correctAnswer});
            fireEvent.click(userAnswer);

            const nextButton = screen.getByRole('button', {name: /next/i});
            fireEvent.click(nextButton);
        }

        const lastAnswer = screen.getByRole('button', {name: questions[questions.length - 1].correctAnswer});
        fireEvent.click(lastAnswer);

        const finishButton = screen.getByRole('button', {name: /finish/i});
        expect(finishButton).toBeInTheDocument();
        fireEvent.click(finishButton);

        const rightCounter = screen.queryByTestId("right-answers");
        expect(rightCounter).toBeInTheDocument();
        expect(rightCounter).toHaveTextContent(/5/i)
    })

    it("tests that the wrong answer counter works properly", () => {
        render(<Question />);

        for (let i = 0; i < questions.length - 1; i++) {
            const userAnswer = screen.getByRole('button', {name: questions[i].correctAnswer});
            fireEvent.click(userAnswer);

            const nextButton = screen.getByRole('button', {name: /next/i});
            fireEvent.click(nextButton);
        }

        const lastAnswer = screen.getByRole('button', {name: questions[questions.length - 1].options[0]});
        fireEvent.click(lastAnswer);

        const finishButton = screen.getByRole('button', {name: /finish/i});
        expect(finishButton).toBeInTheDocument();
        fireEvent.click(finishButton);

        const rightCounter = screen.queryByTestId("right-answers");
        expect(rightCounter).toHaveTextContent(/4/i);

        const wrongCounter = screen.queryByTestId("wrong-answers");
        expect(wrongCounter).toHaveTextContent(/1/i);
    })
})
