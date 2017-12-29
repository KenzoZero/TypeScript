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
	public static username: string = "peter";
	static tasks : TaskInterface[];
	constructor(tasks: TaskInterface[])
	{
		TaskService.tasks = tasks;
	}
	// Phuong thức trả về danh sách các công việc trong 1 ngày
	getItems()
	{
		return TaskService.tasks;
	}

	static showItemInfo():void
	{
		for(let task of TaskService.tasks)
		{
			console.log(`${TaskService.username} - ${task.name}`);
		}
	}
}

let tasks: TaskInterface[] = [
	{id:1,name:"Coding"},
	{id:2,name:"Studying ES6"},
	{id:3, name: "Kiss my girl",state: TaskState.Finish}
];

let taskServiceObj = new TaskService(tasks);

TaskService.showItemInfo();
//console.log(TaskService.username);

let a = taskServiceObj.getItems();
console.log(a);
