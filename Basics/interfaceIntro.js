"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var siddharth = { dbId: 1, email: "abc@def.com", userId: 1234 };
siddharth.email = "skm@gmail.com"; // allowed
var myCourse = {
    startTrial: function () {
        return "Trial started";
    },
    endTrial: function () {
        return "Trial ended";
    },
    getCoupon: function (name, off) {
        return 10;
    }
};
