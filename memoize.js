/* 
    PROBLEM
    Given a function fn, return a memoized version of that function.

A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

fn can be any function and there are no constraints on what type of values it accepts. Inputs are considered identical if they are === to each other. in js

*/
// SOLUTION

const memoizeFn = (fn) => {
    // create a cache
    let cache = new Map()
    // return a function with arguments
    return (...args) => {
        // create a key
        const key = JSON.stringify(args)
        // check if there is no cache using the key
        if (!cache.has(key)) {
            // call the original function and store the result in the cache
            cache.set(key, fn(...args))
            }
            // return the value from the cache
            return cache.get(key);
    }
}


const memoi = function (fn) {
    console.assert(typeof fn === 'function', "Input should be a function")
    let cache = new Map()
    return (...args) => {
        const key = JSON.stringify(args)
        if(cache.has(key)) {
            return cache.get(key)
        }
        else {
            let res = fn(...args)
            cache.set(key, res)
            return res
        }
    }
}

const res = function (x, y) {
    return x + y
}

const memoizedHost = memoizeFn(res)
console.log(memoizedHost(2,6))