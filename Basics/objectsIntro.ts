const User = {
    name : "siddharth",
    email: "skm@gmail.com",
    isActive: true
}

// function createUser({name, email, isPaid}:{name :string, email: string, isPaid: boolean}) {
//     console.log(name);
    
// }

// createUser({name:"abc", email: "abc@gmail.com", isPaid: false})

function createUser({name: string, isPaid: boolean}) {}
let newUser = {name: "abc", isPaid: false, email: "abc@gmail.com"}
createUser(newUser);

// createUser({name: "abc", isPaid: false, email: "abc@gmail.com"})

type Mystring = string
function myfunc(str: string): Mystring {
    return "";
}

type User = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean,
    creditCardDetails?: number
}

let myUser: User = {
    _id: "1234",
    name: "siddharth",
    email : "abc@def.com",
    isActive: true,
} 

// myUser._id = "2345"; // error

type cardNumber = {
    cardnumber: string,
}

type cardDate = {
    cardDate: string,
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

let myCard: cardDetails = {cardnumber: "1234-5678-9012-3456", cardDate: "12/23", cvv: 123}

export {}