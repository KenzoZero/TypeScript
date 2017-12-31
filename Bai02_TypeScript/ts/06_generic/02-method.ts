class StudyGeneric
{
	// In ra các array thuộc về array kiểu chuỗi , array kiểu số và array kiểu boolen
	static printArray<T>(params:T[]) :void
	{
		console.log(params);
	}
}

// params truyền vào phải là 1 array chứa các con số.
StudyGeneric.printArray<number>([1,2,3,5]);

// params truyền vào phải là 1 array kiểu string.
StudyGeneric.printArray<string>(["a","bc","def"]);

// params truyền vào phải là 1 array chứa các any.
StudyGeneric.printArray<any>([1,2,3,5,"a",true]);