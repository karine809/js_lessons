////array-i haytararman tesakner@

var arr1 = [3, 56, 81, 32, 58, 27];// amenataratsvats dzevn e

 var arr2 = new Array(2, 45, 85, 16);// ashxatum e nuyn dzev
 var arr2 = new Array(7); //chi ashxatum miachapi depqum, nshvats tiv@ vercnum e lenght u
                          // asum e, vor datarek e, isk srtingi jk kashxati normal
 var arr2 = new Array("one", "two", "three");                         

 var arr3 = Array.of(3, 8, 4, 1)
  
 var arr4 = Array.from("Karine");//miayn string-i jk e ashxatum
 // console.log(arr4);

//   var listItems = document.querySelectorAll("li");
//   var arr5 = Array.from(listItems);
//   console.log(arr5); 

  arr1.push(33);
 // console.log(arr1);

  arr1.pop();
 //console.log(arr1);

 arr1.unshift('Karine');
 //console.log(arr1);

 arr1.shift();
 //console.log(arr1[2]);

var index = arr1.indexOf(58);
//console.log(index);

var lastIndex = arr1.lastIndexOf(3)
//console.log(lastIndex);

var concatedArr = arr1.concat(arr3);
//console.log(concatedArr);

//Slice method, working with the copy

var arrSlice = [2, 5, 17, 48, 69, "one", "two", "three"];
var sliced = arrSlice.slice(3,6);//heracnum e nshvats hatvac@ [start, end)
//console.log(sliced,"modyfied");
//console.log(arrSlice, "original");

var slicedMins = arrSlice.slice(2,-3);//start@ bacasakan chi karox linel
var slicedMins1 = arrSlice.slice(-3);//hasvark@ sksum e verjic
// console.log(slicedMins);
// console.log(slicedMins1);


//Splice method, working on the original

var arrSplice = [2, 5, 17, 48, 69, "one", "two", "three"];
var spliced = arrSplice.splice(4,2);//heracnum e [start, count]
// console.log(arrSplice, "original");
// console.log(spliced, "modyfied");

// var spliced1 = arrSplice.splice(5);//vercnum e 5-ic sksac minchev verj
// console.log(arrSplice, "original");//originalum mnum e 5 hat element, originali hamar count e
// console.log(spliced1, "modyfied");//modyfied hamar index e, pak mijakayqov

// var spliced2 = arrSplice.splice(2, 4,"hello");//start-ic hanum e count, tex@ dnum e errord parametry
// console.log(arrSplice, "original");
// console.log(spliced2, "modyfied");


//Sort method
var arrSort = [44, 61, 28, 9, 17, "d", "w", "a", "k" ]
var sorted = arrSort.sort();//sortavorum e tver@ @st tvanshanneri achman kargi, tarer@` @st aybbenakan
// sorted = arrSort.sort(function(a,b){return a-b}) //sortavorim e tver@ @st achman kargi
// sorted = arrSort.sort(function(a,b){return b-a})// sortavorim e tver@ @st nvazman kargi
// console.log(sorted);



//Reverce method
var arrReverce = [4, 61, 28, 9, 17, "a", "v", "t"];//hakadardz e sharum` verj@ araj e anum
var reverced = arrReverce.reverse();
//console.log(reverced);

//Join method
var arrJoin = [44, 28, 17, "d",  "a", "k" ];
var joined = arrJoin.join();//veradardznum e array@ vorpes string, aranqner@ ','-ov
// joined = arrJoin.join(' ');//aranqner@ dnum e bacat 
// joined = arrJoin.join('/');//aranqner@ dnum e '/'
//console.log(joined);

//Reduce method
var arrReduce = [40, 20, 10];
var redused = arrReduce.reduce(function(total, num){return total-num});//arrayi arjeq@ nvazecnum e, dardznelov mek@
//srtingi jamanak '-' chen anum, Nan e talis, katarum en '+' vorn el concat e anum

//console.log(redused);



// array with object
var arrObj = [3, 56, 81, 27,
   obj = {
    fullName: {              
      firstName: 'Karine',
      lastName: 'Mesropyan'
    },
    age: 30,
    gender: 'female',
    hobbies: ['reading','cooking','drawing'] 
}];
//console.log(arrObj);

//find method
//var foundEl = arrObj.find(element => element > 60);
// var foundEl = arrObj.find((arrObject index, array) =>{
//     return arrObj.gender === 'male'
// });
//console.log(foundEl);

var foundIndex = arrObj.findIndex((arrObject, index, arrays) => {
  return arrObj.age === 30
});
console.log(foundIndex);