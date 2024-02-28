(() => {
    function canSum(target: number, numbers: number[], cache: Map<number, number> = new Map()): boolean {
        if (target in cache) {
            return cache[target]
        }
        if (target === 0) return true

        if (target < 0) return false

        for (let num of numbers) {
            if (canSum(target - num, numbers, cache)) {
                cache[target] = true
                return true
            }
        }
        cache[target] = false
        return false
    }

    function howSum(target: number, numbers: number[], cache: Map<number, number[]> = new Map()): number[] | null {
        if (target in cache) {
            return cache[target]
        }
        if (target === 0) return []

        if (target < 0) return null

        for (let num of numbers) {
            const remainder = target - num
            const result = howSum(remainder, numbers, cache)
            if (result !== null) {
                cache[target] = [...result, num]
                return cache[target]
            }
        }

        cache[target] = null
        return null
    }

    function bestSum(target: number, numbers: number[], cache: Map<number, number[]> = new Map() ): number[] | null {
        if (target in cache) {
            return cache[target]
        }
        if (target === 0) return []

        if (target < 0) return null
        let shortest = null

        for (let num of numbers) {
            const remainder = target - num
            const result = bestSum(remainder, numbers, cache)
            if (result !== null) {
                const combination = [...result, num]
                
                if (shortest === null || combination.length < shortest.length) {
                    shortest = combination
                }
            }

        }
        cache[target] = shortest
        return shortest
    }


    // console.log(canSum(7,[2,3]) === true)
    // console.log(canSum(7,[5,4,3, 7]) === true)
    // console.log(canSum(300,[7, 14]) === false)

    // console.log(howSum(7,[2, 3]))
    // console.log(howSum(7,[5, 4, 3, 7]))
    // console.log(howSum(7,[2, 4]))
    // console.log(howSum(300,[7, 14]))

    console.log(bestSum(7, [5,3,4,7]))
    console.log(bestSum(8, [2,3,5]))
    console.log(bestSum(8, [1,4,5]))
    console.log(bestSum(100, [1,2,5, 25]))
})()