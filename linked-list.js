class _Node{
    constructor(value,next){
        this.value=value;
        this.next=next;
    }
}

class LinkedList{
	constructor(){this.head=null;}
	insertFirst=item=>{this.head=new _Node(item,this.head);}
	insertLast=item=>{
		// Check for empty list.
		if(this.head===null){this.insertFirst(item);}
		// Iterate through list to last node.
		else{
            let tempNode=this.head;
            while(tempNode.next!==null){
				tempNode=tempNode.next;
			}
            tempNode.next=new _Node(item,null);
        }
	}
	insertBefore=(newNode,mark)=>{
		// Check for empty list.
		if(this.head===null){this.insertFirst(newNode.value);}
		// Iterate through list until node found, insert new node before.
		else{
			let currentNode=this.head;
			let prevNode=null;
			while(currentNode.value!==mark){
				// Set the previous node.
				prevNode=currentNode;

				if(currentNode.next.value===mark&&currentNode.value!==newNode.value){
					newNode.next=currentNode.next;
					currentNode.next=newNode;
				}
				currentNode=currentNode.next;
			}
		}
	}
	insertAfter=(newNode,mark)=>{
		// Check for empty list.
		if(this.head===null){this.insertFirst(newNode.value);}
		else{
			let currentNode=this.head;
			while(currentNode.value!==mark){currentNode=currentNode.next;}
			newNode.next=currentNode.next;
			currentNode.next=newNode;

		}
	}
	insertInto=item=>{
		// A jump logic could be inserted here to find the
		// item in the list faster, however, it would only
		// work if the .next pointer was in a logically
		// ordered number sequence. And if there was a stored
		// value representing the length of the list, then the
		// jump number could be a relation in proportion to the
		// list length.
		// However,
		// What would this all mean in comparison to an array?
		// Would the linked list essentially be an array at that
		// point?
	}
	remove=item=>{
		// If the list is empty
        if(!this.head){return null;}
        // If the node to be removed is head, make the next node head
        if(this.head.value===item){
			this.head=this.head.next;
			return;
        }
        // Start at the head
        let currNode=this.head;
        // Keep track of previous
        let previousNode=this.head;
        while((currNode!==null)&&(currNode.value!==item)){
            // Save the previous node 
            previousNode=currNode;
            currNode=currNode.next;
        }
        if(currNode===null){
            console.log('Item not found');
            return;
        }
        previousNode.next=currNode.next;
	}
	find=item=>{
		// Start at the head
        let currNode=this.head;
        // If the list is empty
        if(!this.head){return null;}
        // Check for the item 
        while (currNode.value!==item){
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (currNode.next===null){
                return null;
            }
            else {
                // Otherwise, keep looking 
                currNode=currNode.next;
            }
        }
        // Found it
        return currNode;
	}
}

let SLL=new LinkedList();
let names=['Apollo','Boomer','Helo','Husker','Starbuck'];
names.forEach((name,index)=>{
	if(index===0){SLL.insertFirst(name,null);}
	else{SLL.insertLast(name,null)}
});

function main(){
	let SLL=new LinkedList();
	let names=['Apollo','Boomer','Helo','Husker','Starbuck'];
	names.forEach((name,index)=>{
		if(index===0){SLL.insertFirst(name,null);}
		else{SLL.insertLast(name,null)}
	})

	console.log(names);

	SLL.insertLast('Tauhida',null);

	// Need to write a check to print out the newly inserted object.

	newNode=new _Node('Dynamo',null);

	SLL.insertBefore(newNode,'Husker');

	newNode=new _Node('Neo',null);

	SLL.insertAfter(newNode,'Boomer');

	console.log(SLL.head)
	console.log(SLL.head.next);
	console.log(SLL.head.next.next);
	console.log(SLL.head.next.next.next);
	console.log(SLL.head.next.next.next.next);
	console.log(SLL.head.next.next.next.next.next);
	console.log(SLL.head.next.next.next.next.next.next);
	console.log(SLL.head.next.next.next.next.next.next.next);
}
// main();

function display(list){//basically the same function for size. can also be used for isEmpty.
	let head=list.head
	//need to account for the last item in the list but you get the point.
	while(head.next!==null){
		console.log(head);
		head=head.next;
	}
}
display(SLL)

findPrevious(list){
	// this could essentially just look at the currentNode.next and if it
	// is equal to the search parameter than the currentNode would be the previousNode
}

findLast(list){
	// would look for the node.next===null, if true then that node is the last.
}

// Search?
function WhatDoesThisProgramDo(lst) {
    let current = lst.head;
    while (current !== null) {
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else {
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}

function reverseList(list){
	// basically just iterate through each item and set its pointer to the previous node
	// using the findPrevious code, but accounting for the last item, if that last.next===null set to head.
}

function thirdFromEnd(list){
	//
}

function listMiddle(){
	//
}

function cycleCheck(){
	//
}

debugger