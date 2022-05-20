//Global variable to avoid repetition

let buttons = document.querySelectorAll('.calculator__button');
//Event Listener for all the buttons from HTML
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function (e) {
    let clicked = e.target.value;
    if (clicked === '=') {
      getResult();
    }
      else if (clicked === 'clear') {
      clearDisplay();
    } else if (clicked === 'PoN') {
      //Transfrom number from positive to negative or from negative to positive
      changeNumber(clicked);

      // else if for dots  for numbers and calculating the result in flaoat
    } else {
      sendToDisplay(clicked);
    }
  });
};

//Get the result from the display
function getResult() {
//getting the result from the display and calculate them with the help of the calculate function
  let input = document.querySelector('.calculator__display-text');
  let result = input.value;
  let num1 = '';
  let num2 = '';
  let operator = [];
  let temp = '';

  // for loop to get the numbers and operators from the display
  for (let i = 0; i < result.length; i++) {
    if (result[i] === '+' || result[i] === '-' || result[i] === 'x' || result[i] === '/') {
      operator.push(result[i]);
      num1 = temp;
      temp = '';
    } else {
      temp += result[i];
    }
  }

  num2 = temp;
  calculate(operator, num1, num2);
};

//calculate the result
//the function has to calculate the negative numbers together with the positive numbers
//has to detect if the numbers are negative or positive
function calculate(operator, num1, num2) {
  let result = 0;
  if (operator[0] === '+') {
    result = parseFloat(num1) + parseFloat(num2);
  } else if (operator[0] === '-') {
    result = parseFloat(num1) - parseFloat(num2);
  } else if (operator[0] === 'x') {
    result = parseFloat(num1) * parseFloat(num2);
  } else if (operator[0] === '/') {
    result = parseFloat(num1) / parseFloat(num2);
  }

  // if the result is a number with more than one digit after the decimal point
  // the result is rounded to the nearest integer
  // the number is transformed to string to remove the decimal point
  // the string is transformed to float again
  if (result % 1 !== 0) {
    result = result.toFixed(2);
    result = parseFloat(result);
  }


  // if the result is a number with more than one digit after the decimal point
  // the result is rounded to the nearest integer
  // the number is transformed to string to remove the decimal point
  // the string is transformed to float again
  if (result % 1 !== 0) {
    result = result.toFixed(2);
    result = parseFloat(result);
  }
  console.log(result);
  clearDisplay();
  sendToDisplay(result);
}

//Send numbers and operators from buttons to display
function sendToDisplay(value) {
  let input = document.querySelector('.calculator__display-text');
  if (input.value === undefined) {
    input.value = '';
  }
  input.value += value;
  input.textContent += value;
}

//Clear the display
function clearDisplay() {
  let input = document.querySelector('.calculator__display-text');
  input.value = '';
  input.textContent = '';
};

//making the number negative or positive - WIP - not working
function changeNumber(value) {
  var input = document.querySelector('.calculator__display-text');
  input.value = input.value * -1;
  input.textContent = input.value;
}

//function for remove button to remove the last item from display by pressing the button with the class name of 'remove' with eventlistener
let remove = document.querySelector('.remove');
remove.addEventListener('click', function () {
  let input = document.querySelector('.calculator__display-text');
  let result = input.value.slice(0, -1);
  input.value = result;
  input.textContent = result;
});
