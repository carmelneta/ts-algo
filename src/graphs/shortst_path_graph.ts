(() => {
    const edges = [
        ['w', 'x'],
        ['x', 'y'],
        ['z', 'y'],
        ['z', 'v'],
        ['w,', 'v']
    ]

    function buildGraph(edges) {
        const graph = {}
        for (let edge of edges) {
            const [a, b] = edge
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

    function shotestPath(graph, nodeA, nodeB) {
        let visited = new Set([nodeA])
        const queue = [ [nodeA, 0] ]
        
        while (queue.length > 0) {
            
            let [node, distance] = queue.shift()

            if (node === nodeB) return distance

            for(let neigbor of graph[node]) {
                if (!visited.has(neigbor)) {
                    queue.push([neigbor, distance + 1])
                    visited.add(neigbor)
                }
            }
        }

        return -1
    }

    console.log(shotestPath(buildGraph(edges), 'x', 'y') === 1)
    console.log(shotestPath(buildGraph(edges), 'v', 'y') === 2)
    console.log(shotestPath(buildGraph(edges), 'v', 'QQ') === -1)
})()
