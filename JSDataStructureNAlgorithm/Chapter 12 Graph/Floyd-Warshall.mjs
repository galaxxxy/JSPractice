const INF = Infinity;
const floydWarshall = graph => {
    const dist = [],
          {length} = graph;
    for(let i = 0; i < length; i++){
        dist[i] = [];
        for(let j = 0; j < length; j++){
            if(i === j){
                dist[i][j] = 0;
            }else if (!isFinite(graph[i][j])){
                dist[i][j] = INF;
            }else{
                dist[i][j] = graph[i][j];
            }
        }
    }
    for(let k = 0; k < length; k++){
        for(let i = 0; i < length; i++){
            for(let j = 0; j < length; j++){
                if(dist[i][k] + dist[k][j] < dist[i][j]){
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }
    return dist;
}

// test example 
const graph = [
  [INF, 2, 4, INF, INF, INF],
  [INF, INF, 2, 4, 2, INF],
  [INF, INF, INF, INF, 3, INF],
  [INF, INF, INF, INF, INF, 2],
  [INF, INF, INF, 3, INF, 2],
  [INF, INF, INF, INF, INF, INF]
];
const result = floydWarshall(graph);
console.log(result);

for(let i = 0; i < result.length; i++){
    for(let j = 0; j < result[i].length; j++){
        if(isFinite(result[i][j])){
            console.log(`${i} => ${j}: ${result[i][j]}`);
        }
    }
}