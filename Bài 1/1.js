const inputA = document.getElementById('inputA');
const inputB = document.getElementById('inputB');
const sumButton = document.getElementById('sum');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const resetButton = document.getElementById('reset');
const result = document.getElementById('result');

sumButton.addEventListener('click', () => {
    const numA = parseFloat(inputA.value);
    const numB = parseFloat(inputB.value);

    if (isNaN(numA) || isNaN(numB)) {
        result.textContent = 'Please enter valid numbers.';
    } else {
        result.textContent = `Result: ${numA + numB}`;
    }
});

subtractButton.addEventListener('click', () => {
    const numA = parseFloat(inputA.value);
    const numB = parseFloat(inputB.value);

    if (isNaN(numA) || isNaN(numB)) {
        result.textContent = 'Please enter valid numbers.';
    } else {
        result.textContent = `Result: ${numA - numB}`;
    }
});

multiplyButton.addEventListener('click', () => {
    const numA = parseFloat(inputA.value);
    const numB = parseFloat(inputB.value);

    if (isNaN(numA) || isNaN(numB)) {
        result.textContent = 'Please enter valid numbers.';
    } else {
        result.textContent = `Result: ${numA * numB}`;
    }
});

divideButton.addEventListener('click', () => {
    const numA = parseFloat(inputA.value);
    const numB = parseFloat(inputB.value);

    if (isNaN(numA) || isNaN(numB) || numB === 0) {
        result.textContent = 'Please enter valid numbers and avoid dividing by zero.';
    } else {
        result.textContent = `Result: ${numA / numB}`;
    }
});

resetButton.addEventListener('click', () => {
    inputA.value = '';
    inputB.value = '';
    result.textContent = '';
});