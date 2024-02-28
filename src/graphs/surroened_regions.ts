(() => {
    /**
     Do not return anything, modify board in-place instead.
    */

    function explore(board: string[][], row: number, col: number, visited: Set<string>, prev: boolean): boolean {
        if (
            row < 0 ||
            row >= board.length ||
            col < 0 ||
            col >= board[row].length
        ) {
            return false
        }

        if (board[row][col] === 'X') return false

        let hash = `${row}:${col}`
        if (visited.has(hash)) {
            return false
        }

        visited.add(hash)

        const up =      explore(board, row - 1, col, visited, true)
        const right =   explore(board, row, col + 1, visited, true) 
        const down =    explore(board, row + 1, col, visited, true) 
        const left =    explore(board, row, col - 1, visited, true)

        if (up || right || down || left) {
            board[row][col] = 'X'
        }
        if (prev) {
            board[row][col] = 'X'
        }

        return true
    }

    function solve(board: string[][]): void {
        let visited = new Set<string>()
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                explore(board, i, j, visited, board[i][j]!=='O')
            }
        }
    };
    //const board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
    const board = [["O","O"],["O","O"]]
    solve(board)
    console.log(board)


})()