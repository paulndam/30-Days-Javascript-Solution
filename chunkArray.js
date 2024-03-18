/*
Given an array arr and a chunk size size, return a chunked array. A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

Please solve it without using lodash's _.chunk function.

 

Example 1:

Input: arr = [1,2,3,4,5], size = 1
Output: [[1],[2],[3],[4],[5]]
Explanation: The arr has been split into subarrays each with 1 element.
Example 2:

Input: arr = [1,9,6,3,2], size = 3
Output: [[1,9,6],[3,2]]
Explanation: The arr has been split into subarrays with 3 elements. However, only two elements are left for the 2nd subarray. */

const chunk = (arr,size) => {

    let result = [];
    // loop thru array and increase based on chunk size
    for(let i = 0; i < arr.length; i += size){
        const chunk = arr.slice(i, i + size)

        result.push(chunk)
    }

    return result
}

const input = [1,2,3,4,5];

const input2 = [1,9,6,3,2]


console.log(chunk(input2,3))