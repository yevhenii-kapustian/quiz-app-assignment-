import { fireEvent, render, screen } from "@testing-library/react";
import OptionButton from "@/components/OptionButton";

describe("Tests that the option buttons work", () => {

    it("tests that the button gets the name of the option", () => {
        const optionText = "Option 1"

        render(
            <OptionButton 
                option={optionText} 
                handleClick={() => {}} 
                userAnswer={null} 
                rightAnswer= "option 2" 
            />
        );

        const button = screen.getByRole('button', {name: optionText})
        
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(optionText);
    })

    it("tests that if the user answers right the button turns green", () => {
        const optionText = "Option 1";

        render(
            <OptionButton 
                option={optionText} 
                handleClick={() => {}} 
                userAnswer={optionText} 
                rightAnswer= {optionText} 
            />
        );

        const button = screen.getByRole('button', {name: optionText})
        
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(optionText);
        fireEvent.click(button);

        expect(button).toHaveClass("right");
    })

    it("tests that if the user answers wrong the button turns red", () => {
        const optionText = "Option 1";

        render(
            <OptionButton 
                option={optionText} 
                handleClick={() => {}} 
                userAnswer={optionText} 
                rightAnswer= "Option 2" 
            />
        );

        const button = screen.getByRole('button', {name: optionText})
        
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(optionText);
        fireEvent.click(button);

        expect(button).toHaveClass("wrong");
    })
})