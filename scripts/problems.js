// clone array

function cloneArray(arr){
    //clone array using splice method
  // if (typeof arr === []){
         let clonedArr = arr.slice(0);
        //  arr.push(22);
        //  console.log(arr);
    return clonedArr; 
   
   
}
//console.log(cloneArray([3, 65, 18, 6]));//ashxatum e nayev stringi depqum


function cloneArray2(arr){
    //clone array with spread operator
    let clonedArr = [...arr];
    return clonedArr;
}
//console.log(cloneArray2([22, 44, 66, 88]));


function cloneArray3(arr){
    //clone array use concat method
    let clonedArr = [].concat(arr);
    return clonedArr;
}
//console.log(cloneArray3([4, 7, 1]));

function cloneLoop(arr){
    let copy = [];
    for(let i=0; i < arr.length; i++){
        copy.push(arr[i]);
    }
     arr.push(100);
     //console.log(arr);
    return copy; 
}
//console.log(cloneLoop([3,2,1]));

function cloneDeep(arr){
    //clone array use 
    let clonedArr = arr;
    arr.push(200);
    return clonedArr;
}
console.log(cloneDeep([1, 3, 6, 8]));