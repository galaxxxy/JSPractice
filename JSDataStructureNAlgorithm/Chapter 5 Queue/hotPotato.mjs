import Queue from './queue-object.mjs';

function hotPotato(elementList, num){
    const queue = new Queue(),
          eliminatedList = [];
    
    // initialize
    for(let i = 0; i < elementList.length; i++){
        queue.enqueue(elementList[i]);
    }

    while(queue.size() > 1){
        for(let i = 0; i < num; i++){
            queue.enqueue(queue.dequeue());
        }
        eliminatedList.push(queue.dequeue());
    }
    return {
        winner: queue.dequeue(),
        eliminated: eliminatedList
    }
}

// test example

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const result = hotPotato(names, 7);

result.eliminated.forEach(name => console.log(`${name} 在击鼓传花游戏中被淘汰`));
console.log(`胜利者: ${result.winner}`);