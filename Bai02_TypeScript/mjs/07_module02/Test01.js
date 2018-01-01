"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ZipCodeValidator01_1 = require("./ZipCodeValidator01");
const LettersOnlyValidator01_1 = require("./LettersOnlyValidator01");
let strings = ["Hello", "98052", "101"];
// Validators to use
let validators = {};
validators["ZIP code"] = new ZipCodeValidator01_1.ZipCodeValidator();
validators["Letters only"] = new LettersOnlyValidator01_1.LettersOnlyValidator();
// Show whether each string passed each validator
for (let s of strings) {
    for (let name in validators) {
        console.log("ABC");
    }
}
