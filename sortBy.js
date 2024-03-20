/*
Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArray must be sorted in ascending order by fn output.

You may assume that fn will never duplicate numbers for a given array.

 

Example 1:

Input: arr = [5, 4, 1, 2, 3], fn = (x) => x
Output: [1, 2, 3, 4, 5]
Explanation: fn simply returns the number passed to it so the array is sorted in ascending order.
Example 2:

Input: arr = [{"x": 1}, {"x": 0}, {"x": -1}], fn = (d) => d.x
Output: [{"x": -1}, {"x": 0}, {"x": 1}]
Explanation: fn returns the value for the "x" key. So the array is sorted based on that value.
Example 3:

Input: arr = [[3, 4], [5, 2], [10, 1]], fn = (x) => x[1]
Output: [[10, 1], [5, 2], [3, 4]]
Explanation: arr is sorted in ascending order by number at index=1. */


const sortBy = (arr,fn) => {

    let obj = {};
    let allKeys = []
    let sortedArr = []

    for(let i = 0; i < arr.length; i++){
        let key = fn(arr[i])

        if(!obj[key]){
            obj[key] = []
        }

        obj[key].push(arr[i])

    }

    for (let key in obj){
        // get all keys from object and add them to allKeys array
        allKeys.push(parseFloat(key));
    }

    allKeys.sort((a,b) => a - b)
    console.log("all keys ====>",allKeys)

    for(let key of allKeys){
        // adds all elements associated with each keys to the sorted array.
        sortedArr.push(...obj[key])
    }

    return sortedArr
}

console.log(sortBy([5, 4, 1, 2, 3], fn = (x) => x))

console.log(sortBy(arr = [{"x": 1}, {"x": 0}, {"x": -1}], fn = (d) => d.x))


const sortBy2 = (arr,fn) => {

    const sortedArr = arr.map((item) => {
        return {
            key: fn(item),
            value: item
        }
    }).sort((a,b) => a.key - b.key).map((item) => item.value)

    return sortedArr
}


console.log(sortBy2([5, 4, 1, 2, 3], fn = (x) => x))

console.log(sortBy2(arr = [{"x": 1}, {"x": 0}, {"x": -1}], fn = (d) => d.x))
