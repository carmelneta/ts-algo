(() => {
    //  https://structy.net/problems/minimum-island
    const Direction = {
        Left:   {row: 0, col: -1},
        Right:  {row: 0, col: 1},
        Up:     {row: -1, col: 0 },
        Down:   {row: 1, col: 0 },
    }
    
    function minimumIsland(grid: string[][]): number {
        let min = Infinity
        let visited = new Set<string>()
        for (let i = 0; i < grid.length; i++) { //  Row Loop
            for(let j = 0; j < grid[i].length; j++) {  //  Col Loop
                const island = explore(grid, i, j, visited)
                if (island > 0) { 
                    min = Math.min(island, min)
                }
                
            }
        }
        return min
    }

    function explore(grid: string[][], row: number, col: number, visited: Set<string>): number {
        let hash = `${row}:${col}`
        if (visited.has(hash)) {
            return 0
        }

        if (
            row < 0 ||
            row >= grid.length ||
            col < 0 ||
            col >= grid[0].length
        ) {
            return 0
        }

        visited.add(hash)

        if (grid[row][col] === 'W') {
            return 0
        }

        let count = 1
        //  Go Up
        count += explore(grid, row + Direction.Up.row, col + Direction.Up.col, visited)
        //  Go left
        count += explore(grid, row + Direction.Left.row, col + Direction.Left.col, visited)
        //  Go Down
        count += explore(grid, row + Direction.Down.row, col + Direction.Down.col, visited)
        //  Go Right
        count += explore(grid, row + Direction.Right.row, col + Direction.Right.col, visited)

        return count
    }


    const test1= {
        grid: [
            ['W', 'L', 'W', 'W', 'W'],
            ['W', 'L', 'W', 'W', 'W'],
            ['W', 'W', 'W', 'L', 'W'],
            ['W', 'W', 'L', 'L', 'W'],
            ['L', 'W', 'W', 'L', 'L'],
            ['L', 'L', 'W', 'W', 'W'],
          ],
        result: 2
    };
    const test2 = {
        grid: [
            ['L', 'W', 'W', 'L', 'W'],
            ['L', 'W', 'W', 'L', 'L'],
            ['W', 'L', 'W', 'L', 'W'],
            ['W', 'W', 'W', 'W', 'W'],
            ['W', 'W', 'L', 'L', 'L'],
          ],
        result: 1
    }
    console.log(minimumIsland(test1.grid) === test1.result)
    console.log(minimumIsland(test2.grid) === test2.result)

    console.log(minimumIsland([
        ['L', 'L', 'L'],
        ['L', 'L', 'L'],
        ['L', 'L', 'L'],
      ])=== 9)

      console.log(minimumIsland([
        ['W', 'W'],
      ['L', 'L'],
      ['W', 'W'],
      ['W', 'L']]) === 1)
})()