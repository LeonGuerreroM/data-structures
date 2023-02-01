
class MyArray { 
    
    constructor(){
        this.length = 0;
        this.data = {};
    }

    get(index){
        if (index == undefined) {
            return this.data;
        }
        if(index>this.length-1){
            console.log('index out of bounds')
            return false;
        }
        return this.data[index];

    }

    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }

    pop(){
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }

    unshift(item){
        for(let i=this.length-1;i>-1;i--){
            this.data[i+1]=this.data[i];
        }
        this.data[0] = item;
        this.length++;
        return this.length;
    }

    shift(){
        const deletedItem = this.data[0];
        this.shiftIndex(0);
        return deletedItem;
    }

    delete(index){
        if (index == undefined) {
            console.log('undefined index')
            return false;
        }
        if(index>this.length-1){
            console.log('index out of bounds')
            return false;
        }
        const deletedItem = this.data[index]
        this.shiftIndex(index);
        return deletedItem;
    }

    shiftIndex(index){
        for(let i=index; i<this.length-1; i++){
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length - 1];
        this.length--;
    }

}

const array = new MyArray();
