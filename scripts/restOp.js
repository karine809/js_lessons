// Rest Operator
// function multy() {
//     let numbers = Array.from(arguments);
//     console.log(
//       numbers.reduce(function (value, curretValue) {
//         return value * curretValue;
//       })
//     );
//   }
  
//   multy(5, 5);
//   multy(5, 5, 5);
  

  function multy2(...numbers) {
    console.log(
      numbers.reduce(function (value, curretValue) {
        return value * curretValue;
      })
    );
  }
  
  multy2(10, 20, 30);
  multy2(10, 20);