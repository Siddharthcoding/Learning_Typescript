"use strict";
// interface TransactionObj {
//     Pizza : number;
//     Books : number;
// }
Object.defineProperty(exports, "__esModule", { value: true });
var todaysTransactions = {
    Pizza: 30,
    Books: 20,
};
console.log(todaysTransactions.Pizza); // 30;
console.log(todaysTransactions['Pizza']); // 30;
var prop = 'Pizza';
console.log(todaysTransactions[prop]); // 30;
var todaysNet = function (transactions) {
    var total = 0;
    for (var transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions)); // 50;
console.log(todaysTransactions['Toys']); // undefined
var student = {
    name: 'Siddharth',
    GPA: 9.7,
    classes: [26, 20]
};
for (var key in student) {
    console.log("".concat(key, ": ").concat(student[key])); // name: Siddharth, GPA: 9.7, classes: 26,20;
}
Object.keys(student).map(function (key) {
    console.log("".concat(key, ": ").concat(student[key])); // name: Siddharth, GPA: 9.7, classes: 26,20;
});
var logStudentKey = function (student, key) {
    console.log("".concat(key, ": ").concat(student[key]));
};
logStudentKey(student, 'name'); // name: Siddharth;
var monthlyIncome = {
    Salary: 5000,
    Investment: 2000,
    'Side Hustle': '1000',
};
for (var revenue in monthlyIncome) {
    console.log(monthlyIncome[revenue]); // 5000, 2000, 1000;
}
