const echo = <T>(arg: T) : T => arg;
 
const isObj = <T>(arg: T) :boolean => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
}

console.log(isObj(true)) // false;
console.log(isObj("Hello")) // false;
console.log(isObj([1, 2, 3])) // false;
console.log(isObj({name: 'Siddharth'})) // true;
console.log(isObj(null)) // false;

const isTrue = <T>(arg: T) : {arg: T, is: boolean} => {
    if(isObj(arg) && !Object.keys(arg as object).length) 
    return {arg, is: false}

    return {arg, is: !!arg} 
}

console.log(isTrue(true)) // {arg: true, is: true};
console.log(isTrue({})) // {arg: {}, is: false};
console.log(isTrue({name: 'Siddharth'})) // {arg: {name: 'Siddharth'}, is: true};

interface HasID {
    id: number
}

const processUser = <T extends HasID>(user: T) : T => {
    return user
}

console.log(processUser({id: 1, name: 'Siddharth'})) // {id: 1, name: 'Siddharth'};

const getUsersProperty = <T extends HasID, K extends keyof T>(users: T[], key: K): T[K][] => {
    return users.map(user => user[key])
}

const usersArray = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
]

console.log(getUsersProperty(usersArray, "email"))  // ["Sincere@april.biz", "Shanna@melissa.tv"]
console.log(getUsersProperty(usersArray, "username")) // ["Bret", "Antonette"]


class StateObject<T> {
    private data: T

    constructor(value: T) {
        this.data = value
    }

    get state(): T {
        return this.data
    }

    set state(value: T) {
        this.data = value
    }
}

const store = new StateObject("John")
console.log(store.state)
store.state = "Siddharth"
//store.state = 12

const myState = new StateObject<(string | number | boolean)[]>([15])
myState.state = ['Siddharth', 42, true, "Hello"]
console.log(myState.state)

export {}
