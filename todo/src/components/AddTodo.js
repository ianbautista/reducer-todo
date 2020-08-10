import React from "react";

export default function AddTodo(props) {
	return (
		<div class="add-todo">
			<input
				type="text"
				name="currentTodo"
				value={props.currentTodo}
				onChange={props.handleChanges}
			/>{" "}
			<button type="submit" onClick={props.handleSubmit}>
				Add To do
			</button>{" "}
			<br />
			<button onClick={props.clearCompleted}>Clear Completed</button>
		</div>
	);
}
