function BST(value){
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function(value){
    if (value <= this.value){
      if (!this.left) this.left = new BST(value);
      else this.left.insert(value)
      
    }
    else if (value > this.value){
      if (!this.right) this.right = new BST(value);
      else this.right.insert(value)
    }
}
BST.prototype.contains = function(value){
  if (value === this.value) return value;
  else if (value < this.value) {
    if (!this.left) return false;
    return this.left.contains(value);
  }
  else if (value > this.value) {
    if (!this.right) return false;
    return this.right.contains(value);
  }
}
BST.prototype.depthFirstSearch = function(iteratorFunc,order){
  if( order === "pre-order") iteratorFunc(this.value);
  if (this.left) this.left.depthFirstSearch(iteratorFunc, order);
  if(order === "in-order") iteratorFunc(this.value);
  if (this.right) this.right.depthFirstSearch(iteratorFunc, order);
  if(order === "post-order") iteratorFunc(this.value);
}


BST.prototype.breadthFirstSearch = function(iteratorFunc){
  var queue = [this];
  while(queue.length){
    var currentNode = queue.shift();
    iteratorFunc(currentNode.value);
    if(currentNode.left) queue.push(currentNode.left)
    if(currentNode.right) queue.push(currentNode.right)
  }
}

BST.prototype.getMinVal = function(){
  if(this.left) return this.left.getMinVal();
  else return this.value
}

BST.prototype.getMaxVal = function(){
  if(this.right) return this.right.getMaxVal();
  else return this.value
}

function log(value){
  console.log(value)
}

var bst = new BST(50);
bst.insert(30);
bst.insert(60);
bst.insert(70);
bst.insert(89);
console.log(bst)
bst.depthFirstSearch(log,"pre-order")
// console.log("Min:", bst.getMinVal())
// console.log("Max:", bst.getMaxVal())