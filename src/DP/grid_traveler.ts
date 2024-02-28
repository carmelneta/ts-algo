(() => {
    function gridTraveler(m: number, n: number, cache: Map<string, number> = new Map()): number {
        if (cache[`${m}:${n}`]) {
            return cache[`${m}:${n}`]
        }

        if (cache[`${n}:${m}`]) {
            return cache[`${n}:${m}`]
        }

        if (m === 1 && n === 1) return 1
        if (m === 0 || n === 0) return 0

        const result = gridTraveler(m - 1, n, cache) + gridTraveler(m, n - 1, cache)
        cache[`${m}:${n}`] = result
        return result
    }

    console.log(gridTraveler(1,1) === 1)
    console.log(gridTraveler(2,3) === 3)
    console.log(gridTraveler(3,2) === 3)
    console.log(gridTraveler(3,3) === 6)
    console.log(gridTraveler(18,18) === 2333606220)
})()