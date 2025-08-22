type NextButtonProps = {
    changeQuestion: () => void
}

const NextButton = ({changeQuestion}:NextButtonProps) => {
    return <button className="px-5 py-2 bg-[#F7F7F7] rounded-2xl cursor-pointer" 
                    onClick={changeQuestion}>
                        Next
            </button>
}

export default NextButton