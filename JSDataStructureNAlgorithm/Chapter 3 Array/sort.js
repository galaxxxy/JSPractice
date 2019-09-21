let nums = [15,14,13,12,11,10,9,8,7,6,5,4,3,2,1];

//.sort()
console.log("pass no parameter:");
nums.sort();
console.log(nums);

nums.sort((a,b) => {
    return a - b;
});
console.log(nums);

const friends = [
    {name: 'John', age: 30},
    {name: 'Ana', age: 20},
    {name: 'Chris', age: 25},
];
function comparePerson(a,b){
    if(a.age < b.age){
        return -1;   
    } else if (a.age > b.age){
        return 1;
    }
    return 0;
}
console.log(friends.sort(comparePerson));

const names = ['Ana', 'ana', 'john', 'John'];
console.log(names.sort());

console.log('使用localeCompare()来做含重音符号的字符或不区分大小写的排序:');
console.log(names.sort((a,b) => a.localeCompare(b)));
const names2 = ['Maève','Maeve'];
console.log(names2.sort((a,b) => a.localeCompare(b)));