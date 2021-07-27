//A block of code that determines a falsy input

/**
 * Using Conditional Statements:
===================================
 * use if to specify a block of code to be executed, if a specified condition is true
 * Use else to specify a block of code to be executed, if the same condition is false
 * Since Falsy values evaluate to false,
 * else  block of code will be executed 
 * @param {value} input - User's input value to be checked
 * @return {string} 
 * The return statement stops execution and returns whatever value is at the right of the return statement
 * In this case, the value returned is passed to the console log() function which prints it to the console
 */
console.clear();
let checkIfFalsy = (value) =>{
  console.log(`${value} is :`)
  if (value)return 'truthy input'
else return 'falsy input'
}
let checkValue = checkIfFalsy(null)
console.log(checkValue)