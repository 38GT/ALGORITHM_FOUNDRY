//1. 순열

//arr에서 r개를 뽑아 순열
const permute = (arr,r) => {
    const result =[];

    function backtrack(path,used){
        if(path.length === r){
            result.push([...path]);
            return;
        }

        for (let i = 0; i < arr.length; i++){
            if (used[i]) continue;
            used[i] = true;
            path.push(arr[i]);
            backtrack(path,used);
            path.pop();
            used[i] = false;
        }
    }
    backtrack([],Array(arr.length).fill(false));
    return result;
};



// console.log(permute([1,2,3,4],3));

//2. 조합

const combine = (arr,k) => {
    const result = [];

    function backtrack(start,path){
        if(path.length === k){
            result.push([...path]);
            return;
        }
        for (let i = start; i < arr.length; i++){
            path.push(arr[i]);
            backtrack(i + 1, path);
            path.pop();
        }
    }
    backtrack(0, []);
    return result;
};

// console.log(combine([1, 2, 3], 2));

//3. 부분 집합

const subsets = (arr) => {
    const result = [];

    function backtrack(start,path){
        result.push([...path]);

        for (let i = start; i < arr.length; i++){
            path.push(arr[i]);
            backtrack(i+1,path);
            path.pop();
        }
    }

    backtrack(0, []);
    return result;
};


// console.log(subsets([1, 2, 3]))

const allCourseStr = [];

function findAllCourses(str){
    const result = [];
    function backtrack(start,path){
        result.push(path.join(""));
        for(let i = start; i < str.length; i ++){
            path.push(str[i]);
            backtrack(i + 1,path);
            path.pop();
        }
    }
    backtrack(0,[]);
    return result;
}

console.log(findAllCourses("123"))