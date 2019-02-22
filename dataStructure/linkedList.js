function LinkList (){
  this.head = null;
  this.tail = null;  
}

function Node (value, next, prev) {
  this.value = value;
  this.next = next;  
  this.prev = prev;
}

LinkList.prototype.addToHead = function(value) {
  var newNode = new Node(value, this.head, null);
  if(this.head) this.head.prev = newNode;
  else this.tail = newNode;
  this.head = newNode;
}

LinkList.prototype.addToTail = function(value){
  var newNode = new Node(value, null, this.tail);
  if(this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode; 
}

LinkList.prototype.search = function(searchValue){
  var currentNode = this.head;
  while(currentNode){
    if(currentNode.value === searchValue) return searchValue;
    currentNode = currentNode.next;
  }
  return null
}

LinkList.prototype.indexOf = function(searchValue){
  var indexNumber = [];
  var x = 0;
  var currentNode = this.head;
  while(currentNode){
    if(currentNode.value === searchValue) indexNumber.push(x);
    x++;
    currentNode = currentNode.next;
  }
  return indexNumber;
}

var LL = new LinkList();
LL.addToTail(10);
LL.addToTail(20);
LL.addToTail(30);
LL.addToTail(10);

console.log(LL.indexOf(10));


