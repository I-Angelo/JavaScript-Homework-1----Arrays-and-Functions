// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript


//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max"] //,"HAS","PuRple","dog"

function findWords(dog_string, dog_names){
    if (dog_string.includes(dog_names)) {
        return "Matched dog_name"
    } else {
        return "No Matches"
    }
}

console.log(findWords(dog_string, dog_names))
   

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(let i = 0; i < arr.length; i += 2) {
        arr.splice(i, 1, "even index");
    }
    console.log(arr)
}

replaceEvens(arr)



// ****** CODEWARS *******

// Excercise # 1

// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript

// function evenOrOdd(number) {
//     if (number % 2 == 0) {
//       return "Even"
//     } else {
//       return "Odd"
//     }
    
//   }

// Exercise # 2

// https://www.codewars.com/kata/56dec885c54a926dcd001095/train/javascript

// function opposite(number) {
//   let opp = 0
//   opp = number * -1
  
//   return opp
// }

// Exercise # 3

// https://www.codewars.com/kata/5715eaedb436cf5606000381

// function positiveSum(arr) {
  
//     let x = 0;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > 0) {
//         x = x + arr[i]
//         }
//     } 
//     return x
//   }

// Exercise # 4

// https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript

// function noSpace(x){
//     let y = x.replace(/\s/g,'')
//     return y
//   }