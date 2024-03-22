

const flat = (arr,n) => {

    // helper function to iterate over array, checks depth and flatten the array

    function flatten(currentArr,currentDepth){
        // if current depth is equal or greater than n,
        // return the array without flattening
        if(currentDepth >= n){
            return currentArr
        }

        let result = [];

        for(let item of currentArr){
            // if item is an array,then recursively flattens it,
            // otherwise add it to the result
            if(Array.isArray(item)){
                let flattenedItem = flatten(item,currentDepth + 1)
                for(let innerItem of flattenedItem){
                    result.push(innerItem)
                }
            }else{
                result.push(item)
            }
        }

        return result

    }

    return flatten(arr,0)
}

let arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]] , n = 0

let arr2 = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], y = 1

let arr3 = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], x = 2

console.log(flat(arr,n))
console.log(flat(arr2,y))
console.log(flat(arr3,x))