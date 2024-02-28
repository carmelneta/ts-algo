(() => {
    const grid = [
        ['W', 'L', 'W', 'W', 'W'],
        ['W', 'L', 'W', 'W', 'W'],
        ['W', 'W', 'W', 'L', 'W'],
        ['W', 'W', 'L', 'L', 'W'],
        ['L', 'W', 'W', 'L', 'L'],
        ['L', 'L', 'W', 'W', 'W'],
      ];

    type Point = {row: number, col: number}
    
    function pointHash(point: Point): string {
        return `${point.col}:${point.row}`
    }
    
    function count(grid: string[][]): number {
        let visited = new Set<string>()
        let count = 0
        for (let i = 0; i < grid.length; i++) { //  Row Loop
            for (let j = 0; j < grid[i].length; j++) {  //  Col loop
                if (grid[i][j] === 'W') {
                    continue
                }
                const position = {row: i, col :j}
                if (visited.has(pointHash(position))) {
                    continue
                }

                count++

                explore(grid, visited, position)
            }
        }

        return count
    }

    function explore(grid: string[][], visited: Set<string>, position: Point) {
        if (grid[position.row][position.col] === 'W') {
            return
        }

        if (visited.has(pointHash(position))) {
            return
        }
        
        visited.add(pointHash(position))

        //  Go UP
        if (position.row > 0) {
            explore(grid, visited, {col: position.col, row: position.row - 1})
        }
        //  Go Left
        if (position.col < grid[0].length - 1) {
            explore(grid, visited, {col: position.col + 1, row: position.row})
        }
        //  Go Down
        if (position.row < grid.length - 1) {
            explore(grid, visited, {col: position.col, row: position.row + 1})
        }
        //  Go right
        if (position.col > 0) {
            explore(grid, visited, {col: position.col - 1, row: position.row})
        }
    }

    console.log(count(grid) === 3)
})()