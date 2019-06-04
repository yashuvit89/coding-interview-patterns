function Node(data) {
  this.data = data;
  this.next = null;
}

function printNodes(head) {
  var currNode = head;
  while (currNode !== null) {
    console.log(currNode.data);
    currNode = currNode.next;
  }
}

var head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

// printNodes(head);

function reverseLinkedlist(head) {
  var newHead = null;
  var currNode = head;

  while (currNode != null) {
    var nextNode = currNode.next;

    currNode.next = newHead;
    newHead = currNode;
    currNode = nextNode;
  }

  printNodes(newHead);
}

reverseLinkedlist(head);
