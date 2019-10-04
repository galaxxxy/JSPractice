import TreeNode from './TreeNode.mjs';
import {defaultCompare} from '../util.mjs';

export class BinarySearchTree{
    constructor(compareFn = defaultCompare){
        this.compareFn = compareFn;
        this.root = null;
    }
    // methods
    insert(key){
        if(this.root === null){
            const node = new TreeNode(key);
            this.root = node;
        }else{
            this.insertNode(this.root, key);
        }
    }
    insertNode(node, key){
        if(this.compareFn(key, node.key) === -1){
            // place left side
            if(node.left !== null){
                this.insertNode(node.left, key);
            }else{
                node.left = new TreeNode(key);
            }
        }else{
            // place right side
            if(node.right !== null){
                this.insertNode(node.right, key);
            }else{
                node.right = new TreeNode(key);
            }
        }
    }
    inOrderTraverse(callback){
        this.inOrderTraverseNode(this.root, callback);
    }
    inOrderTraverseNode(node, callback){
        if(node !== null){
            this.inOrderTraverseNode(node.left, callback);
            callback(node);
            this.inOrderTraverseNode(node.right, callback);
        }
    }
    preOrderTraverse(callback){
        this.preOrderTraverseNode(this.root, callback);
    }
    preOrderTraverseNode(node, callback){
        if(node !== null){
            callback(node);
            this.preOrderTraverseNode(node.left, callback);
            this.preOrderTraverseNode(node.right, callback);
        }
    }
    postOrderTraverse(callback){
        this.postOrderTraverseNode(this.root, callback);
    }
    postOrderTraverseNode(node, callback){
        if(node !== null){
            this.postOrderTraverseNode(node.left, callback);
            this.postOrderTraverseNode(node.right, callback);
            callback(node);
        }
    }
    min(){
        return this.minNode(this.root);
    }
    minNode(node){
        let current = node;
        while(current !== null && current.left !== null){
            current = current.left;
        }
        return current;
    }
    max(){
        return this.maxNode(this.root);
    }
    maxNode(node){
        let current = node;
        while(current !== null && current.right !== null){
            current = current.right;
        }
        return current;
    }
    search(key){
        return this.searchNode(this.root, key);
    }
    searchNode(node, key){
        if(node === null){
            return false;
        }
        if(this.compareFn(key, node.key) === -1){
            this.searchNode(node.left, key);
        }else if(this.compareFn(key, node.key) === 1){
            this.searchNode(node.right, key);
        }else{
            return true;
        }
    }
    remove(key){
        this.root = this.removeNode(this.root, key);
    }
    removeNode(node, key){
        if(node === null){
            return null;
        }
        if(this.compareFn(key, node.key) === -1){
            node.left = this.removeNode(node.left, key);
            return node;
        }else if(this.compareFn(key, node.key) === 1){
            node.right = this.removeNode(node.right, key);
            return node;
        }else{
            // 1
            if(node.left === null && node.right === null){
                node = null;
                return null;
            }
            // 2
            if(node.left === null){
                node = node.right;
                return node;
            }else if(node.right === null){
                node = node.left;
                return node;
            }
            // 3
            const aux = this.minNode(node.right);
            node.key = aux.key;
            node.right = this.removeNode(node.right, aux.key);
            return node;
        }
    }
}