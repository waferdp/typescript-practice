import { BinaryTreeNode } from './binary-tree-node';

export class BinaryTree<T> {
    private root: BinaryTreeNode<T>|null = null;

    public insert(value: T): void {
        if (this.root === null) {
            this.root = new BinaryTreeNode(value);
        } else {
            this.root.insert(value);
        }
    }

    public toString(): string {
        return this.root ? this.root.toString() : '';
    }
}