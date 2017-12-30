class Course1
{
	private _name : string;
	constructor(name:string)
	{
		this._name = name;
	}

	showCourseInfo():void
	{
		console.log(`${this._name}`);
	}

	public get name() : string {
		return this._name
	}

	public set name(v : string) {
		this._name = v;
	}
}

var courseObj1 = new Course1("TypeScript");
console.log(courseObj1);
console.log("Name: " + courseObj1.name);

courseObj1.name = "Typescript Tranning";
console.log("Name: " + courseObj1.name);