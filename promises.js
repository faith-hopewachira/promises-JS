// Write an asynchronous function that accepts a message string and a 
// delay time in milliseconds. The function should log the message to the 
// console after the specified delay time.

async function delayStringTime(){
    console.log("My name is Hope")    

}
// setTimeout(delayStringTime, 3000)


// You have an array of user IDs and a function getUserData(id) that returns 
// a Promise with user data when given a user ID. Write an asynchronous function 
// that fetches and logs the data for each user ID one by one, in sequence.


async function userDataInfo(userIds){
    for(const userID of userIds){
        try{
            const dataUser = await getDataUser(userID);
            console.log(dataUser);
        }catch(error){
            console.error(`Error geetting user's data ${userID}: ${error}`)

        }
    }

}

const userIds = [9,8,7,9]
userDataInfo(userIds)
.then(()=>console.log("Data of all users successfull"))
.catch(error=>console.error(`Error retrivial user data ${error.message}`))

//You have an asynchronous function performTask() that returns a Promise.
// The Promise resolves if the task is successful and rejects if there's an error.
//  Write a function that calls performTask() and logs a custom success message if 
// the task is successful, and a custom error message if there's an error.

async function taskHandling(){
    try{
        await performTask();
        console.log("Task complete");
    }catch(error){
        console.error("Error performing task:", error.message);

    }
}

taskHandling()


function taskUnstable(nameOfTask, failureProbability){
    return new Promise((resolve, reject)=>{
        const anyTask = Math.random();
        if(random>failureProbability){
            resolve ('Task ${nameOfTask succeed')

        }else{
            reject('Task ${nameOfTask} succeed')
        }
    });

}

async function executeCode(nameOfTask, retries, failureProbability){
    let success = false
    for(let i = 0; i<retries.length;i++){
        try{
            const res = await taskUnstable(nameOfTask, failureProbability);
            console.log(res);
            success = true;
            break;
        }catch(error){
            console.error(error);
                if(i < retries - 1){
                    console.log(`Retrying ${nameOfTask}`);
                    await new Promise(resolve => setTimeout(resolve, 1000));

                }
            }
        }

        if(success){
            console.log(`Task ${nameOfTask} succeeded after ${retries - 1} retry attempts.`);
        }
        else{
            console.log(`Taask ${nameOfTask} failed after ${retries} retry attempts.`)

        }

    }



executeCode("Task A", 3, 0.3)


async function executeWithRetry(){

}


