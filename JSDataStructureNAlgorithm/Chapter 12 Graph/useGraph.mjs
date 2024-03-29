import { Graph } from "./Graph.mjs";
import { breadthFirstSearch } from "./breadthFirstSearch.mjs";
import { depthFirstSearch } from "./depthFirstSearch.mjs";

// test example
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

console.log(graph.toString());

console.log("********breadth-first search********");
const printVertex = value => console.log('Visited vertex: ' + value);
breadthFirstSearch(graph, myVertices[0], printVertex); 

console.log("********depth-first search********");
depthFirstSearch(graph, printVertex);