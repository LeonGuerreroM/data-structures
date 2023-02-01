class HashTable{

    constructor(size){
        this.data = new Array(size);
    }

    hashFunction(key){  //example arbitrary hash function
        let hash = 0;
        for(let i=0; i<key.length; i++){
            hash = (hash + key.charCodeAt(i)*i) % this.data.length;
        }
        return hash;
    }

    set(key, value){
        const address = this.hashFunction(key); //generates address hash
        if(!this.data[address]){ //since this array doesn't work by indexes but by "random" hashes if it doesn't exists 
            this.data[address] = [] //generates an array (so that more than one element could be stores)
        }
        this.data[address].push([key, value]); //push on array inside the blank array (con use push on an "index" since a blanck array was already created there)
    }

    get(key){
        const address = this.hashFunction(key); //gets the address
        const currentBucket = this.data[address]; //obtains correspondent bucket
        if(currentBucket){ //if exists
            for(let currentElement of currentBucket){ //loop through bucket since it could have more than one element (collision)
                if(currentElement[0] === key){ //if currentElement has the searched key
                    return currentElement[1]; //returns correspondent value
                }
            }
        }
        return undefined;
    }

    delete(key){
        const address = this.hashFunction(key); //gets the address
        const currentBucket = this.data[address]; //obtains correspondent bucket
        if(currentBucket){ //if exists
            for(let i=0;i<currentBucket.length;i++){ //loop through bucket since it could have more than one element (collision)
                if(currentBucket[i][0] === key){ //if currentElement has the searched key
                    const deletedValue = currentBucket[i][1]; //saves correspondent value
                    currentBucket.splice(i, 1); //deletes correspondent element from bucket (if it was the single one on bucket, the bucket still has the address -so it's like it were being used- but is void)
                    return deletedValue; //return deleted value
                }
            }
        }
        return undefined;
    }

    getKeys(){
        let keys = [];
        for(let bucket of this.data){ //loop through hash table
            if(!bucket){ //if the bucket has no address
                continue; //skips current iteration
            }
            for(let element of bucket){ //loop through bucket
                keys.push(element[0]); //stores key into keys array
            }
        }
        return keys;
    }

}

const myHashTable = new HashTable(50);
myHashTable.set('color1', 'rojo');
myHashTable.set('color2', 'verde');
myHashTable.set('color3', 'azul');
//myHashTable.set('color4', 'naranja');
// console.log(myHashTable); //muestra  los espacios vacios, donde se guarda info y los espacios vacios que siguen
myHashTable.delete('color2');
// console.log(myHashTable); //muestra  los espacios vacios, donde se guarda info y los espacios vacios que siguen
// console.log(myHashTable.get('color2'));
console.log(myHashTable.getKeys());

// let array = []
// array[0] = []
// array[1] = []
// array[0].push(['color1', 'rojo'])
// array[0].push(['color2', 'verde'])
// array[1].push(['color3', 'azul'])
// console.log(array);
// array[0].splice(1, 1)
// console.log('---------');
// console.log(array);
// array[0].splice(0, 1)
// console.log('---------');
// console.log(array);
