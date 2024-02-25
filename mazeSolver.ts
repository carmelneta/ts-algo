const dir = [
    [-1, 0],    //  UP
    [1, 0],     //  Down
    [0, -1],    //  Left
    [0, 1]      //  Right
]


function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
    //  Base case
    //  Off the mpa
    if (curr.x < 0 || curr.x >= maze[0].length ||
        curr.y < 0 || curr.y >= maze.length) {
        return false
    }

    //  on a wall 
    if (maze[curr.y][curr.x] === wall) {
        return false
    }

    //  Is this the end
    if (curr.x === end.x && curr.y === end.y) {
        path.push(curr)
        return true
    }

    //  Not have been seen
    if (seen[curr.y][curr.x]) {
        return false
    }

    //  Recurce case
    seen[curr.y][curr.x] = true
    path.push(curr)

    for (let i = 0; i < dir.length; i++) {
        const [x, y] = dir[i]
        if (walk(maze, wall, {
            x: curr.x + x,
            y: curr.y + y
        }, end, seen, path)) {
            //  Breake the recurse if found the end
            return true
        }
    }

    path.pop()

    return false
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const seen: boolean[][] = []
    const path: Point[] = []

    for (let i = 0; i < maze.length; ++i) {
        seen.push(new Array(maze[0].length).fill(false))
    }

    walk(maze, wall, start, end, seen, path)

    return path
}