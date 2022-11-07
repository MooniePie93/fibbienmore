class Node {
    constructor() {
        this.key = 0;
        this.left = null;
        this.right = null;
    }
}

function newNode(key) {
    var ptr = new Node();
    ptr.key = key;
    ptr.left = null;
    ptr.right = null;
    return ptr;
}

function insert(root, key) {
    if (root == null)
        root = newNode(key);
    else if (root.key > key)
        root.left = insert(root.left, key);
    else if (root.key < key)
        root.right = insert(root.right, key);
    return root;
}

function distanceFromRoot(root, x) {
    if (root.key == x)
        return 0;
    else if (root.key > x)
        return 1 + distanceFromRoot(root.left, x);
    return 1 + distanceFromRoot(root.right, x);
}

function distanceBetween2(root, a, b) {
    if (root == null)
        return 0;
    if (root.key > a && root.key > b)
        return distanceBetween2(root.left, a, b);
    if (root.key < a && root.key < b)
        return distanceBetween2(root.right, a, b);
    if (root.key >= a && root.key <= b)
        return distanceFromRoot(root, a) +
            distanceFromRoot(root, b);

    return 0;
}

function findDistWrapper(root, a, b) {
    var temp = 0;
    if (a > b) {
        temp = a;
        a = b;
        b = temp;
    }
    return distanceBetween2(root, a, b);
}
var root = null;
root = insert(root, 20);
insert(root, 10);
insert(root, 5);
insert(root, 15);
insert(root, 30);
insert(root, 25);
insert(root, 35);

console.log(findDistWrapper(root, 5, 35));

//Distance between two nodes: https://jsfiddle.net/#&togetherjs=VkPbzdJIFo //
