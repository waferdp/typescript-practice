import { BinaryTreeNode } from './binary-tree-node';

export class BinaryTree<T> {
    private root: BinaryTreeNode<T> | null = null;

    public insert(value: T): void {
        if (this.root === null) {
            this.root = new BinaryTreeNode(value);
        } else {
            this.root.insert(value);
        }
    }

    public balance(): void {
        if (this.root === null) {
            return;
        }
        
        var values = this.root?.toArray();
        this.root = BinaryTreeNode.fromArray(values);
    }

    public getRoot(): BinaryTreeNode<T> | null {
        return this.root;
    }

    public toArray(): Array<T> {
        return this.root ? this.root.toArray() : [];
    }
}