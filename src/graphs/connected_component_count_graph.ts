const connectedComponentsCount = (graph) => {
    const visited = new Set<string>()
    let count = 0
    for (let node in graph) {
        if (explore(graph, node, visited) === true) {
            count++
        }
    }

    return count
}


const explore = (graph, current, visited) => {
    if (visited.has(String(current))) { 
        return false
    }

    visited.add(String(current))

    for (let neigbor of graph[current]) {
        explore(graph, neigbor, visited)
    }

    return true
}


const r = connectedComponentsCount({
    0: [8,1,5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
})

console.log(r, r === 2)