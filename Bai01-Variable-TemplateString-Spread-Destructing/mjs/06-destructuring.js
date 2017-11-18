
/* ============= CASE 01=============== */
/*
let arr = [133,"ES6",false];

// Viết theo khái niệm destructing
let[id,name,free] = arr;
console.log(id + "-" +name+"-"+free);
*/

/* ============= CASE 02=============== */
let objCourse = {
	id : 465,
	name : "ES6",
	free: false,
	createBy: "admin123"
}

let {id,name,free,createBy = "admin"} = objCourse;
console.log(id + " - " +name+" - "+ free+" - "+createBy);