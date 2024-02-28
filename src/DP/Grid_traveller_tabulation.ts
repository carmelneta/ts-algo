(() => {
    function gridTraveler(row: number, col: number) {
        const table = Array(row + 1)
        .fill([])
        .map( () => Array(col + 1).fill(0))

        table[1][1] = 1

        for (let i = 0; i <= row; i++) {
            for (let j = 0; j <= col; j++) {
                const current = table[i][j]

                //  Right 
                if (j + 1 <= col) {
                    table[i][j + 1] += current
                }
                //  Bottom
                if (i + 1 <= row) {
                    table[i + 1][j] += current
                }
            }
        }

        return table[row][col]
    }

    console.log(gridTraveler(1,1))  //  1
    console.log(gridTraveler(2,3))  //  3
    console.log(gridTraveler(3,2))  //  3
    console.log(gridTraveler(3,3))  //  6
    console.log(gridTraveler(18,18))//  2333606220
})()