import {Dictionary} from '../Chapter 8 Dictionaries and Hashes/dictionary-object.mjs';

export class Graph{
    constructor(isDirected = false){
        this.isDirected = isDirected;
        this.vertices = [];
        this.adjList = new Dictionary();
    }
    // methods
    addVertex(v){
        if(!this.vertices.includes(v)){
            this.vertices.push(v);
            this.adjList.set(v, []);
        }
    }
    addEdge(v, w){
        if(!this.adjList.get(v)){
            this.addVertex(v);
        }
        if(!this.adjList.get(w)){
            this.addVertex(w);
        }
        this.adjList.get(v).push(w);
        if(!this.isDirected){
            this.adjList.get(w).push(v);
        }
    }
    getVertices(){
        return this.vertices;
    }
    getAdjList(){
        return this.adjList;
    }
    toString(){
        let str = ``;
        for(let i = 0; i < this.vertices.length; i++){
            str += `${this.vertices[i]} -> `
            const neighbors = this.adjList.get(this.vertices[i]);
            for(let j = 0; j < neighbors.length; j++){
                str += `${neighbors[j]} `;
            }
            str += '\n';
        }
        return str;
    }
}