import { expect, test } from 'vitest';
import { BinaryTree } from '../../src/data-structures/binary-tree';

test('Balances an unbalanced binary tree', () => {
    const tree = createUnbalancedTree();

    let unbalancedRoot = tree.getRoot();
    tree.balance();
    let balancedRoot = tree.getRoot();

    expect(unbalancedRoot).not.toBe(balancedRoot);
    expect(unbalancedRoot?.getValue()).toBe(1);
    expect(balancedRoot?.getValue()).toBe(3);
});

test('Balance retains all elements', () => {
    const tree = createUnbalancedTree();

    let unbalancedValues = tree.toArray();
    tree.balance();
    let balancedValues = tree.toArray();

    expect(balancedValues).toEqual(unbalancedValues);
})

test('Balance reduces height to optimal height', () => {
    const tree = createUnbalancedTree();
    tree.insert(9);
    tree.insert(11);

    tree.balance();

    let height = tree.getRoot()!.height();
    expect(height).toBe(3);
});

function createUnbalancedTree(): BinaryTree<number> {
    const tree = new BinaryTree<number>();

    tree.insert(1);
    tree.insert(2);
    tree.insert(3);
    tree.insert(5);
    tree.insert(7);

    return tree;
}