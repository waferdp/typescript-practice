export class BinaryTreeNode<T> {
    private value: T;
    private a: BinaryTreeNode<T> | null = null;
    private b: BinaryTreeNode<T> | null = null;


    constructor(value: T) {
        this.value = value;
    }

    public static fromArray<T>(values: Array<T>) : BinaryTreeNode<T> {
            let mid = Math.floor(values.length / 2);
            let self = new BinaryTreeNode<T>(values[mid])
            let left = values.slice(0, mid);
            let right = values.slice(mid+1);

            if(left.length) {
                self.a = BinaryTreeNode.fromArray<T>(left);
            }
            
            if(right.length) {
                self.b = BinaryTreeNode.fromArray<T>(right);
            }

            return self;
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

    public toArray(): Array<T> {
        let values: Array<T> = [];
        if (this.a != null) {
            values.push(...this.a.toArray());
        }
        values.push(this.value);

        if (this.b != null) {
            values.push(...this.b.toArray());
        }

        return values;
    }

    public toString(): string {
        return this.toArray().join(',');
    }

    public height(): number {
        let childHeight = Math.max(this.a?.height() ?? 0, this.b?.height() ?? 0);
        return childHeight + 1;
    }
}