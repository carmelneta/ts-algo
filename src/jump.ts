
function iterative(nums: number[]): boolean {
    let lastGoodIndex = nums.length-1;
    for (let i = nums.length - 1; i >= 0 ; i--){
        if (nums[i] + i >= lastGoodIndex){
            lastGoodIndex = i;
        }
    }
    return lastGoodIndex === 0;
}

type IntNode = {
    value: number,
    nodes: IntNode[]
}

function _buildTree(nums: number[]): IntNode[] {
    let nodes = nums.map( (i) => { return {value: i, nodes: []} } )

    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j <= nums[i]; j++) {
            if (i + j < nums.length) {
                nodes[i].nodes.push(nodes[i + j])
            }
        }
    }

    return nodes
}

function buildTree(nums: number[]): IntNode {
    return _buildTree(nums)[0]
}

//  DFS
function pathExsits(source: IntNode, target: number): boolean {
    if (source.value === target) {
        return true
    }

    for (let i = 0; i < source.nodes.length; i++) {
        if (pathExsits(source.nodes[i], target)) {
            return true
        }
    }

    return false
}

function bsf(source: IntNode, target: IntNode): number {
    let visited = new Set<IntNode>()
    let distances = new Map<IntNode, number>()
    distances.set(source, 0)
    let que: IntNode[] = [source]

    while (que.length > 0) {
        let current = que.shift()
        
        for(let i = 0; i < current.nodes.length; i++) {
            let child = current.nodes[i]
            if (!visited.has(child)) {
                que.push(current.nodes[i])
                
                visited.add(child)
                distances.set(child, distances.get(current) + 1)
            }
        }
    }

    return distances.get(target) ?? -1
}

//  Iterative DFS 
function iterativeDFS(source: IntNode, target: IntNode): boolean {
    let visited = new Set<IntNode>()
    let stack: IntNode[] = [source]

    while (stack.length > 0) {
        let current = stack.pop()
        
        for(let i = 0; i < current.nodes.length; i++) {
            let child = current.nodes[i]
            if (child === target) {
                return true
            }

            if (!visited.has(child)) {
                stack.push(current.nodes[i])
                visited.add(child)
            }
        }
    }

    return false
}

// console.log(iterative([2,3,1,1,4]))
// console.log(iterative([3,2,1,0,4]))
// console.log(pathExsits(buildTree([2,3,1,1,4]), 4))
// console.log(pathExsits(buildTree([3,2,1,0,4]), 4))

const _tree = _buildTree([3,2,1,0,4])
// console.log(bsf(_tree[0], _tree[6]))
console.log(iterativeDFS(_tree[0], _tree[6]))
