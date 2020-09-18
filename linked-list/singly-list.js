class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList{
  constructor(head = null){
    this.head = head;
  }

  containsNodeWithValue(value){
    let node = this.head;
    while(node !== null && node.value !== value) node = node.value;

    return node !== null;
  }

  add(value){
    const newNode = new Node(value);
    if(this.head === null) {
      this.head = newNode;
      return this;
    }
    let node = this.head;
    while(node.next) node = node.next
    node.next = newNode;
    return this
  }

  insertAt(value, pos){
    const newNode = new Node(value)
    if(pos === 1){
      newNode.next = this.head;
      this.head = newNode;
      return this;
    }
    let currentPos = 1;
    let node = this.head;
    while(currentPos++ < pos - 1) node = node.next;
    newNode.next = node.next;
    node.next = newNode
    return this;

  }


  size(){
    let node = this.head;
    let count = 0;
    while(node !== null) {
      node = node.next;
      count++;
    }
    return count
  }

  printAll(){
    let node = this.head;
    while(node){
      console.log(node.value)
      node = node.next
    }
  }

}

let list = new LinkedList()
list.add(1).add(2).add(4).add(5)
list.insertAt(3,3)
list.printAll()
