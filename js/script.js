const weightInput = document.getElementById("wieght-input")
const countButton = document.getElementById("count-button")

weightInput.addEventListener('input', function()) {
    const inputValue = weightInput.value.trim()
    if (validateWeightInput(inputValue)) {
        console.log("FALSE")
        countButton.disabled = false
    } else {
        console.log("TRUE")
        countButton.disabled = true
    }
}

function validateWeightInput(input) {
    const integerRegex = /^-?\d=$/;
    return integerRegex.test(input)
}