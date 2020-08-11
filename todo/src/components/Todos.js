import React from "react";
import Todo from "./Todo";

export default function TodoList(props) {
	return (
		<ul>
			{props.todos.map((task) => (
				<Todo key={task.id} todo={task} toggleTask={props.toggleTask} />
			))}
			<button onClick={props.clearCompleted}>
				<i class="fas fa-trash-alt"></i>
			</button>
		</ul>
	);
}
