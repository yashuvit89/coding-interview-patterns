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

head.next.next.next.next.next.next = head.next.next;
head.next.next.next.next.next.next = head.next.next.next;
// printNodes(head);

function hasCycle(head) {
  var slow = head;
  var fast = head;

  while (slow !== null && fast !== null) {
    slow = slow.next;
    fast = fast.next && fast.next.next;
    console.log("Print: slow, fast", slow && slow.data, fast && fast.data);

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

var hasCycleResult = hasCycle(head);
console.log("Has cycle", hasCycleResult);
