// interface TransactionObj {
//     Pizza : number;
//     Books : number;
// }

interface TransactionObj {
    [index: string]: number ; // index signature
    [key: number]: number; // index signature
}

const todaysTransactions: TransactionObj = {
    Pizza: 30,
    Books: 20,
}

console.log(todaysTransactions.Pizza) // 30;
console.log(todaysTransactions['Pizza']) // 30;

let prop : string = 'Pizza'
console.log(todaysTransactions[prop]) // 30;

const todaysNet = (transactions: TransactionObj) => {
    let total = 0
    for (const transaction in transactions) {
        total += transactions[transaction]
    }
    return total
}

console.log(todaysNet(todaysTransactions)) // 50;

console.log(todaysTransactions['Toys']); // undefined


// keyof

interface Student {
    name: string,
    GPA: number,
    classes ?: number[]
}

const student: Student = {
    name: 'Siddharth',
    GPA: 9.7,
    classes: [26, 20]
}

for(const key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`) // name: Siddharth, GPA: 9.7, classes: 26,20;
}

Object.keys(student).map((key) => {
    console.log(`${key}: ${student[key as keyof typeof student]}`) // name: Siddharth, GPA: 9.7, classes: 26,20;
})

const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`${key}: ${student[key]}`) 
}

logStudentKey(student, 'name') // name: Siddharth;

// Record utility types

type Streams= 'Salary' | 'Investment' | 'Side Hustle'
type Income = Record<Streams, number | string>

const monthlyIncome: Income = {
    Salary: 5000,
    Investment: 2000,
    'Side Hustle': '1000',
}

for(const revenue in monthlyIncome) {
    console.log(monthlyIncome[revenue as keyof Income]) // 5000, 2000, 1000;
    
}


export {}