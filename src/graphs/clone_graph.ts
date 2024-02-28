(() => {


     class Node {
         val: number
         neighbors: Node[]
         constructor(val?: number, neighbors?: Node[]) {
             this.val = (val===undefined ? 0 : val)
             this.neighbors = (neighbors===undefined ? [] : neighbors)
         }
    }

    function build(array: number[][]): Node | null {
        const nodes = array.map( (value, index) => {
            return new Node(index + 1)
        } )

        for (let i = 0; i < array.length; i++) {
            const node = nodes[i]
            for (let j = 0; j < array[i].length; j++) {
                node.neighbors.push(nodes[array[i][j] - 1])
            }
        } 

        return nodes.length ? nodes[0] : null
    }

    function clone(node: Node | null, parent: Node , nodesMap: Map<number, Node>): Node | null {
        if (node === null) {
            return null
        }

        let cloned = nodesMap[node.val]
        if (cloned) {
            return cloned
        }
        
        cloned = new Node(node.val, [parent])
        nodesMap[node.val] = cloned
        

        for (let i = 0; i < node.neighbors.length; i++) {
            let neigbor = node.neighbors[i]
            if (neigbor.val === parent.val) {
                continue
            } 


            let clonedNeigbor = clone(neigbor, cloned, nodesMap)
            if (clonedNeigbor) {
                cloned.neighbors.push(clonedNeigbor)
            }
            
        }
        return cloned
    }

    function cloneGraph(node: Node | null): Node | null {
        if (!node) {
            return null
        }

        if (node.neighbors.length < 1) {
            return new Node(node.val)
        }

        let root = new Node(node.val)
    
        let map = new Map<number, Node>()
        map[1] = root

        for (let i = 0; i < node.neighbors.length; i++) {
            root.neighbors.push(
                clone(node.neighbors[i], root, map)
            )
        }

        return root
    };

    

    const nodes = build([[2,4],[1,3],[2,4],[1,3]])
    console.log(cloneGraph(nodes))
})()