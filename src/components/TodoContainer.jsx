import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import { Bars } from "react-loader-spinner";

function TodoContainer({ addedTask }) {

	// all todos usestate
	const [todos, setTodos] = useState([]);
	const [loading, setLoading] = useState(false);
	const [newTask, setNewTask] = useState(addedTask);

	// useeffect for fetching todo api 
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/todos")
			.then((response) => response.json())
			.then((json) => {
				setTimeout(() => {
					setTodos(json);
					setLoading(true);
				}, 1000);
			});
	}, []);

	// Whenever the new task is added then that task
	useEffect(() => {
		let taskAddedByUser = addedTask.map((task, index) => {
			return <TodoItem task={task} key={index} />;
		});
		setNewTask(taskAddedByUser)
	}, [newTask])

	return (
		// todo container
		<div className="todo-container">
			{/* newtasks */}
			{newTask}
			{/* map method to display array of todos */}
			{loading ? (
				todos.map((task, index) => {
					return <TodoItem task={task} key={index} />;
				})
			) : (
				<Bars height="80" width="80" color="#4fa94d" ariaLabel="bars-loading" visible={true} />
			)}
		</div>
	);
}

export default TodoContainer;
