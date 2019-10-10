let graph = [[0, 2, 4, 0, 0, 0],
             [0, 0, 2, 4, 2, 0],
             [0, 0, 0, 0, 3, 0],
             [0, 0, 0, 0, 0, 2],
             [0, 0, 0, 3, 0, 2],
             [0, 0, 0, 0, 0, 0]];

const INF = Number.MAX_SAFE_INTEGER;

const dijkstra = (graph, src) => {
    const dist = [],
          visited = [],
          {length} = graph;

    for(let i = 0; i < length; i++){
        dist[i] = INF;
        visited[i] = false;
    }

    dist[src] = 0;
    for(let i = 0; i < length - 1; i++){
        const u = minDistance(dist, visited);
        visited[u] = true;
        for(let v = 0; v < length; v++){
            if(!visited[v] && graph[u][v] !== 0){
                if(dist[u] !== INF){
                    if(graph[u][v] + dist[u] < dist[v]){
                        dist[v] = dist[u] + graph[u][v];
                    }
                }
            }
        }
    }
    return dist;
}

const minDistance = (dist, visited) => {
    let min = INF,
    minIndex = -1;
    for(let i = 0; i < dist.length; i++){
        if(visited[i] === false && dist[i] <= min){
            min = dist[i];
            minIndex = i;
        }
    }
    return minIndex;
}

const result = dijkstra(graph, 0);
for(let i = 0; i < graph.length; i++){
    console.log(`0 -> ${i}: ${result[i]}`);
}