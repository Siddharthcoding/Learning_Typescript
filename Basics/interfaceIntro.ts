interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    isActive?: boolean,
}

interface User {  // merging interfaces
    githubToken: string,
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

// const siddharth: User = {dbId: 1, email: "abc@def.com", userId: 1234, githubToken: "abc123"}
const siddharth: Admin = {dbId: 1, email: "abc@def.com", userId: 1234, githubToken: "abc123", role: "admin"}

siddharth.email = "skm@gmail.com" // allowed
// siddharth.dbId = 1234 // not allowed

interface Course {
    startTrial: () => string,
    endTrial(): string,
    getCoupon(couponName: string, value: number): number
}
const myCourse: Course = {
    startTrial: () => {
        return "Trial started"
    },
    endTrial: () => {
        return "Trial ended"
    },
    getCoupon: (name: string, off: number) => {
        return 10
    }
}



export {}