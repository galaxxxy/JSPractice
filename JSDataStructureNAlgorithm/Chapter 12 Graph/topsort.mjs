import { Graph } from './Graph.mjs';
import { DFS } from './depthFirstSearch.mjs';

const graph = new Graph(true);

const myVertices = ['A', 'B', 'C', 'D', 'E', 'F'];
for(let i = 0; i < myVertices.length; i++){
    graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('B', 'D');
graph.addEdge('B', 'E');
graph.addEdge('C', 'F');
graph.addEdge('F', 'E');

const result = DFS(graph);

const fTime = result.finished;
console.log(fTime);
let str = '';
for(let i = 0; i < myVertices.length; i++){
    let max = 0,
        maxName = '';
    for(let j = 0; j < myVertices.length ; j++){
        if(fTime[myVertices[j]] > max){
            max = fTime[myVertices[j]];
            maxName = myVertices[j];
        }
    }
    str +=  maxName + ' ';
    delete fTime[maxName];
}
console.log(str);