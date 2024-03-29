import { BFS } from './breadthFirstSearch.mjs';
import { Graph } from './Graph.mjs';
import Stack from '../Chapter 4 Stack/stack-array.mjs';
import { DFS } from './depthFirstSearch.mjs';

const graph = new Graph();
const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

for(let i = 0; i < myVertices.length; i++){
    graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

console.log("*****breadth-first search*****");
const shortestPathA = BFS(graph, myVertices[0]);
console.log(shortestPathA);

console.log("*****depth-first search*****");

const shortestPathB = DFS(graph, myVertices[0]);
console.log(shortestPathB);

console.log("*****shortest path*****");

const fromVertex = myVertices[0];
for(let i = 1; i < myVertices.length; i++){
    const toVertex = myVertices[i];
    const path = new Stack();
    for(let v = toVertex; v !== fromVertex; v = shortestPathA.predecessors[v]){
        path.push(v);
    }
    path.push(fromVertex);
    let s = path.pop();
    while(!path.isEmpty()){
        s += ' - ' + path.pop();
    }
    console.log(s);
}