const max_values = (arr)=>{
    let max = -Infinity;
    let result = [];
    for(let num of arr){
        if(num > max){
            max = num;
            result = [];
            result.push(num);
        }else if(num === max){
            result.push(num);
        }
    }
    return result;
}

const max_values2 = (arr)=>{
    const sortedArr = arr.sort((a,b) => b-a);
    return sortedArr.filter(item => item === sortedArr[0]);
}

const max_values3 = (arr) => arr.filter(item => item === Math.max(...arr));

const numbers = [2,2,3,4,1,5,6,6,4,6];

console.log(max_values3(numbers));
console.log(max_values(numbers));