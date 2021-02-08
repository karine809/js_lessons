//for of loop
const array = [3, 6, 40, 71];
//returns value
for (let i of array){//veradardznum e valuen
   // console.log(i);
}
 const obj = {
      name: "Karine",
      age: "33"
 }
//returns key
for (let i  in obj){//veradardznum e index@
    //console.log(i);
}

// forEach
// const prices = [4, 62, 19, 3.5, 27];
// const tax = 0.23;
// const taxedPrice = [];

// // for (let price of prices){
// //     taxedPrice.push(price * tax);
// // }
// prices.forEach((price, idx, arr) => {//pttvum e amen elementi vrayov
//     const priceObj = {
//         index: idx,
//         taxedPrice: price * tax
//     }
//     taxedPrice.push(priceObj);
//  })

// console.log(taxedPrice);

// map
const prices = [4, 34, 19, 3.5, 27];
const tax = 0.23;

const taxedPrece  = prices.map((price, idx, arr) => {//pttvum e amen elementi vrayov
    const priceObj = {
        index: idx,
        taxedPrice: price * tax
    }
    return priceObj; 
 })

console.log(prices, taxedPrece);