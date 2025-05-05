"use strict";
// Partial
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var updateAssignment = function (assign, propsToUpdate) {
    return __assign(__assign({}, assign), propsToUpdate);
};
var assign1 = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0,
};
console.log(updateAssignment(assign1, { grade: 95 })); // { studentId: 'compsci123', title: 'Final Project', grade: 95, verified: undefined }
var assignGraded = updateAssignment(assign1, { grade: 95 });
// Required allows you to make all properties required
// Readonly makes all properties readonly
var recordAssignment = function (assign) {
    // send to database, etc. 
    return assign;
};
var assignVerified = __assign(__assign({}, assignGraded), { verified: true });
// NOTE: assignVerified won't work with recordAssignment!
// Why? Try it and see what TS tells you :)
// recordAssignment(assignVerified) // Error: Type 'Readonly<Assignment>' is not assignable to type 'Required<Assignment>'.
recordAssignment(__assign(__assign({}, assignGraded), { verified: true }));
// Record 
var hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
};
var finalGrades = {
    Sara: "B",
    Kelly: "U"
};
var gradeData = {
    Sara: { assign1: 85, assign2: 93 },
    Kelly: { assign1: 76, assign2: 15 },
};
var score = {
    studentId: "k123",
    grade: 85,
};
var preview = {
    studentId: "k123",
    title: "Final Project",
};
// ReturnType 
//type newAssign = { title: string, points: number }
var createNewAssign = function (title, points) {
    return { title: title, points: points };
};
var tsAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);
var assignArgs = ["Generics", 100];
var tsAssign2 = createNewAssign.apply(void 0, assignArgs);
console.log(tsAssign2);
var fetchUsers = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch('https://jsonplaceholder.typicode.com/users').then(function (res) {
                    return res.json();
                }).catch(function (err) {
                    if (err instanceof Error)
                        console.log(err.message);
                })];
            case 1:
                data = _a.sent();
                return [2 /*return*/, data];
        }
    });
}); };
fetchUsers().then(function (users) { return console.log(users); });
