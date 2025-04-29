"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return "hello";
}
addTwo(8);
var signUpUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
signUpUser("abc", "abc@def.com");
var heros = ["thor", "spiderman", "ironman"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
    // return 1;
});
function consoleError(errMsg) {
    console.log(errMsg);
    // return 1;
}
function handleError(errMsg) {
    throw new Error(errMsg);
}
