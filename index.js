//Q1
let x = "extravaganza";
console.log(x[8], x[9],x[10],x[11]);


//Q2
const food = "The quick fox jumped over the lazy dog";
let r = "eat";
const food2 = `The ${r} quick fox jumped over the lazy dog`;
console.log({food2});

//
// food.slice(0,4) + "eat" + food.slice(4)

//Q3
//THE G IS USED TO SEARCH THE OCCURENCE IN AN ENTIRE STRING AND NOT JUST STOP ON THE FIRST OCCURENCE
//MATCH - function is used to search a string -specify and recognize a substring in a string
const story= "The quick brown fox jumps over the lazy dog";
let f ="The quick brown brown fox jumps over the lazy dog";
console.log(
    (f.match(/brown/g)).length);
console.log(
    (f.match(/the/g)).length);


let k = "brown";
let j = story.split(k).length -1;
console.log(k);


//Q4
const string1 = "The pupils are reading in the library";
let t = string1.indexOf('are');
console.log({t});
console.log(string1.search(/are/));

const string2 = "The child was sitting on the table before it fell";
let g = string2.indexOf('sitting');
console.log({g});


const string3 = "The child was sitting on the table before it fell";
const string4 = "sitting"
console.log(string3.includes(string4));


//Q5
let a = "wonderful";
console.log(a.toUpperCase());

let b = "amazing";
let c = "UndERneath";
console.log(b.toLowerCase());
console.log(c.toLowerCase());


let d = "A wonderful world";
let titleCase = "";
d.split(" ").forEach(word => {   //SPLIT ALL THE WORDS FOR EACH LOOP
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); //0-UPPERCASE, FROM onderful-TO LOWERCASE
    titleCase += capitalizedWord + " "; //TITLECASE + CAPITALIZEDWORD
});

console.log(titleCase);


const z = "my name is hope";
console.log(
    (z.match(/hope/g)).length);




const str = "GeeksforGeeks"; 
access(str);

function access(str) {
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        console.log(`Character at index ${i}: ${char}`);
    }
};


// function titleCase(str1) {
//     var lowCase = str1.toLowerCase();
//     var splitStr = lowCase.split(' '); 
    
//     for (var i=0; i<splitStr.length; i++) {
//       splitStr[i] = splitStr[i].slice(0,1).toUpperCase() + splitStr[i].slice(1);
//     }
    
//     return splitStr.join(" ");
//   }

//   const str1 = "GeeksforGeeks"; 
// access(str1);

const ab= "extravaganza";
console.log(ab.substring(8));
console.log(ab.slice(0,5));
console.log(ab.substr(8));//GIVES THE SPECIFIED RANGE


const db = "My name is faith";


function titleCase(db) {
let lowerString = db.toLowerCase();
console.log(lowerString);
let splitString = lowerString.split();
console.log(splitString);
let titleCaseArray = splitString.map((word) => {
    return word[0].toUpperCase() + word.slice(1)
})
let titleCaseSentence = titleCaseArray.join(' ')
    return titleCaseSentence
}
titleCase("My name is faith");





