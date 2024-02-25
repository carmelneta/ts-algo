const undirectedPath = (edges, nodeA, nodeB): boolean => { 
    const graph = buildGraph(edges)
    return _hasPath(graph, nodeA, nodeB, new Set())
}

const _hasPath = (graph, src, dst, visited): boolean => {
    if (src === dst) { 
        return true
    }
    
    if (visited.has(src)) {
        return false
    }

    visited.add(src)
    
    for (let neighbor of graph[src]) {
        if (_hasPath(graph, neighbor, dst, visited) === true) {
            return true
        }
    }

    return true
}

const buildGraph = (edges) => {
    const graph = {}
    for (let edge of edges) {
        const [a,b] = edge

        if (!(a in graph)) {
            graph[a] = []
        }

        if (!(b in graph)) {
            graph[b] = []
        }

        graph[a].push(b)
        graph[b].push(a)
    }
    return graph
}

const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
]