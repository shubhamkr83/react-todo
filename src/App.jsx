import { useState } from "react";
import TodoContainer from "./components/TodoContainer";

function App() {

	// add todo usestate
	const [task, setTask] = useState([]);

	// add todo function
	const addTodo = () => {
		let newTask = document.getElementById('new-task');
		let newTaskObj = {
			completed: false,
			title: newTask.value,
			id: Date.now()
		}
		task.push(newTaskObj);
		setTask(task)
		newTask.value = "";
	}

	// const [newTask, setNewTask] = useState(addedTask);
	return (
		<>
			{/* todo app heading */}
			<h1 className="todo_heading">Todo App</h1>
			{/* todo app container */}
			<div className="App">
				{/* animated background section */}
				<div className="background">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					{/* todo input section */}
					<div className="todo-bar-container">
						<div className="todo-bar">
							<div style={{ borderRadius: "10px 0 0 10px" }} className="icon-container">
								<i className="fa-solid fa-pen-clip"></i>
							</div>
							<input id="new-task" type="text" placeholder="Enter your today's tasks" autoComplete="off" />
							<div style={{ borderRadius: "0 10px 10px 0" }} className="icon-container" id="add-btn" onClick={addTodo}>
								<i className="fa-solid fa-plus"></i>
							</div>
						</div>
					</div>
					{/* todo component */}
					<TodoContainer addedTask={task} />
				</div>

			</div>
		</>
	);
}

export default App;
