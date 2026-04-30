class BinaryTree<T> {
    private root: TreeNode<T>|null = null;

    public insert(value: T): void {
        if (this.root === null) {
            this.root = new TreeNode(value);
        } else {
            this.insertNode(this.root, value);
        }
    }

    
}