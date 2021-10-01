const baseInput = document.querySelector('#base-input');
const heightInput = document.querySelector('#height-input');
const submitBtn = document.querySelector('.submit-btn');
const output = document.querySelector('.output');

function calculateHypotenuse() {

    const hypotenuse = Math.sqrt((baseInput.value * baseInput.value) + (heightInput.value * heightInput.value));
    output.innerText = `The length of hypotenuse is ${hypotenuse}`;
}

submitBtn.addEventListener('click', calculateHypotenuse);