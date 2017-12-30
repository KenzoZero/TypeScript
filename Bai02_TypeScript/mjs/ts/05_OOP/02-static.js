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
        TaskService.tasks = tasks;
    }
    // Phuong thức trả về danh sách các công việc trong 1 ngày
    getItems() {
        return TaskService.tasks;
    }
    static showItemInfo() {
        for (let task of TaskService.tasks) {
            console.log(`${TaskService.username} - ${task.name}`);
        }
    }
}
TaskService.username = "peter";
let tasks = [
    { id: 1, name: "Coding" },
    { id: 2, name: "Studying ES6" },
    { id: 3, name: "Kiss my girl", state: TaskState.Finish }
];
let taskServiceObj = new TaskService(tasks);
TaskService.showItemInfo();
//console.log(TaskService.username);
let a = taskServiceObj.getItems();
console.log(a);
