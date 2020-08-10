import React from "react";

export default function Todo(props) {
	const { item, id, completed } = props.todo;
	return (
		<div
			onClick={() => props.toggleTask(id)}
			className={`${completed ? "completed todoCard" : "todoCard"}`}
		>
			<li>{item}</li>
		</div>
	);
}
