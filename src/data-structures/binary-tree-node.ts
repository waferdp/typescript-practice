export class BinaryTreeNode<T> {
    private value: T;
    private a: BinaryTreeNode<T> | null = null;
    private b: BinaryTreeNode<T> | null = null;


    constructor(value: T) {
        this.value = value;
    }

    public getA(): BinaryTreeNode<T> | null {
        return this.a;
    }

    public getB(): BinaryTreeNode<T> | null {
        return this.b;
    }

    public getValue(): T {
        return this.value;
    }

    public insert(value: T): void {
        if (value < this.value) {
            if (this.a === null) {
                this.a = new BinaryTreeNode(value);
            } else {
                this.a.insert(value);
            }
        } else {
            if (this.b === null) {
                this.b = new BinaryTreeNode(value);
            } else {
                this.b.insert(value);
            }
        }
    }
    
    public toString(): string {
        return `${this.a}, ${this.value}, ${this.b}`;
    }
}