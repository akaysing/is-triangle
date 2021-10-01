const baseInput = document.querySelector('#base-input');
const heightInput = document.querySelector('#height-input');
const submitBtn = document.querySelector('.submit-btn');
const output = document.querySelector('.output');

function calculateArea() {
    const areaOfTriangle = 1 / 2 * (Number(baseInput.value) * Number(heightInput.value));
    output.innerText = `The Area of Triangle is ${areaOfTriangle}`;
}

submitBtn.addEventListener('click', calculateArea);