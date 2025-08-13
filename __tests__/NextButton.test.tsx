import { render, screen } from "@testing-library/react";
import NextButton from "@/components/NextButton";

it("tests that the next button has the right name", () => {
    render(<NextButton changeQuestion={() => {}}/>)

    const nextButton = screen.getByRole('button', {name: /next/i});
    expect(nextButton).toBeInTheDocument();
});

