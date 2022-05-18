//Get the result from the display
function getResult() {
  let input = document.querySelector('.calculator__display-text');
  //making eval a save option to use in our function
  let operator = input.value.match(/[\D]/g);
  console.log(operator);
  let numbers = input.value.match(/[\d]/g);
  console.log(numbers);
  // input.value = eval(input.value);
  // input.textContent = input.value;
  // Looking for alternatives to eval
};

//Event Listener for all the buttons from HTML
let buttons = document.querySelectorAll('.calculator__button');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function (e) {
    let clicked = e.target.value;
    }
  });
}