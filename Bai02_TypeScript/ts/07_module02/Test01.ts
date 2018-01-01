import { StringValidator } from "./Validation01";
import { ZipCodeValidator } from "./ZipCodeValidator01";
import { LettersOnlyValidator } from "./LettersOnlyValidator01";

let strings = ["Hello", "98052", "101"];

// Validators to use
let validators: { [s: string]: StringValidator; } = {};
validators["ZIP code"] = new ZipCodeValidator();
validators["Letters only"] = new LettersOnlyValidator();

// Show whether each string passed each validator
for (let s of strings) {
    for (let name in validators) {
        console.log("ABC");
    }
}