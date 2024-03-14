/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    
    let timeOut = null;

    return function(...args) {
        // clear previous time outs if the function is called again within the debounce period.
        if(timeOut !== null){
            clearTimeout(timeOut)
        }

        // set new timeout to execute after debounce period.
        timeOut = setTimeout(()=>{
            fn(...args)
        },t)
    }
};

// testing debounce function.
const start = Date.now()

function dlog(...inputs){
    console.log({
        t:Date.now() - start,
        inputs,
    })
}


 const log = debounce(dlog, 100);

 setTimeout(() => dlog(1),50)
 setTimeout(() => dlog(2),75)

//  reset
setTimeout(()=>{
    const start2 = Date.now()

    function log2(...inputs){
        console.log({
            t:Date.now() - start2,
            inputs,
        })
    }

    const dlog2 = debounce(log2,20)

    setTimeout(() => dlog2(1), 50);
    setTimeout(() => dlog2(2), 100);
},200)

