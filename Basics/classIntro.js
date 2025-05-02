"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var Coder = /** @class */ (function () {
    function Coder(name, music, age, lang) {
        if (lang === void 0) { lang = 'TypeScript'; }
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    Coder.prototype.getAge = function () {
        return this.age;
    };
    return Coder;
}());
var siddharth = new Coder("Siddharth", "Rock", 20);
// console.log(siddharth.age) // not allowed;
// console.log(siddharth.lang) // not allowed;
console.log(siddharth.getAge()); // allowed;
var WebDev = /** @class */ (function (_super) {
    __extends(WebDev, _super);
    function WebDev(computer, name, music, age) {
        var _this = _super.call(this, name, music, age) || this;
        _this.computer = computer;
        _this.computer = computer;
        return _this;
    }
    WebDev.prototype.getLang = function () {
        return this.lang;
    };
    WebDev.prototype.getAge = function () {
        // return this.age // not allowed;
        return this.getAge(); // allowed; 
        return _super.prototype.getAge.call(this); // allowed;
    };
    return WebDev;
}(Coder));
var Sara = new WebDev("Mac", "Sara", "Pop", 22);
console.log(Sara.getLang()); // allowed;
console.log(Sara.getAge()); // allowed;
var Peeps = /** @class */ (function () {
    function Peeps(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
    Peeps.prototype.getCount = function () {
        return Peeps.count;
    };
    Peeps.count = 0;
    return Peeps;
}());
var Siddharth = new Peeps("Siddharth");
var Sara1 = new Peeps("Sara");
console.log(Peeps.count); // 2;
console.log(Siddharth.getCount()); // 2;
var Bands = /** @class */ (function () {
    function Bands() {
        this.dataState = [];
    }
    Object.defineProperty(Bands.prototype, "data", {
        get: function () {
            return this.dataState;
        },
        set: function (value) {
            if (!Array.isArray(value)) {
                throw new Error("Invalid data");
            }
            this.dataState = value;
            return;
        },
        enumerable: false,
        configurable: true
    });
    return Bands;
}());
var myBand = new Bands();
myBand.data = ["Band1", "Band2"]; // set data
console.log(myBand.data); // ["Band1", "Band2"] get data
// myBand.data = 3 // not allowed;
myBand.data = __spreadArray(__spreadArray([], myBand.data, true), ["Band3"], false); // set data
console.log(myBand.data); // ["Band1", "Band2", "Band3"] get data;
//abstract class
var TakePhoto = /** @class */ (function () {
    function TakePhoto(name) {
        this.name = name;
        this.name = name;
    }
    TakePhoto.prototype.getReelTime = function () {
        return 8;
    };
    return TakePhoto;
}());
// const myPhoto = new TakePhoto("Siddharth") // not allowed;
var Instagram = /** @class */ (function (_super) {
    __extends(Instagram, _super);
    function Instagram(name, reels) {
        var _this = _super.call(this, name) || this;
        _this.reels = reels;
        _this.reels = reels;
        return _this;
    }
    Instagram.prototype.getSepia = function () {
        console.log("Sepia");
    };
    return Instagram;
}(TakePhoto));
var myPhoto = new Instagram("Siddharth", 3);
myPhoto.getReelTime(); // 8
