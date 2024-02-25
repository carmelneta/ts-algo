type Node<T> = {
    value: T,
    prev?: Node<T>,
    next?: Node<T>
}

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>
    private tail?: Node<T>

    constructor() {
        this.length = 0
        this.head = undefined
    }

    prepend(item: T): void {
        const node: Node<T> = { value: item }
        this.length++
        if (!this.head) {
            this.head = this.tail = node
            return
        }

        node.next = this.head
        this.head.prev = node
        this.head = node
    }

    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            throw new Error('ERR')
        } else if (idx === this.length) {
            this.append(item)
            return
        } else if (idx === 0) {
            this.prepend(item)
            return
        }

        //  Find the Index 
        const current = this.getAt(idx)

        this.length++

        const node: Node<T> = { value: item }

        node.next = current
        node.prev = current?.prev
        current!.prev = node

        if (node.prev) {
            node!.prev.next = current
        }
    }

    append(item: T): void {
        this.length++
        const node: Node<T> = { value: item }
        if (!this.tail) {
            this.head = this.tail = node
            return
        }

        node.prev = this.tail
        this.tail.next = node
        this.tail = node
    }

    remove(item: T): T | undefined {
        //  Find item 
        let current = this.head
        for (let i = 0; current && i < this.length; ++i) {
            if (current.value === item) {
                break
            }

            current = current.next
        }

        //  Remove Item

        //  No Item found
        if (!current) {
            return undefined;
        }

        return this.removeNode(current)
    }

    get(idx: number): T | undefined {
        return this.getAt(idx)?.value
    }

    removeAt(idx: number): T | undefined {
        const node = this.getAt(idx)

        if (!node) {
            return undefined
        }

        return this.removeNode(node)
    }

    private removeNode(node: Node<T>): T | undefined {
        this.length--

        if (this.length === 0) {
            const output = this.head?.value
            this.head = this.tail = undefined
            return output
        }

        if (node.prev) {
            node.prev.next = node.next
        }

        if (node.next) {
            node.next.prev = node.prev
        }

        if (node === this.head) {
            this.head = node.next
        }

        if (node === this.tail) {
            this.tail = node.prev
        }

        node.prev = node.next = undefined
        return node.value
    }

    private getAt(idx: number): Node<T> | undefined {
        //  Find item
        let current = this.head
        for (let i = 0; i < idx; ++i) {
            // if (current.value === item) {
            //     break
            // }

            current = current?.next
        }

        return current
    }
}