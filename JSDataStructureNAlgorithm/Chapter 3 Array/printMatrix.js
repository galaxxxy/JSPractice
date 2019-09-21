function printMatrix(matrix){
    for(let i = 0; i < matrix.length; i++){
        console.log("第"+i+"行");
        for(let j = 0; j < matrix[i].length; j++){
            console.log(matrix[i][j]);
        }
    }
}

let matrix = [[1,2,3,4,5],[1,2,3],[4,2]];
printMatrix(matrix);
console.table(matrix);