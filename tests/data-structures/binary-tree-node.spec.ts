import { expect, test } from 'vitest';
import { BinaryTreeNode } from '../../src/data-structures/binary-tree-node';

test('Creates a tree node with a value', () => {
    const node = new BinaryTreeNode<number>(5);
    expect(node.getValue()).toBe(5);
});

test('Inserts values into the tree node', () => {
    const node = new BinaryTreeNode<number>(5);
    node.insert(3);
    node.insert(7);
    expect(node.toArray()).toEqual([3, 5, 7]);
});