// Định nghĩa là veriable Interface
enum TaskState
{
	Created = 100,
	Active,
	InActive,
	Proccess,
	Finish
}
interface TaskInterface
{
	id:number;
	name:string;
	state ?: TaskState;
}
class TaskService
{
	tasks : TaskInterface[];
	constructor(tasks: TaskInterface[])
	{
		this.tasks = tasks;
	}
	// Phuong thức trả về danh sách các công việc trong 1 ngày
	getItems()
	{
		return this.tasks;
	}
}

let task1:TaskInterface = {id:1,name:"Coding"};
let task2:TaskInterface = {id:2,name:"Studying ES6"};

/*
let tasks: TaskInterface[] = [
	{id:1,name:"Coding"}
	{id:1,name:"Coding"},
];*/

let tasks: TaskInterface[] = [
	task1,
	task2,
	{id:3, name: "Kiss my girl",state: TaskState.Finish}
];

let taskServiceObj = new TaskService(tasks);
let a = taskServiceObj.getItems();
console.log(a);
