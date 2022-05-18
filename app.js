//Global variable to avoid repetition

let buttons = document.querySelectorAll('.calculator__button');
//Event Listener for all the buttons from HTML
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function (e) {
    let clicked = e.target.value;
    if (clicked === '=') {
      getResult();
    } else {
      sendToDisplay(clicked);
    }
  });
};


//Get the result from the display
function getResult() {
  let input = document.querySelector('.calculator__display-text');
  //making eval a save option to use in our function
  let operator = input.value.match(/[\D]/g);
  //filter dots from operator
  operator = operator.filter(function (item) {
    return item !== '.';
  });
  

  //regex numbers to be split together with divident .
  let numbers = input.value.match(/([\d.]+)+/g);
    // let numbers = input.value.split(/([\d]+)+/g);
  console.log(numbers);

  // filter empty strings and undevined from numbers array
  // numbers = numbers.filter(function (n) {
  //   return n !== '' && n !== undefined;
  // });
  // return operator and numbers array to calculate them based on operator
  calculate(operator, numbers[0], numbers[1]);
};

//calculate the result
function calculate(operator, num1, num2) {
  let input = document.querySelector('.calculator__display-text');
  let result = 0;
  console.log(`calculate operator ${operator}`);
  console.log(`calculate num1 ${num1}`);
  console.log(`calculate num2 ${num2}`);
  // if operator is empty return the numbers array
  if (operator === null) {
    return input.value;
  } else {// if operator is not empty calculate the result
    switch (operator[0]) {
      case '+':
        result = parseFloat(num1) + parseFloat(num2);
        break;
      case '-':
        result = parseFloat(num1) - parseFloat(num2);
        break;
      case '*':
        result = parseFloat(num1) * parseFloat(num2);
        break;
      case '/':
        result = parseFloat(num1) / parseFloat(num2);
        break;
      default:
        result = 'error';
    }
    input.value = result;
    input.textContent = result;
  };
};


//Send numbers and operators from buttons to display
function sendToDisplay(value) {
  let input = document.querySelector('.calculator__display-text');
  if (input.value === undefined) {
    input.value = '';
  }
  input.value += value;
  input.textContent += value;
}