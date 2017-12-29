// Định nghĩa là veriable Interface
var TaskState;
(function (TaskState) {
    TaskState[TaskState["Created"] = 100] = "Created";
    TaskState[TaskState["Active"] = 101] = "Active";
    TaskState[TaskState["InActive"] = 102] = "InActive";
    TaskState[TaskState["Proccess"] = 103] = "Proccess";
    TaskState[TaskState["Finish"] = 104] = "Finish";
})(TaskState || (TaskState = {}));
class TaskService {
    constructor(tasks) {
        this.tasks = tasks;
    }
    // Phuong thức trả về danh sách các công việc trong 1 ngày
    getItems() {
        return this.tasks;
    }
}
let task1 = { id: 1, name: "Coding" };
let task2 = { id: 2, name: "Studying ES6" };
/*
let tasks: TaskInterface[] = [
    {id:1,name:"Coding"}
    {id:1,name:"Coding"},
];*/
let tasks = [
    task1,
    task2,
    { id: 3, name: "Kiss my girl", state: TaskState.Finish }
];
let taskServiceObj = new TaskService(tasks);
let a = taskServiceObj.getItems();
console.log(a);
