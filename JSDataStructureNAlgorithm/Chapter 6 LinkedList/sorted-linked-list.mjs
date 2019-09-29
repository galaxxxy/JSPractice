import { LinkedList } from "./linked-list.mjs";
import { defaultEquals } from "../util.mjs";
// import { Node } from "./linked-list-models.mjs";

// define const variables
const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1
};

function defaultCompare(a,b){
    if(a === b){
        return 0;
    }
    return a > b ? Compare.BIGGER_THAN : Compare.LESS_THAN;
}

class SortedLinkedList extends LinkedList{
    constructor(equalsFn = defaultEquals, compareFn = defaultCompare){
        super(equalsFn);
        this.compareFn = compareFn;
    }
    // methods
    getIndexNextSortedElement(element){
        let current = this.head,
            index = 0;
        for(; index < this.size() && current; index++){
            const compare = this.compareFn(element, current.element);
            if(compare === Compare.LESS_THAN){
                return index;
            }
            current = current.next;
        }
        return index;
    }
    insert(element, index = 0){
        if(this.isEmpty()){
            return super.insert(element,0);
        }
        const pos = this.getIndexNextSortedElement(element);
        return super.insert(element, pos);
    }
}

const sll = new SortedLinkedList();
// test example
sll.insert(1);
sll.insert(2);
sll.insert(1);
sll.insert(3);
sll.insert(1);
console.log(sll.toString());