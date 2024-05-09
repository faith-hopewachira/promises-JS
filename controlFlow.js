// Write a program that takes in an array of numbers and consoles the first 
// four items multiplied by itself  and the last two added by 10. Return the array with the new values

const multiplyBy2 = (nums)=>{
    // const firstFour = nums.slice(0,4)
    // const myArray = firstFour.map(element => element * element)  
    //     console.log(myArray)

    //     const newNums = nums.slice(4,-2)

    //     const last = nums.slice(-2)
    //     const c = last.map(element => element +10)
    //     console.log(c)

    //     const neww = myArray.concat(newNums).concat(c)
    //     console.log(neww)

    const newArray = []
    nums.slice(0,4).forEach(item=>{
        newArray.push(item*item);
    })

    newArray.push(nums.length-2 + 10)
    return newArray

}
let nums = [1,2,3,4,5]
console.log(multiplyBy2(nums))

// Write a program that takes in the following array and use a while loop to iterate and break 
// when the item is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];
function nums(arrNum){
    let i = 0;
    while (i < arrNum.length){
      if (i === 3) {
        break;
      }
      console.log(arrNum[i]);i++;

    }

}
    
let arrNum =[1,2,3,4,5,6,7,8,9];
nums(arrNum);




// Write a function that takes in a an array of strings and use a 
// continue statement when the item is at the second index:  let fruits= ['apple','plum','banana','strawberries','kiwi']
const arrStrings = (fruits) => {
    fruits.forEach((fruit,item) => {
            if(item === 1){
                return;
    
            }
            console.log(fruit);        
    });
    
}

arrStrings(['apple','plum','banana','strawberries','kiwi'])

// Write a function that accepts an array of strings and console.logs each element using a for loop.
const arrayStrings = (arr) =>{
    for(let i =0; i<arr.length; i++)
    console.log(arr[i])

}

arrayStrings(["Faith","Hope","Wachira"])

// Write a JavaScript function that takes a string as input and reverses it using a while loop. The function should return the reversed string. 
const myReverse =(str)=>{
    const myR = str.split('')
    console.log(myR)

    const myR2 = myR.reverse()
    console.log(myR2)

    const myR3 = myR2.join('')
    console.log(myR3)


}

myReverse(("Faith"))
