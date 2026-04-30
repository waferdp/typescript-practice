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
        var left = values.slice(0, Math.ceil(values.length / 2));
        var right = values.slice(Math.ceil(values.length / 2));

        var newRoot = new BinaryTreeNode<T>(left.pop()!);

        while (left.length > 0 || right.length > 0) {
            if(left.length > right.length)
            {
                newRoot.insert(left.pop()!);
            }
            else {
                newRoot.insert(right.shift()!);
            }
        }

        this.root = newRoot;
    }

    public getRoot(): BinaryTreeNode<T> | null {
        return this.root;
    }

    public toArray(): Array<T> {
        return this.root ? this.root.toArray() : [];
    }
}