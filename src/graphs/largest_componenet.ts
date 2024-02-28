function largestComponent(graph): number {
    let visited = new Set<string>()
    let max = 0

    for (let node in graph) {
        max = Math.max(max, _explore(graph, node, visited, 0))
    }

    return max
}

function _explore(graph, node, visited, count): number {
    if (visited.has(String(node))) {
        return count
    }

    count++
    visited.add(String(node))

    for (let neighbor of graph[node]) {
        count += _explore(graph, neighbor, visited, 0)
    }

    return count
}

const __graph = {
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
}
const __results = largestComponent(__graph)

console.log(__results)