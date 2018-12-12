// *** MASTER JAVASCRIPT FILE ***

"use strict;"

//GLOBAL VARS

// needed to count number of factors and determine when we find the highest factor.
let totalFactors = 1;

//MASTER FUNCTIONS



function Calculate(){
  // needed to store final output string
  let msg = "";
  //grabs the number from the input field
  let num = document.getElementById('userInput').value;
  //determines if the checkbox is checked
  let wantHighest = document.getElementById('onlyGreatest').checked;
  //stores the final returned result of allFactors()
  let result = allFactors(num, wantHighest);
  //checked to see if result is a string or a number and sets our message accordingly
  if(typeof result === "string"){
    //final message if result is a data type of string
    msg = `There are ${totalFactors} factors of ${num} and they are: ${result}.`
  } else {
    //final message if result is a numerical data type or other.
    msg = `The highest factor of ${num} is ${result}.`
  }
  //js takes final message and puts it in our <p> element
  document.getElementById('jsOutlet').innerHTML = msg;
  //resets back to 1 after a calculation has completed
  totalFactors = 1;
}

function reset(){
  //js resets the input field back to empty
  document.getElementById('userInput').value = "";
  //js resets the <p> tag back to an empty string
  document.getElementById('jsOutlet').innerHTML = "";
  //resets total factors back to 1
  totalFactors = 1;
}

//HELPER FUNCTIONS

//either returns all factors of the given number or just the highest factor of the given number
function allFactors(n, returnHighest){
  // creates the number to divide into the original number.
  let factor = n - 1;
  // creates a string that contains the starting number
  let str = n;
  //cycles through all numbers less than the given number
  while(factor !== 0){
    //finds factors
    if(n % factor === 0){
      // runs only if this is the first factor found
      if(totalfactors = 1 && returnHighest){
        //if first factor, then only return that number.
        return factor;
      }
      //for each new factor found, add the factor to the string
      str += `, ${factor}`;
      //counts iterations of the factor cycle
      totalFactors++;
    }
    //provides the new number to be tested in the next cycle.
    factor--;
  }
  //returns the string containing all of the found factors that happened in the while loop.
  return str;
}

// function allFactors(n){
//   let divisor = "";
//   let str = "";
//   while (divisor <= Math.sqrt(n)){
//     if(n % divisor === 0){
//         let quotient = n / divisor;
//         str += ` ${divisor}, ${quotient},`;
//         totalFactors += 2;
//     }
//     divisor++;
//   }
//   return str;
// }

// function greatestFactor(n){
//   let factor = n - 1;
//   while(n % factor !== 0){
//     factor--;
//   }
//   return factor;
// }

// function calculate(){
//   let num = document.getElementById('userInput').value;
//   let finalFactor = greatestFactor(num);
//   let msg = `The highest factor of ${num} is ${finalFactor}.`
//   document.getElementById('jsOutlet').innerHTML = msg;
// }
