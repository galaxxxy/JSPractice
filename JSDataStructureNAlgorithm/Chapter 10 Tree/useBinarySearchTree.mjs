import { BinarySearchTree } from "./binarySearchTree.mjs";

// test example
const tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);

const printNode = node => {
    console.log(node.key);
}
console.log("*******中序******");
tree.inOrderTraverse(printNode);
console.log("*******先序******");
tree.preOrderTraverse(printNode);
console.log("*******后序******");
tree.postOrderTraverse(printNode);

console.log("*******remove(6)*  *****");
tree.remove(6);
tree.preOrderTraverse(printNode);

console.log("*******remove(5)******");
tree.remove(5);
tree.preOrderTraverse(printNode);

console.log("*******remove(15)******");
tree.remove(15);
tree.preOrderTraverse(printNode);