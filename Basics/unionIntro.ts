let score : number | string = 33;
score = 33
score = "55"

type User = {
    name: string,
    id: number
}

type Admin = {
    username: string,
    id: number
}

let siddharth : User | Admin = {name: "siddharth", id: 1234}
siddharth = {username: "sid", id: 1234}

function getDbId(id: number | string) {
    // id.toLowerCase(); // error
    if(typeof id === "string") {
        id.toLowerCase();
    }
}

let data1: number[] = [1, 2, 3]
let data2: string[] = ["1", "2", "3"]
let data3: number[] | string[] = [1, 2, 3] // either all number or all string

let data4: (number | string)[] = [1, 2, 3, "4", "5"] // can have both number and string

let seatAllotmets: "aisle" | "middle" | "window"
seatAllotmets = "aisle"
// seatAllotmets = "crew" // error

export {}