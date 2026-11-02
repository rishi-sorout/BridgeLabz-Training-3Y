// ASYNCHRONOUS JAVASCRIPT: CALLBACKS, PROMISES, PROMISE CHAINING, ASYNC/AWAIT

// Basic asynchronous execution
// console.log("start");
//
// function getUser() {
//     setTimeout(() => {
//         console.log("user data....");
//     }, 3000);
// }
//
// function getUserBankDetail() {
//     setTimeout(() => {
//         console.log("user bank detail");
//     }, 1000);
// }
//
// getUser();
// getUserBankDetail();
// console.log("end");

// Callback example and callback hell
// console.log("start");
//
// function getUser(callback) {
//     setTimeout(() => {
//         console.log("user data....");
//         callback();
//     }, 3000);
// }
//
// function getUserBankDetail(callback) {
//     setTimeout(() => {
//         console.log("user bank detail");
//         callback();
//     }, 1000);
// }
//
// function getUserEmpDetail() {
//     setTimeout(() => {
//         console.log("emp detail");
//     }, 2000);
// }
//
// getUser(() => {
//     getUserBankDetail(() => {
//         getUserEmpDetail();
//     });
// });
//
// console.log("end");

// Creating and handling a Promise
// let mypromise = new Promise((resolve, reject) => {
//     let age = 22;
//     if (age > 18) {
//         resolve("age is valid");
//     } else {
//         reject("age is not valid");
//     }
// });
//
// mypromise
//     .then((msg) => {
//         console.log(msg);
//     })
//     .catch((msg) => {
//         console.log(msg);
//     });

// Promise-based functions
console.log("start");

function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("user data...");
            resolve();
        }, 3000);
    });
}

function getUserBankDetail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("user bank detail");
            resolve();
        }, 1000);
    });
}

function getUserEmpDetail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("emp detail");
            resolve();
        }, 2000);
    });
}

// Promise chaining
// getUser()
//     .then(() => {
//         return getUserBankDetail();
//     })
//     .then(() => {
//         return getUserEmpDetail();
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// Async/await
async function call() {
    await getUser();
    await getUserBankDetail();
    await getUserEmpDetail();
}

call();
console.log("end");