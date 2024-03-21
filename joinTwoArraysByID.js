/**
 * Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will contain an id field that has an integer value. joinedArray is an array formed by merging arr1 and arr2 based on their id key. The length of joinedArray should be the length of unique values of id. The returned array should be sorted in ascending order based on the id key.

If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification.

If two objects share an id, their properties should be merged into a single object:

If a key only exists in one object, that single key-value pair should be included in the object.
If a key is included in both objects, the value in the object from arr2 should override the value from arr1.
 

Example 1:

Input: 
arr1 = [
    {"id": 1, "x": 1},
    {"id": 2, "x": 9}
], 
arr2 = [
    {"id": 3, "x": 5}
]
Output: 
[
    {"id": 1, "x": 1},
    {"id": 2, "x": 9},
    {"id": 3, "x": 5}
]
Explanation: There are no duplicate ids so arr1 is simply concatenated with arr2.
Example 2:

Input: 
arr1 = [
    {"id": 1, "x": 2, "y": 3},
    {"id": 2, "x": 3, "y": 6}
], 
arr2 = [
    {"id": 2, "x": 10, "y": 20},
    {"id": 3, "x": 0, "y": 0}
]
Output: 
[
    {"id": 1, "x": 2, "y": 3},
    {"id": 2, "x": 10, "y": 20},
    {"id": 3, "x": 0, "y": 0}
]
Explanation: The two objects with id=1 and id=3 are included in the result array without modifiction. The two objects with id=2 are merged together. The keys from arr2 override the values in arr1.

Example 3:

Input: 
arr1 = [
    {"id": 1, "b": {"b": 94},"v": [4, 3], "y": 48}
]
arr2 = [
    {"id": 1, "b": {"c": 84}, "v": [1, 3]}
]
Output: [
    {"id": 1, "b": {"c": 84}, "v": [1, 3], "y": 48}
]
Explanation: The two objects with id=1 are merged together. For the keys "b" and "v" the values from arr2 are used. Since the key "y" only exists in arr1, that value is taken form arr1.
 */

const join = (arr1,arr2) => {

    let hashMap = new Map();
    let joinedArray = [];

    // loop over arr1 first, and store its elements in the hash map
    // then loop over arr2 next,and store its elements in the hash map
    // if the element in arr2 which is the key, is identical to that that element in arr1 which is also the key, 
    //merge both array and we update our hashmap by over-riding the arr1 element (key-value pairs) so that we can use the element for arr2 (key-value pairs)
    // finally return the joined array in a sorted ascending order

    // loop thru arr1 and set each element in hashMap

    arr1.forEach((element)=>{
        hashMap.set(element.id,{...element})

    })

    // loop thru arr2 and compare to see if element with same id already exist in hashMap (from arr1). if it exist merge the element and ensure to overwrite each key from arr1 element to be arr2.
    arr2.forEach((element) => {
        if(hashMap.has(element.id)){
            // merge existing element and overwrite arr1 in order to use arr2
            hashMap.set(element.id, {...hashMap.get(element.id), ...element})
        }else{
            // otherwise just set it to hash map
            hashMap.set(element.id,{...element})
        }
        
    })

    for(const val of hashMap.values()){
        joinedArray.push(val)
    }

    joinedArray.sort((a,b) => a.id - b.id)

    return joinedArray

}

const input1 = [
    {"id": 1, "x": 1},
    {"id": 2, "x": 9}
]

const input2 = [
    {"id": 3, "x": 5}
]

const input3 = [
    {"id": 1, "x": 2, "y": 3},
    {"id": 2, "x": 3, "y": 6}
]

const input4 = [
    {"id": 2, "x": 10, "y": 20},
    {"id": 3, "x": 0, "y": 0}
]

const input5 = [
    {"id": 1, "b": {"b": 94},"v": [4, 3], "y": 48}
]
const input6 = [
    {"id": 1, "b": {"c": 84}, "v": [1, 3]}
]

console.log(join(input1,input2))
console.log(join(input3,input4))
console.log(join(input5,input6))