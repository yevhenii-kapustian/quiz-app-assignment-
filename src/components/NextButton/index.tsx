type NextButtonProps = {
    changeQuestion: () => void
}

const NextButton = ({changeQuestion}:NextButtonProps) => {
    return(
        <button onClick={changeQuestion}>Next</button>
    )
}

export default NextButton