// let tauhidMarks = 45 + 65 + 52;
// let danishMarks = 45 + 65 + 52;
// let aadiMarks = 45 + 65 + 52;
// console.log("tauhhidMarks", tauhidMarks);

// let productPrice = 3000;
// let discountAmount = 3000;
// let deliveryCharge = 50;
// let totalAmount = productPrice - discountAmount + deliveryCharge;
// console.log(totalAmount);

// function totalMarks(studenName, mathMarks, scienceMarks, hindiMarks) {
//   console.log(
//     `${studenName} total marks`,

// mathMarks + scienceMarks + hindiMarks,
//   );
// }

// totalMarks("alok", 45, 65, 52);
// totalMarks("addi", 45, 65, 52);
// totalMarks("anu", 45, 65, 52);

// function greetingMsg(userName = "Guest", greeting = "hii") {
//   console.log(`${greeting}, ${userName}`);
// }
// greetingMsg()
// greetingMsg("waseem", "hii");
// greetingMsg("zaif", "hello");
// greetingMsg("gulzar", "kiya haal hai");

// function calculator(num1, num2, operator) {
//   switch (operator) {
//     case "+":
//       console.log(`${num1}, ${num2}, ${operator} =`, num1 + num2);
//       break;
//     case "-":
//       console.log(`${num1}, ${num2}, ${operator} =`, num1 - num2);
//       break;
//   }
// }
// calculator(4, 5, "+");
// calculator(4, 5, "-");

// function totalMarks(mathMarks, scienceMarks,hindiMarks){
//  return mathMarks+scienceMarks+hindiMarks;
// }

// function calPercentage(studentMarks,mathMarks,scienceMarks,hindiMarks){
//     let total = totalMarks(mathMarks, scienceMarks, hindiMarks);
//     let percentage = (total / 300)* 100
//     console.log(`${studentMarks} percentage:`, percentage);
//     return percentage;

// }
//  let percentage = calPercentage("Tauhid", 42, 36,55)
// console.log(percentage);

// function declaration
// fun1()
// function fun1(){
//     console.log("function declaration");
// }

// <FUNCTION EXPRESSION>

// let add = function (num1, num2) {
//   return num1 + num2;
// };

// // //    let result = add(46, 62);
// console.log(add(46, 62));

//ARROW FUNCTION
//syntax 1
// let add = num1 => num1 + 4;

//syntax 2
// let add = (num1 ,num2) => num1 + num2;

//syntax3
let add = (num1, num2) => {
  //something
  //something
  return num1 + num2;
};
console.log(add(46, 62));
