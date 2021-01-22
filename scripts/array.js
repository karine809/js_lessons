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

