// const task1 = function (username, password) {
//     if (username === "admin" && password === 12345) {
//         return "Welcome, Admin"
//     } else {
//         return "Error, invalid credentials";
//     }
// }
// console.log(task1("admin", 12345));


// //TASK 2 SOLVED IN THREE WAYS WITH SLIGHT DIFFERENCES BEING MADE TO MAKE IT MORE COMPLETE IN THE 2ND WAY AND MORE CONCISE (USING MATH.MAX) IN THE 3RD WAY
// const task2_1 = function (inputA, inputB, inputC) {
//     if (inputA >= inputB && inputA >= inputC) {
//         return inputA;
//     } else if (inputB >= inputA && inputB >= inputC) {
//         return inputB;
//     } else if (inputC >= inputA && inputC >= inputB) {
//         return inputC;
//     } else {
//         return `A = B = C`; // This else will never be executed!.
//     }
// }
// console.log(`Eng katta son: ${task2_1(5, 5, 5)}`);



// const task2_2 = function (inputA, inputB, inputC) {
//     if (inputA > inputB && inputA > inputC) {
//         return inputA;
//     } else if (inputB > inputA && inputB > inputC) {
//         return inputB;
//     } else if (inputC > inputA && inputC > inputB) {
//         return inputC;
//     } else if (inputA === inputB || inputB === inputC || inputA === inputC) {
//         if (inputC > inputA) {
//             return inputC;
//         } else if (inputA > inputB) {
//             return inputA;
//         } else if (inputB > inputA) {
//             return inputB;
//         } else {
//             return `A = B = C`;
//         }
//     }
// }
// console.log(`Eng katta son: ${task2_2(2, 2, 3)}`); // Using template literals 
// // console.log(`Eng katta son:`, task2(1, 2, 3));



// const task2_3 = function (inputA, inputB, inputC) {
//     return Math.max(inputA, inputB, inputC);
// }
// console.log(`Eng katta son: ${task2_3(5, 5, 5)}`);



// const task3 = function () {
//     isRegistered = true;
//     if (isRegistered) { // (isRegistered) = (isRegistered === true)    |    (!isRegistered) = (isRegistered === false)
//         return `You signed in to the system`;
//     } else {
//         return `Please register!`;
//     }
// }
// const loginToTheSystem = task3();
// console.log(loginToTheSystem);



// const task4 = function (inputWidth, inputHeight) {
//     return inputWidth === inputHeight ? `Kvadrat` : `To'g'ri to'rtburchak`;
// }
// console.log(task4(10, 10));



// const task5 = function (inputA, inputB) {
//     let sum = inputA + inputB;
//     if (sum > 0) {
//         return `The sum is positive`;
//     } else if (sum === 0) {
//         return `The sum is equal to 0`;
//     } else {
//         return `The sum is negative`;
//     }
// }
// console.log(task5(10, -10));



// const task6 = function (inputTemperature) {
//     if (inputTemperature >= 30) {
//         return "Juda issiq, soyada dam oling!";
//     } else if (inputTemperature >= 20 && inputTemperature < 30) {
//         return "Ob-havo yaxshi, sayr qiling";
//     } else if (inputTemperature >= 10 && inputTemperature < 20) {
//         return "Salqin, issiq kiying";
//     } else {
//         return "Juda sovuq, uyda qoling";
//     }
// };
// console.log(task6(30));