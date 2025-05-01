let user: (string | number)[] = ["siddharth", 1234, "sid"];

let user1: [string, number] = ["siddharth", 1234]; // tuple

const rgb: [number, number, number] = [255, 255, 255]; // tuple

type User = [number, string][]; // tuple array
const user2: User = [
    [1234, "siddharth"],
    [1235, "sid"]
]

user2[1][1] = "siddharth"
user2.push([1236, "siddharth"]) // push is allowed
user2.pop(); // pop is allowed

export {}