import React, { useState } from "react";

function TodoItem({ task }) {

	// edit todo usestate
	const [editClass, setEditClass] = useState("fa-solid fa-pen-to-square");
	// task completed todo usestate
	const [isCompleted, setIsCompleted] = useState(task.completed);

	// linethrough style when task is complate
	const textStyle = {
		textDecoration: isCompleted ? "line-through 2px hsl(199deg 31% 14%)" : "none",
	};

	// edit task function
	const editTask = (e) => {

		let taskInDOM = e.target.parentElement.parentElement.children[0];

		if (editClass === "fa-solid fa-pen-to-square") {
			// Deleting the task and adding a input 
			let textToBeEdited = taskInDOM.children[1].innerText;
			const node = document.createElement("input");
			node.setAttribute("type", "text");
			node.setAttribute("value", textToBeEdited);
			taskInDOM.appendChild(node);
			taskInDOM.children[1].remove();
			setEditClass("fa-solid fa-check");
		} else {
			let newTaskAfterEdit = taskInDOM.children[1].value;
			const node = document.createElement("div");
			node.setAttribute("style", textStyle);
			node.innerText = newTaskAfterEdit;
			taskInDOM.appendChild(node);
			taskInDOM.children[1].remove();
			setEditClass("fa-solid fa-pen-to-square");
		}
	};

	// delete task function
	const deleteTask = (e) => {
		let taskInDOM = e.target.parentElement.parentElement.children[0];
		taskInDOM.parentElement.remove();
	};

	// task complete function
	const completeTask = (e) => {
		if (isCompleted === true) {
			console.log(e.target.parentElement);
			setIsCompleted(false);
		} else {
			setIsCompleted(true);
		}
	};

	// task icon color style when complete
	const completedStyle = {
		color: isCompleted ? "green" : "#2c2c2c",
	};

	return (
		// todo items
		<div className="todo-item">
			{/* task icon */}
			<div className="icon-tasks">
				<i className="fa-solid fa-circle-check" onClick={completeTask} style={completedStyle}></i>
				{/* task titles */}
				<div className="task-name" style={textStyle}>{task.title}</div>
			</div>
			{/* edit and delete icons */}
			<div className="icons">
				{isCompleted ? <i className={editClass} onClick={() => alert("Completed Task can't be edited")}></i> : <i className={editClass} onClick={editTask}></i>}
				<i className="fa-solid fa-trash" onClick={deleteTask}></i>
			</div>
		</div>
	);
}

export default TodoItem;
