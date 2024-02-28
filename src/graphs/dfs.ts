//  Iterative
const depthFirstPrint = (graph, source) => {
    const stack = [source]

    while (stack.length > 0) {
        const current = stack.pop()

        console.log(current)
        
        for (let neigbor of graph[current]) {
            stack.push(neigbor)
        }
    }
}

//  Recursice
const depthFirstPrint_recursice = (graph, source) => {
    console.log(source)

    for (let neigbor of graph[source]) {
        depthFirstPrint_recursice(graph, source)
    }
}

//  BFS
const breadthFirstPrint = (graph, source) => {
    const queue = [ source ]
    while (queue.length > 0) {
        const current = queue.shift()
        console.log(current)
        for (let neighbor of graph[current]) {
            queue.push(neighbor)
        }
    }
}


const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}





const hasPath = (graph, src, dst) => {
    if (src === dst) {
        return true
    }

    for (let neighbor of graph[src]) {
        if (hasPath(graph, neighbor, dst) === true) {
            return true
        }
    }

    return false
}
const hasPathGraph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
}

hasPath(hasPathGraph, 'f', 'k')