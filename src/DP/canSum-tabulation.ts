(() => {
    function canSum(target: number, array: number[]): boolean {
        //  Create
        const table: boolean[] = Array(target + 1).fill(false)

        //  Seed
        table[0] = true

        for (let i = 0; i < target; i++) {
            if (table[i] === true) {
                for (let num of array) {
                    if (i + num < table.length) {
                        table[i + num] = true
                    }
                }
            }
        }


        return table[target]
    }

    function howSum(target: number, array: number[]): number[] {
        //  Create
        const table: number[][] = Array(target + 1)
        .fill(null)

        //  Seed
        table[0] = []

        for (let i = 0; i < target; i++) {
            if (table[i] !== null) {
                for (let num of array) {
                    table[i + num] = [...table[i], num]

                    //  Short circut 
                    if (i + num === target) {
                        //  return table[i + num]
                        return table[target]
                    }
                }
            }
        }

        return table[target]
    }

    function bestSum(target: number, array: number[]): number[] {
        //  Create
        const table: number[][] = Array(target + 1)
        .fill(null)

        //  Seed
        table[0] = []

        for (let i = 0; i < target; i++) {
            if (table[i] !== null) {
                for (let num of array) {
                    const expected = [...table[i], num]
                    if (table[i + num] === null ||
                        expected.length < table[i + num]?.length) {
                        table[i + num] = expected
                    }
                }
            }
        }

        return table[target]
    }

    // console.log(canSum(7,[2,3]) === true)
    // console.log(canSum(7,[5,4,3, 7]) === true)
    // console.log(canSum(7, [2, 4]) === false)
    // console.log(canSum(300,[7, 14]) === false)

    // console.log(howSum(7,[2,3]))        //  [3, 2, 2]
    // console.log(howSum(7,[5, 4, 3, 7])) //  [4, 3]
    // console.log(howSum(7, [2, 4]))      //  Null
    // console.log(howSum(300,[7, 14]))    //  Null


    console.log(bestSum(7,[2,3]))        //  [3, 2, 2]
    console.log(bestSum(7,[5, 4, 3, 7])) //  [7]
    console.log(bestSum(7, [2, 4]))      //  Null
    console.log(bestSum(300,[7, 14]))    //  Null
    console.log(bestSum(100,[25, 1, 2, 14]))    //  Null
    
})()