class Set{
    constructor(){
        this.items = {};
    }
    // methods
    has(element){
        // return element in this.items;
        return Object.prototype.hasOwnProperty.call(this.items,element);
    }
    add(element){
        if(this.has(element)){
           return false; 
        }
        this.items[element] = element;
        return true;
    }
    delete(element){
        if(!this.has(element)){
           return false; 
        }
        delete this.items[element];
        return true;
    }
    clear(){
        this.items = {};
    }
    size(){
        if(Object.keys){
            return Object.keys(this.items).length;
        }
        this.sizeLegacy();
    }
    sizeLegacy(){
        let count = 0;
        for(let key in items){
            if(this.has(key)){
                count++;
            }
        }
        return count;
    }
    values(){
        if(Object.values){
            return Object.values(this.items);
        }
        this.valuesLegacy();
    }
    valuesLegacy(){
        let values = [];
        for(let key in this.items){
            if(this.has(key)){
                values.push(parseInt(key));
            }
        }
        return values;
    }
    
    union(otherSet){
        const unionSet = new Set();
        this.values().forEach(value => unionSet.add(value));
        otherSet.values().forEach(value => unionSet.add(value));
        return unionSet;
    }
    intersection(otherSet){
        const intersectionSet = new Set();
        let smallSet = null,
        bigSet = null;
        // choosing the smaller set for iterating
        if(this.size() >= otherSet.size()){
            smallSet = otherSet;
            bigSet = this;
        }else{
            smallSet = this;
            bigSet = otherSet;
        }
        smallSet.values().forEach(value =>{
            if(bigSet.has(value)){
                intersectionSet.add(value);
            }
        });
        return intersectionSet;
    }
    difference(otherSet){
        const differenceSet = new Set(),
              intersectionSet = this.intersection(otherSet),
              context = this;
        this.values().forEach(value => {
            if(!intersectionSet.has(value)){
                differenceSet.add(value);
            }
        })
        return differenceSet;
    }
    isSubsetOf(otherSet){
        if(this.size() > otherSet.size()){
            return false;
        }
        let isSubset = true;
        this.values().every(value => {
            if(!otherSet.has(value)){
                isSubset = false;
                return false;
            }
            return true;
        });
        return isSubset;
    }
}

// test example
const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
setA.add(4);
setA.delete(2)
console.log(setA.has(1));// true
console.log(setA.has(2));// false
console.log(setA.values());// [1,3,4]

const setB = new Set();
setB.add(1);
setB.add(4);

console.log(setA.union(setB).values());// [1,3,4]
console.log(setA.intersection(setB).values());// [1,4]
console.log(setA.difference(setB).values());// [3]
console.log(setB.isSubsetOf(setA));// true
console.log(setA.isSubsetOf(setB));// false