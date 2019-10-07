import { Queue } from "../Chapter 5 Queue/queue-object.mjs";

const Colors = {
    WHITE: 0,
    GREY: 1,
    BLACK: 2
};

const initializeColor = vertices => {
    const color = {};
    for(let i = 0; i < vertices.length; i++){
        color[vertices[i]] = Colors.WHITE;
    }
    return color;
}

export const breadthFirstSearch = (graph, startVertex, callback) => {
    const vertices = graph.getVertices(),
          adjList = graph.getAdjList(),
          color = initializeColor(vertices);
    const queue = new Queue();
    queue.enqueue(startVertex);
    while(!queue.isEmpty()){
        const u = queue.dequeue();
        const neighbors = adjList.get(u);
        color[u] = Colors.GREY;
        for(let i = 0; i < neighbors.length; i++){
            const w = neighbors[i];
            if(color[w] === Colors.WHITE){
                color[w] = Colors.GREY;
                queue.enqueue(w);
            }
        }
        color[u] = Colors.BLACK;
        if(callback){
            callback(u);
        }
    }
};