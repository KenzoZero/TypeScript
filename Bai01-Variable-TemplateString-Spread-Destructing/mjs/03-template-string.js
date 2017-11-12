let elm = document.getElementById("mContent");
elm.style.color = "#0174DF";

/*
let name = "TypeScript 123";
let price = 6;
elm.innerHTML = `<div>
					Course name :<b>${name}</b>, 
					Price  		:<b style="color:red"> ${price}: </b>
				</div>`;
*/

let todo = {
	id: 169,
	name: "Play football",
	status: true
};
elm.innerHTML = `<div id="todo-id-${todo.id}">
					<i class="${todo.status == true ? "hidden":""} glyphicon glyphicon-ok"></i>
					<span class="name">${todo.name}</span>
				</div>`;