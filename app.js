//Get the result from the display
function getResult() {
  var input = document.querySelector('.calculator__display-text');
  //making eval a save option to use in our function
  let operator = input.value.match(/[\D]/g);
  console.log(operator);
  let numbers = input.value.match(/[\d]/g);
  console.log(numbers);
  // input.value = eval(input.value);
  // input.textContent = input.value;
  // Looking for alternatives to eval
};