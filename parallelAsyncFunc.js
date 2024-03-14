/**
 * Given an array of asynchronous functions functions, return a new promise promise. Each function in the array accepts no arguments and returns a promise. All the promises should be executed in parallel.

promise resolves:

When all the promises returned from functions were resolved successfully in parallel. The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions. The promise should resolve when all the asynchronous functions in the array have completed execution in parallel.
promise rejects:

When any of the promises returned from functions were rejected. promise should also reject with the reason of the first rejection.
Please solve it without using the built-in Promise.all function.

 

Example 1:

Input: functions = [
  () => new Promise(resolve => setTimeout(() => resolve(5), 200))
]
Output: {"t": 200, "resolved": [5]}
Explanation: 
promiseAll(functions).then(console.log); // [5]

The single function was resolved at 200ms with a value of 5.
Example 2:

Input: functions = [
    () => new Promise(resolve => setTimeout(() => resolve(1), 200)), 
    () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))
]
Output: {"t": 100, "rejected": "Error"}
Explanation: Since one of the promises rejected, the returned promise also rejec
 */

const promiseAll = (functions) => {
  // Approach one:
  // using native Promise.all built in method

  // const promises = functions.map((func) => func())

  // return Promise.all(promises)

  // Approach two: meetings the requirements;

  return new Promise((resolve, reject) => {
    let results = []; // store all the promise results
    let completed = 0; // keep track of each promise completion
    let startTime = Date.now() // keep track of current time

    // if function is empty, then resolve instantly
    if (functions.length === 0) {
      resolve({t:Date.now() - startTime,resolved:results});
      return;
    }

    // map thru each funcs and invoke them
    functions.forEach((func, index) => {
      func().then((result) => {
        results[index] = result; // orderly putting each promise in the results array
        completed += 1; // increments count for each promise completion;
        if(completed === functions.length){
            resolve({t:Date.now() - startTime, resolved:results})
        }
      }).catch((error) => {
        reject({t:Date.now() - startTime, rejected:error})
      })
    });
  });
};

// Example usage for Approach One
const testFunctions1 = [
  () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve(1);
      }, 200)
    ),
  () =>
    new Promise((resolve,reject) =>
      setTimeout(() => {
        reject("ERROR");
      }, 100)
    ),
];

const testFunctions2 = [
  () => new Promise((resolve) => setTimeout(() => resolve(2), 300)),
  () => new Promise((resolve) => setTimeout(() => resolve(3), 400)),
];

console.log(
  promiseAll(testFunctions1)
    .then((r) => {
      console.log("result =======>", r);
      
    })
    .catch((error) => {
      console.log("error =====>", error);
      
    })
);
