class Car{
    constructor(make,model,year,isAvailable){
        this.make = make;
        this.model = model;
        this.year = year;
        this.isAvailable = isAvailable;

    }

    toggleAvailability(){
        this.isAvailable = !this.isAvailable;

    }
}

const mercedes = new Car("Mercedes", "BMW", 2022,true);
const hyundai = new Car("Hyundai", "Mazda", 2020,false);
console.log(mercedes);
console.log(hyundai);

mercedes.toggleAvailability();
console.log(mercedes);

hyundai.toggleAvailability();
console.log(hyundai);


// QUESTION1 PART 2
class Rental{
    constructor(car, nameRenter, startDate, endDate){
        this.car = car;
        this.nameRenter = nameRenter;
        this.startDate = startDate;
        this.endDate = endDate;
 
    }



rentalDuration(){
    const startDate = this.startDate.getTime();
    console.log(startDate);   

    const endDate = this.endDate.getTime();
    console.log(endDate);   

    const duration = this.startDate.getTime();
    console.log(duration); 

    const days = Math.ceil(duration/(1000 * 60 * 60 * 24))
    console.log(days);
  

}
}

const car = new Car("Nissan", "Toyota", 2022,true);
const rentCar = new Rental(Car, "Faith", new Date("2024-06-20"),new Date("2024-01-25"));
console.log(rentCar);

// QUESTION3 PART 3
class Question{
    constructor(text,options,answer){
        this.text = text;
        this.options = options;
        this.answer = answer;

    }
    confirmAns(ansUser){
        return ansUser === this.answer;

    }
}


const q1 = new Question(
    "What is the capital of Kenya?",
    ["nairobi","dodoma","kigali","arusha"],
    "nairobi"
);

console.log(q1.confirmAns("nairobi"));
console.log(q1.confirmAns("dodoma"));



// // QUESTION 2
// class Questions{
//     constructor(text,options,rightAns){
//         this.text = text;
//         this.options = options;
//         this.rightAns = rightAns;
//     }

//     confirmAnswer(answer){
//         return username === this.rightAns

//     }
 
// }

class Quiz{
    constructor(){
        this.allQuestion =[];
        this.qnIndex =0;
        this.score = 0;

    }
    addQuestion(question){
        this.Questions.push(question);
    }


}


// class MyObject{
//     constructor(id, name){
//         this.id = id;
//         this.name = name;
//     }
//     // ADDING MULTIPLE ITEMS
//     addItems(items){
//         for(const key in items){
//             this[key] = items[key];

//         }

//     }
// }

// const existingObject = new MyObject(1,"Existing Object")
// existingObject.addItems({
//     itemName: "Apple",
//     price: 900

// })

// console.log(existingObject);

class MyObject{
    constructor(){
        this.items = [];

    }
    // ADDING MULTIPLE ITEMS
    addItems(id, name, price,quantity){
        const item = {
            id: id,
            name: name,
            price: price,
            quantity: quantity
        };
        this.items.push(item);
        // this.total += price * quantity;
        
    }
}

const existingObject = new MyObject(9,"Chicken",900,9)
console.log(existingObject);
existingObject.addItems(4,"Rice",500,8)
existingObject.addItems(4,"Rice",500,8)
existingObject.addItems(4,"Rice",500,8)
console.log(existingObject);




// ADDING ITEMS IN A SHOPPING CART
class MyCart{
    constructor(){
        this.myItems = []
    }

    addMyItems(id, name, price, category, quantity){
        const myProducts ={
            id : id,
            name: name,
            price: price,
            category : category,
            quantity: quantity
        }
        this.myItems.push(myProducts)

    }
}

const existItems = new MyCart();
existItems.addMyItems(2,"Vim",908,"Hygiene",9)
existItems.addMyItems(2,"Vim",908,"Hygiene",9)
console.log(existItems);

