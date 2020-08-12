import React from "react";
import Todo from "./Todo";

export default function Todos(props) {
	return (
		<ul>
			{props.state.map((task) => (
				<Todo key={task.id} todo={task} toggleTask={props.toggleTask} />
			))}
			<button onClick={props.clearCompleted}>
				<i className="fas fa-trash-alt"></i>
			</button>
		</ul>
	);
}
