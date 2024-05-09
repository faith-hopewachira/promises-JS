let arr2 = [true, "green", "where",12,56];
arr2[arr2.length-1];
console.log('length', arr2.length);


//Write a JS program that will join the following array elements into a stringmyPets = ["Cow", "Bird", "Snake", "Dog"];
let stringmyPets = ["Cow", "Bird", "Snake", "Dog"];
console.log(stringmyPets.join("Cow", "Bird", "Snake", "Dog"));


// //Write a JS script to sort the following string:let word = "sevink"
// let word = (stringg) => {
//     //SPLIT- splits the string in an array
//     //SORT- sort the array in aplhabetical order
//     return stringg.split("").sort().join("");
// }; 
// console.log(word("sevink"));

let word2 = "sevink";
let word3 = word2.split('').sort();
console.log('sorted_array',word3.join(' '));


let wordy = word2.split(" ").reverse().join(" ");
console.log({'splittedWord': word2})


//Write a JS script to sort the following array itemsvar arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
var arr3 = [-5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
//A - B = ANSWER = (-), THE 2ND NO IS BIGGER
arr3.sort((a, b) => a - b);
console.log(arr3); // Output: [5, 10, 80]


//Write a program to remove duplicates from the
// following array.Console the array without duplicates, and console another array that only contains the duplicates
//var arr = ["apple", "mango", "apple",   "orange", "mango", "mango"];

const array = [1, 2, 3, 4, 2, 3, 5];
// const uniqueArray = [...new Set(array)];
// console.log(uniqueArray);
// // Output: [1, 2, 3, 4, 5]
let arr4 = []; //STORES DUPLICATES
let arr4Original = []; //STORES ORIGINAL
array.forEach(fruit =>{
    if(!arr4Original.includes(fruit)){ //INCLUDE FRUIT AND DO NOT REPEAT ITSELF
        arr4Original.push(fruit)
    }
    else{
        arr4.push(fruit) // WHATEVER IS NOT UNIQUE
    }
});
console.log({arr4});
console.log({arr4Original});


//Write a JS script to search for the following word in the array."way"If the word is present, 
//console it else console "the search word was not found"let arr5 = ["the", "way", "x", 4];
let arr5 = ["the", "way", "x", 4];
if(arr5.includes("way"))
{console.log("way")}
else
{console.log("the search word was not found")}










