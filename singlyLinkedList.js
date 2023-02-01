
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class SinglyLinkedList {

    constructor(value){
        this.head = {
            value,
            next: null,
        }
        this.tail = this.head; 
        this.length = 1;
    }

    append(value){
        let newNode = new Node(value); //creates a new node
        this.tail.next = newNode; //link the new node as the next of the tail
        this.tail = newNode; //makes new node the tail
        this.length++; //increases length
        return this; //this here makes reference of the instance, all the structure that is being created there
    }

    prepend(value){
        let newNode = new Node(value); //creates a new node
        newNode.next = this.head; //makes the current head the next one
        this.head = newNode; //makes new node the new head
        this.length++; //increases length
        return this; //this here makes reference of the instance, all the structure that is being created there
    }

    insert(index, value){
        //this works considering head as index 0. 
        if(index > this.length || index < 1){ //if index is out of bounds
            return undefined;
        }
        if(index == 0){ //if index is 0, calls prepend
            return this.prepend(value);
        }
        if(index == this.length){ //if one bigger that current length, calls append
            return this.append(value);
        }
        let newNode = new Node(value); //creates a new node
        
        let counter = 1; //starts here since 0 is prepend
        let nextNode = this.head.next; //default next is the second since case where 1 is next is prepend
        let prevNode = this.head;   //default is head 
        //next loop moves you through the list until the wanted position
        while(counter != index){ //while counter is different than index
            nextNode = nextNode.next; //next will move forward
            prevNode = prevNode.next; //also prev will move forward always one node less than next 
            counter++;
        }
        
        prevNode.next = newNode; //links new node with prev (back)
        newNode.next = nextNode; //links new node with next (front)
        
        this.length++;

        return this; //returns the whole instance 
    }

    officialInsert(index, value){
        //this works considering head as index 0. 
        if(index >= this.length){
            return this.append(value);
        }
        const newNode = new Node(value); //creates a new node
        const firstPointer = this.getTheIndex(index - 1); //gets the previous node according to the wanted index
        const holdingPointer = firstPointer.next; //stores the wanted index node so that garbage collector does not destroy it
        firstPointer.next = newNode; //makes the link
        newNode.next = holdingPointer;

        this.length++;

        return this;
    }

    getTheIndex(index){
        let counter = 0; //starts at 0 on head
        let currentNode = this.head;

        while(counter !== index){
            currentNode = currentNode.next;
            counter++; 
            //current will be on the node correspondent to the counter value at the end of iteration
        }

        return currentNode;
    }

    remove(index){
        if(index >= this.length){ //if the index doesn't exists nothing happens
            return this;
        }
        if(index==0){
            this.head = this.head.next;
        }else{
            let counter = 0;
            let prevNode = this.head;
            while(counter != index-1){
                prevNode = prevNode.next;
                counter++;
            }

            if(index==this.length-1){
                prevNode.next = null;
            }else{
                prevNode.next = prevNode.next.next;
            }

        }
        

        this.length--;

        return this;

        
    }

    print(){
        let counter = 1;
        let node = this.head; //starts at head
        while(counter <= this.length){ //while inside of bounds
            console.log(node); //prints node
            node = node.next; //move node forward using the pointer in its own next
            counter++; 
        }
    }

}

let mySinglyLinkedList = new SinglyLinkedList(1);
mySinglyLinkedList.append(2)
mySinglyLinkedList.append(3)
//mySinglyLinkedList.prepend(0)
//mySinglyLinkedList.print();
//console.log('---------------------------------');
//console.log(mySinglyLinkedList.insert(2, 0.5));
//console.log(mySinglyLinkedList.insert(4, 1.5));
//mySinglyLinkedList.insert(2, 2.5)
mySinglyLinkedList.remove(2)
//mySinglyLinkedList.officialInsert(2, 2.5)
mySinglyLinkedList.print();

function repeatedWords(words){
    let singleWords = [];
    let flag = false;

    for(let i=0; i<words.length; i++){
        for(let word of singleWords){
            if(word.word == words[i]){
                word.appearances += 1;
                flag = true;
                break;
            }
        }
        if(!flag){
            singleWords.push({ word: words[i], appearances: 1 });
        }else{
            flag = false;
        }
    }

    singleWords.sort( (a,b) => b.appearances - a.appearances );
    console.log(singleWords);
}

repeatedWords(['manzana', 'pera', 'manzana', 'pinia', 'sandia', 'pera', 'pera', 'naranja', 'manzana', 'fresa', 'fresa', 'manzana', 'mango'])

function exerciseIBM(words){
    let singleWords = [];
    let appearances = [];
    let result = [];
    let wantedIndex = -1;
    let flag = false;

    for(let i=0; i<words.length; i++){
        for(let j=0; j<singleWords.length; j++){
            if(words[i] == singleWords[j]){
                appearances[j]++;
                flag = true;
                wantedIndex = j;
                break;
            }
        }
        if(!flag){
            singleWords.push(words[i]);
            appearances.push(1);
            wantedIndex = singleWords.length-1;
        }else{
            flag = false;
        }
        result.push(singleWords[wantedIndex]+appearances[wantedIndex]);
    }

    console.log(result);
}

exerciseIBM(['manzana', 'pera', 'manzana', 'pinia', 'sandia', 'pera', 'pera', 'naranja', 'manzana', 'fresa', 'fresa', 'manzana', 'mango'])
