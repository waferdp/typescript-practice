import { expect, test } from 'vitest';
import { BinaryTreeNode } from '../../src/data-structures/binary-tree-node';

test('Creates a tree node with a value', () => {
    const node = new BinaryTreeNode<number>(5);
    expect(node.getValue()).toBe(5);
});