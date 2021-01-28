// let vs var

//  var value;
value = 5;//var value, value = 5 katarvum e 2 pulov` stexcel, heto veragrel
//  console.log(value);

//   value = "hello";
//   console.log(value);

 let val = 9;
// console.log(val);

for (var i=0; i< 5; i++){}//i-n tesaneli e nayev for-ic durs
//console.log(i);

for (let j=0; j< 5; j++){}//drsum j tesaneli che  
//console.log(j);

//const vs let, var
const a = 5;
//a = 6;
//console.log(a);

const obj = {             //objecti ev arrayi depqum const@ karox e popoxvel          
    name: "Karine",
    surname: "Mesropyan"
}

obj.gender = "female";
//delete obj.surname;
//console.log(obj);

const arr = [2, 6, 84, 40];
arr.pop();
console.log(arr);