"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var echo = function (arg) { return arg; };
var isObj = function (arg) {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};
console.log(isObj(true)); // false;
console.log(isObj("Hello")); // false;
console.log(isObj([1, 2, 3])); // false;
console.log(isObj({ name: 'Siddharth' })); // true;
console.log(isObj(null)); // false;
var isTrue = function (arg) {
    if (isObj(arg) && !Object.keys(arg).length)
        return { arg: arg, is: false };
    return { arg: arg, is: !!arg };
};
console.log(isTrue(true)); // {arg: true, is: true};
console.log(isTrue({})); // {arg: {}, is: false};
console.log(isTrue({ name: 'Siddharth' })); // {arg: {name: 'Siddharth'}, is: true};
var processUser = function (user) {
    return user;
};
console.log(processUser({ id: 1, name: 'Siddharth' })); // {id: 1, name: 'Siddharth'};
var getUsersProperty = function (users, key) {
    return users.map(function (user) { return user[key]; });
};
var usersArray = [
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
];
console.log(getUsersProperty(usersArray, "email")); // ["Sincere@april.biz", "Shanna@melissa.tv"]
console.log(getUsersProperty(usersArray, "username")); // ["Bret", "Antonette"]
var StateObject = /** @class */ (function () {
    function StateObject(value) {
        this.data = value;
    }
    Object.defineProperty(StateObject.prototype, "state", {
        get: function () {
            return this.data;
        },
        set: function (value) {
            this.data = value;
        },
        enumerable: false,
        configurable: true
    });
    return StateObject;
}());
var store = new StateObject("John");
console.log(store.state);
store.state = "Dave";
//store.state = 12
var myState = new StateObject([15]);
myState.state = ['Dave', 42, true];
console.log(myState.state);
