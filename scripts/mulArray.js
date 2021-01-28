var arr = [
    ["wake up", 8],
    ["breakfast", 9],
    ["work", 12],
    ["lunch", 14],
    ["sleep", 22]
];
arr.push(["homework", 16]);
arr.pop();
arr.splice(4,0,["program lesson", 19])
 console.table(arr);
// console.log(arr[4][0]);
for (var i =0 ; i < arr.length; i++){//sa drsi arrayi hamar
    //console.log(arr[i]);
    var innerArraylength = arr[i].length;
    for(var j = 0; j < innerArraylength; j++){//sa nersi arrayi hamar
        console.log('[' + i + ',' + j + ']= ' + arr[i][j]);
    }
}