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
  console.log(operator);
  let numbers = input.value.split(""); //in works
  console.log(numbers);
  // input.value = eval(input.value);
  // input.textContent = input.value;
  // Looking for alternatives to eval
};

//Send numbers and operators from buttons to display
function sendToDisplay(value) {
let input = document.querySelector('.calculator__display-text');
  if (input.value === undefined) {
    input.value = 0;
  }
  input.value += value;
  input.textContent += value;
}

