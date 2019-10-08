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

export const depthFirstSearch = (graph, callback) => {
    const vertices = graph.getVertices(),
          adjList = graph.getAdjList(),
          color = initializeColor(vertices);
    
    for(let i = 0; i < vertices.length; i++){
        if(color[vertices[i]] === Colors.WHITE){
            depthFirstSearchVisit(vertices[i], color, adjList, callback);
        }
    }
};

const depthFirstSearchVisit = (u, color, adjList, callback) => {
    color[u] = Colors.GREY;
    if(callback){
        callback(u);
    }
    const neighbors = adjList.get(u);
    for(let i = 0; i < neighbors.length; i++){
        const w = neighbors[i];
        if(color[w] === Colors.WHITE){
            depthFirstSearchVisit(w, color, adjList, callback);
        }
        color[w] = Colors.BLACK;
    }
}
