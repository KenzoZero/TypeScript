"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*import { Abc as MAbc, printAbc as pr } from "./MModule";*/
const MModule = require("./MModule");
/*let strings = ["Hello", "98052", "101"];

// Validators to use
let validators: { [s: string]: StringValidator; } = {};
validators["ZIP code"] = new ZipCodeValidator();
validators["Letters only"] = new LettersOnlyValidator();

// Show whether each string passed each validator
for (let s of strings) {
    for (let name in validators) {
        console.log("ABC");
    }
}*/
let obj = new MModule.Abc();
obj.showInfo();
MModule.printAbc();
console.log("Abc");
