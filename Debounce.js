const debounceValue = function(fn, t) {
    let timer
    return function(...args) {
        // clear the previous timer if it exists
        clearTimeout(timer)

        timer = setTimeout(()=> {
            fn.apply(this, args)
        }, t)
    }
}