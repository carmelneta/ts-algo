type BinaryNode<T> = {
    value: T,
    left?: BinaryNode<T>,
    right?: BinaryNode<T>
}

function operation(operation: string): (a: number, b: number) => number {
    if (operation === '*') {
        return (a, b) => (a * b)
    }

    if (operation === '/') {
        return (a,b) => {
            if (b === 0) {throw 'hiluk be 0 zoth taot'}
            return a / b
        }
    }

    if (operation === '+') {
        return (a,b) => (a+b)
    }

    if (operation === '+') {
        return (a,b) => (a+b)
    }

    if (operation === '-') {
        return (a,b) => (a - b)
    }

    throw 'not operaiton'
}


function calculateTree(node: BinaryNode<number | string>): number {
    if (typeof node.value === 'string') {
        return operation(node.value)(
            calculateTree(node.left!),
            calculateTree(node.right!)
        )
    }

    return node.value
}


const tree: BinaryNode<number | string> = {
    value: '+',
    left: { value: 3 },
    right: { 
        value: '*', 
        left: {
            value: '+',
            left: { value: 5 },
            right: { value: 9 }
        },
        right: {
            value: 2
        }
    }
}

const results = calculateTree(tree)
console.log(results)