class TreeNode<T> {
    private value: T;
    private a: TreeNode<T> | null = null;
    private b: TreeNode<T> | null = null;


    constructor(value: T) {
        this.value = value;
    }

    public getA(): TreeNode<T> | null {
        return this.a;
    }

    public getB(): TreeNode<T> | null {
        return this.b;
    }

    public getValue(): T {
        return this.value;
    }

    public insert(value: T): void {
        if (value < this.value) {
            if (this.a === null) {
                this.a = new TreeNode(value);
            } else {
                this.a.insert(value);
            }
        } else {
            if (this.b === null) {
                this.b = new TreeNode(value);
            } else {
                this.b.insert(value);
            }
        }
    }
    
    public toString(): string {
        return `${this.a}, ${this.value}, ${this.b}`;
    }
}