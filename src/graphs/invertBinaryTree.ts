class TreeNode {
     val: number
     left: TreeNode | null
     right: TreeNode | null
     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
}

function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root || !root.left || !root.right) {
        return root
    }

    const temp = root.left
    root.left = invertTree(root.right)
    root.right = invertTree(temp)
    return root
};


const __tree = new TreeNode(
    4,
    new TreeNode(
        2,
        new TreeNode(1),
        new TreeNode(3),
        ),
    new TreeNode(
        7,
        new TreeNode(6),
        new TreeNode(9)
        )
)


invertTree(__tree)
console.log(__tree)