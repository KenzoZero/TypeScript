class StudyGeneric {
    // In ra các array thuộc về array kiểu chuỗi , array kiểu số và array kiểu boolen
    static printArray(params) {
        console.log(params);
    }
}
// params truyền vào phải là 1 array chứa các con số.
StudyGeneric.printArray([1, 2, 3, 5]);
// params truyền vào phải là 1 array kiểu string.
StudyGeneric.printArray(["a", "bc", "def"]);
// params truyền vào phải là 1 array chứa các any.
StudyGeneric.printArray([1, 2, 3, 5, "a", true]);
