(() => {
    function fib(n: number, cache: Map<number, number> = new Map()) {
        if (cache[n]) {
            return cache[n]
        }

        if (n <= 2) {
            return 1
        }
        const r = fib(n -1, cache) + fib(n - 2, cache)
        console.log(r)
        cache[n] = r
        return r
    }

    console.log(fib(50))
})()