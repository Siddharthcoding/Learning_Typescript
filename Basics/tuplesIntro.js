"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = ["siddharth", 1234, "sid"];
var user1 = ["siddharth", 1234]; // tuple
var rgb = [255, 255, 255]; // tuple
var user2 = [
    [1234, "siddharth"],
    [1235, "sid"]
];
user2[1][1] = "siddharth";
user2.push([1236, "siddharth"]); // push is allowed
user2.pop(); // pop is allowed
