/**
 * Given an object or an array, return if it is empty.

An empty object contains no key-value pairs.
An empty array contains no elements.
You may assume the object or array is the output of JSON.parse.

 

Example 1:

Input: obj = {"x": 5, "y": 42}
Output: false
Explanation: The object has 2 key-value pairs so it is not empty.
Example 2:

Input: obj = {}
Output: true
Explanation: The object doesn't have any key-value pairs so it is empty.
Example 3:
 */

const isEmpty = (obj) => {
    
    // for(const [key,val] in obj){
    //     console.log(key)
    // }

    for(const [key,val] of Object.entries(obj)){
        console.log(key,val)
    }

    console.log("length of objects ====>",Object.entries(obj).length)

    return Object.entries(obj).length > 0 ? false : true
}


const input = {"x": 5, "y": 42}

console.log(isEmpty(input))